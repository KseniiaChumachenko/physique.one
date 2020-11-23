import React, { Dispatch, useEffect, useMemo } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteProps } from "@material-ui/lab";
import {
  Food_Insert_Input,
  useFoodSelectFieldListingQuery,
} from "../graphql/generated/graphql";
import { Trans } from "@lingui/react";

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
  value: FoodOptionalType;
  setValue: Dispatch<FoodOptionalType>;
}

export function MealAutocomplete({
  value,
  setValue,
  ...restProps
}: MealAutocompleteProps) {
  const { data } = useFoodSelectFieldListingQuery();

  const remappedOptions: MealAutocompleteListItem[] | undefined = useMemo(
    () =>
      data && [
        ...data.food,
        ...data.recipe.map((r) => ({
          id: r.id,
          recipe_id: r.id,
          name: r.name,
          type: "Recipe",
          carbohydrates:
            r.recipe_items_aggregate.aggregate?.sum?.carbohydrates || 0,
          proteins: r.recipe_items_aggregate.aggregate?.sum?.proteins || 0,
          fats: r.recipe_items_aggregate.aggregate?.sum?.fats || 0,
          energy_cal: r.recipe_items_aggregate.aggregate?.sum?.energy_cal || 0,
          energy_kj: r.recipe_items_aggregate.aggregate?.sum?.energy_kj || 0,
          weight: r.recipe_items_aggregate.aggregate?.sum?.weight,
          recipe: true,
        })),
      ],
    [data]
  );

  useEffect(() => {
    if (typeof value === "string" && remappedOptions) {
      const foodFromOptions = remappedOptions.find((item) => item.id === value);
      setValue(foodFromOptions);
    }
  }, [value, remappedOptions]);

  const withValue = !(typeof value === "string") && remappedOptions;

  return (
    <div>
      {withValue && (
        <Autocomplete
          options={remappedOptions!}
          getOptionLabel={(option: MealAutocompleteListItem) => option.name}
          value={value}
          onChange={(event: any, newValue: Food_Insert_Input | null) => {
            setValue(newValue);
            event.stopPropagation();
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={<Trans>Select food or recipe</Trans>}
              margin="dense"
            />
          )}
          {...restProps}
        />
      )}
    </div>
  );
}
