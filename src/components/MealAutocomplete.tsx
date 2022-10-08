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
  RecipePreloadedHookProps,
  useRecipePreloaded,
} from "src/api-hooks/recipe";
import { aggregate } from "../screens/Recipes/utils";

export type MealAutocompleteListItem = FoodQuery$data["food_connection"]["edges"][0]["node"] & {
  recipe?: boolean;
  food?: string;
  recipe_id?: string;
};

type ExtendProps = RecipePreloadedHookProps &
  FoodPreloadedHookProps &
  Partial<AutocompleteProps<any, any, any, any>>;

interface MealAutocompleteProps extends ExtendProps {
  withInputLabel?: boolean;
  withRecipes?: boolean;
  value: string;
  setValue: (id: string, type?: "recipe" | "food") => void;
  fieldMargin: PropTypes.Margin;
}

export const MealAutocomplete = ({
  value,
  setValue,
  withInputLabel = true,
  withRecipes = true,
  foodQR,
  recipeQR,
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
  } = useRecipePreloaded(recipeQR);

  const remappedOptions = withRecipes
    ? [
        ...foods.map(({ node }) => ({ ...node })),
        ...recipes.map(({ node: r }) => ({
          id: r?.id,
          recipe_id: r?.id,
          name: r.name,
          type: "Recipe",
          carbohydrates: aggregate(r.recipe_items as any, "carbohydrates"),
          proteins: aggregate(r.recipe_items as any, "proteins"),
          fats: aggregate(r.recipe_items as any, "fats"),
          energy_cal: aggregate(r.recipe_items as any, "energy_cal"),
          energy_kj: aggregate(r.recipe_items as any, "energy_kj"),
          weight: aggregate(r.recipe_items as any, "weight"),
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
