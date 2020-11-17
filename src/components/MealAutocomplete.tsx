import React, { Dispatch, useEffect, useMemo, useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteProps } from "@material-ui/lab";
import {
  Food_Insert_Input,
  useFoodSelectFieldListingQuery,
} from "../graphql/generated/graphql";
import { Trans } from "@lingui/react";

export type MealAutocompleteListItem = Food_Insert_Input & { recipe?: boolean };

type FoodOptionalType = MealAutocompleteListItem | string | null | undefined;

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
  const [mealSelection, setMealSelection] = useState();

  const remappedOptions: MealAutocompleteListItem[] | undefined = useMemo(
    () =>
      data && [
        ...data.food,
        ...data.recipe.map((r) => ({
          id: r.id,
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
      setMealSelection(remappedOptions.find((item) => item.id === value));
    }
  }, [value, remappedOptions]);

  return (
    <div>
      {remappedOptions && mealSelection && (
        <Autocomplete
          options={remappedOptions}
          getOptionLabel={(option: MealAutocompleteListItem) => option.name}
          value={mealSelection}
          onChange={(event: any, newValue: Food_Insert_Input | null) => {
            setMealSelection(newValue);
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
