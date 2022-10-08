import { Autocomplete, AutocompleteProps } from "@material-ui/lab";
import { TextField, Typography } from "@material-ui/core";
import { Trans } from "@lingui/macro"
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { InputProps } from "@material-ui/core/Input/Input";
import {
  food_brand_insert_input,
  FoodBrandPreloadedHookProps,
  useFoodBrandPreloadedQuery,
} from "../../api-hooks/foodBrand";

interface State {
  value?: food_brand_insert_input | null;
  setValue: (value: food_brand_insert_input) => void;
}

type Props = FoodBrandPreloadedHookProps &
  Partial<AutocompleteProps<any, any, any, any>> &
  State;

export const FoodBrandSelect = ({
  foodBrandQR,
  value,
  setValue,
  ...restProps
}: Props) => {
  const initialState = { id: uuid(), name: "" };
  const [newItem, setNewItem] = useState(initialState);
  const {
    data: brands,
    mutations: { add },
  } = useFoodBrandPreloadedQuery(foodBrandQR);

  const options = brands.food_brand_connection.edges
    ?.map(({ node }) => node)
    .concat(newItem);

  const handleAddNewBrand = () =>
    add({
      variables: { objects: [newItem] },
      onError: () => {
        setValue(initialState);
        setNewItem(initialState);
      },
    });

  const handleInputChange: InputProps["onChange"] = (e) =>
    setNewItem({ id: newItem.id, name: e.target.value });

  const handleChange = (e: any, value: food_brand_insert_input) => {
    if (value.id === newItem.id) {
      handleAddNewBrand();
    }
    setValue(value);
    e.stopPropagation();
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option?.name}
      getOptionDisabled={(option: food_brand_insert_input) =>
        option?.id === value?.id
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={<Trans>Select brand</Trans>}
          margin="dense"
          onChange={handleInputChange}
        />
      )}
      renderOption={(option: food_brand_insert_input) =>
        option?.id === newItem.id ? (
          newItem?.name && (
            <Typography>
              <Trans>
                Create <b>{newItem?.name}</b>
              </Trans>
            </Typography>
          )
        ) : (
          <Typography>{option?.name}</Typography>
        )
      }
      onChange={handleChange}
      {...restProps}
    />
  );
};
