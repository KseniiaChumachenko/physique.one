import React from "react";
import { Autocomplete, AutocompleteProps } from "@material-ui/lab";
import { PropTypes, TextField } from "@material-ui/core";
import { t } from "@lingui/macro";
import {
  FoodPreloadedHookProps,
  FoodQuery$data,
  useFoodPreloadedQuery,
} from "src/api-hooks/food";
import {
  RecipesPreloadedHookProps,
  useRecipesPreloaded,
} from "src/api-hooks/recipes";

export type MealAutocompleteListItem = FoodQuery$data["food_connection"]["edges"][0]["node"] & {
  recipe?: boolean;
  food?: string;
  recipe_id?: string;
};

type ExtendProps = RecipesPreloadedHookProps &
  FoodPreloadedHookProps &
  Partial<AutocompleteProps<any, any, any, any>>;

interface MealAutocompleteProps extends ExtendProps {
  withInputLabel?: boolean;
  withRecipes?: boolean;
  value: string;
  setValue: (id: string, type?: "recipe" | "food") => void;
  fieldMargin?: PropTypes.Margin;
}

export const MealAutocomplete = ({
  value,
  setValue,
  withInputLabel = true,
  withRecipes = true,
  foodQR,
  recipesQR,
  fieldMargin = "dense",
  ...restProps
}: MealAutocompleteProps) => {
  const {
    data: {
      food_connection: { edges: foods },
    },
  } = useFoodPreloadedQuery(foodQR);
  const {
    data: {
      recipe_connection: { edges: recipes },
    },
  } = useRecipesPreloaded(recipesQR);

  const remappedOptions = withRecipes
    ? [
        ...foods.map(({ node }) => ({ ...node })),
        ...recipes.map(({ node: r }) => ({
          id: r?.id,
          recipe_id: r?.id,
          name: r.name,
          type: "Recipe",
          carbohydrates: r?.recipe_items_aggregate?.aggregate?.sum?.carbohydrates,
          proteins: r?.recipe_items_aggregate?.aggregate?.sum?.proteins,
          fats: r?.recipe_items_aggregate?.aggregate?.sum?.fats,
          energy_cal: r?.recipe_items_aggregate?.aggregate?.sum?.energy_cal,
          energy_kj: r?.recipe_items_aggregate?.aggregate?.sum?.energy_kj,
          weight: r?.recipe_items_aggregate?.aggregate?.sum?.weight,
          recipe: true,
        })),
      ]
    : foods.map(({ node }) => ({ ...node }));

  const valueFromOptions = remappedOptions.find(({ id }) => id === value);
  const label =
    withInputLabel && (withRecipes ? t`Select food or recipe` : t`Select food`);

  return (
    <Autocomplete
      options={remappedOptions}
      defaultValue={remappedOptions[0]}
      getOptionLabel={(option: MealAutocompleteListItem) =>
        option?.name +
          " " +
          (option?.food_brand?.name
            ? "(" + option?.food_brand?.name + ")"
            : "") || ""
      }
      value={valueFromOptions}
      onChange={(event: any, newValue: MealAutocompleteListItem | null) => {
        setValue(newValue?.id || "", newValue?.recipe_id ? "recipe" : "food");
        event.stopPropagation();
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} margin={fieldMargin} />
      )}
      {...restProps}
    />
  );
};
