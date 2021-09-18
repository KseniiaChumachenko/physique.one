import React from "react";
import { observer } from "mobx-react-lite";
import { Autocomplete, AutocompleteProps } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { Trans } from "@lingui/react";
import { Food_Insert_Input } from "../graphql/generated/graphql";
import { useStore } from "../store";
import { aggregate } from "../screens/Recipes/utils";

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

interface MealAutocompleteProps
  extends Partial<AutocompleteProps<any, any, any, any>> {
  withRecipes?: boolean;
  value: string;
  setValue: (id: string) => void;
}

export const MealAutocomplete = observer(
  ({
    value,
    setValue,
    withRecipes = true,
    ...restProps
  }: MealAutocompleteProps) => {
    const {
      recipeStore: { data: recipes },
      foodLibraryStore: { data: foods },
    } = useStore();

    const remappedOptions = withRecipes
      ? [
          ...foods,
          ...recipes.map((r) => ({
            id: r.id,
            recipe_id: r.id,
            name: r.name,
            type: "Recipe",
            carbohydrates: aggregate(r.recipe_items, "carbohydrates"),
            proteins: aggregate(r.recipe_items, "proteins"),
            fats: aggregate(r.recipe_items, "fats"),
            energy_cal: aggregate(r.recipe_items, "energy_cal"),
            energy_kj: aggregate(r.recipe_items, "energy_kj"),
            weight: aggregate(r.recipe_items, "weight"),
            recipe: true,
          })),
        ]
      : foods;

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
