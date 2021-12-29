import React from "react";
import { observer } from "mobx-react-lite";
import { Autocomplete, AutocompleteProps } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { Trans } from "@lingui/react";
import { Food_Insert_Input } from "../graphql/generated/graphql";
import { aggregate } from "../screens/Recipes/utils";
import {
  FoodPreloadedHookProps,
  useFoodPreloadedQuery,
} from "../api-hooks/food";
import {
  RecipePreloadedHookProps,
  useRecipePreloaded,
} from "../api-hooks/recipe";

export type MealAutocompleteListItem = Food_Insert_Input & {
  recipe?: boolean;
  food?: string;
  recipe_id?: string;
};

export type FoodOptionalType =
  | MealAutocompleteListItem
  | string
  | null
  | undefined;

type ExtendProps = RecipePreloadedHookProps &
  FoodPreloadedHookProps &
  Partial<AutocompleteProps<any, any, any, any>>;

interface MealAutocompleteProps extends ExtendProps {
  withRecipes?: boolean;
  value: string;
  setValue: (id: string) => void;
}

export const MealAutocomplete = observer(
  ({
    value,
    setValue,
    withRecipes = true,
    foodQueryReference,
    recipeQueryReference,
    ...restProps
  }: MealAutocompleteProps) => {
    const {
      food_connection: { edges: foods },
    } = useFoodPreloadedQuery(foodQueryReference);
    const {
      recipe_connection: { edges: recipes },
    } = useRecipePreloaded(recipeQueryReference);

    const remappedOptions = withRecipes
      ? [
          ...foods.map(({ node }) => ({ ...node })),
          ...recipes.map(({ node: r }) => ({
            id: r.id,
            recipe_id: r.id,
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

    return (
      <Autocomplete
        options={remappedOptions}
        defaultValue={remappedOptions[0]}
        getOptionLabel={(option: MealAutocompleteListItem) => option.name}
        value={valueFromOptions}
        onChange={(event: any, newValue: MealAutocompleteListItem | null) => {
          setValue(newValue?.id);
          event.stopPropagation();
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={
              withRecipes ? (
                <Trans>Select food or recipe</Trans>
              ) : (
                <Trans>Select food</Trans>
              )
            }
            margin="dense"
          />
        )}
        {...restProps}
      />
    );
  }
);
