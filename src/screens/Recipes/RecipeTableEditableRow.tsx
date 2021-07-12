import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  createStyles,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";
import { MealAutocomplete } from "../../components/MealAutocomplete";
import {
  Recipe_Item,
  useAddRecipeItemMutation,
  useDeleteRecipeItemByPkMutation,
  useFoodSelectFieldListingQuery,
  useUpdateRecipeItemByPkMutation,
} from "../../graphql/generated/graphql";
import { useStore } from "../../store";
import { getRowValues } from "./utils";

const EMPTY_FOOD_ITEM = {
  id: 0,
  name: "",
  type: "",
  carbohydrates: 0,
  proteins: 0,
  fats: 0,
  energy_cal: 0,
  energy_kj: 0,
  u_id: 0,
};

interface Props {
  recipe_id?: string;
  row: Partial<Recipe_Item>;
  mode?: "add" | "regularRow";
  u_id: string;
  onClickOutside(): void;
  coefficientForPortions: number;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
    },
    foodCell: {
      width: 220,
    },
    weightInput: {
      maxWidth: 80,
    },
  })
);

// TODO(#8): unify food selector across app
// TODO: error handling

export const RecipeTableEditableRow = ({
  recipe_id,
  row: basePortionRow,
  mode,
  u_id,
  onClickOutside,
  coefficientForPortions,
}: Props) => {
  const classes = useStyles();
  const {
    userStore: {
      user: { id: userId },
    },
  } = useStore();

  const { data } = useFoodSelectFieldListingQuery();

  const isPermitted = userId === u_id;
  const [isInEditMode, setEditMode] = useState(mode === "add");

  const [updatedRowFood, setUpdatedRowFood] = useState(() => {
    if (basePortionRow?.food?.id) {
      return basePortionRow.food?.id;
    } else {
      return data?.food[0].id || EMPTY_FOOD_ITEM;
    }
  });

  const [updatedRowWeight, setUpdatedRowWeight] = useState(
    basePortionRow?.weight || 100
  );

  const [
    update_recipe_item_by_pk,
    { loading: updateLoading },
  ] = useUpdateRecipeItemByPkMutation({
    onCompleted: () => setEditMode(false),
  });

  const [delete_recipe_item_by_pk] = useDeleteRecipeItemByPkMutation({
    onCompleted: () => {
      setEditMode(false);
      onClickOutside();
    },
  });

  const [
    insert_recipe_item_one,
    { loading: addLoading },
  ] = useAddRecipeItemMutation({
    onCompleted: onClickOutside,
  });

  const foodById =
    data?.food.find((item) => item.id === updatedRowFood) || EMPTY_FOOD_ITEM;

  const editModeNutrients = getRowValues(foodById as any, updatedRowWeight, 1);

  const row = {
    id: basePortionRow.id,
    food: foodById,
    ...getRowValues(foodById as any, updatedRowWeight, coefficientForPortions),
  };

  const loading = updateLoading || addLoading;
  return (
    <>
      {loading && <div />}

      {!loading && (
        <TableRow>
          {isInEditMode ? (
            <>
              <TableCell
                component="th"
                scope="row"
                className={classes.foodCell}
                children={
                  row.food && (
                    <MealAutocomplete
                      disabled={loading}
                      value={row.food}
                      setValue={(food: any) => setUpdatedRowFood(food.id)}
                      withRecipes={false}
                    />
                  )
                }
              />
              <TableCell
                component="th"
                scope="row"
                children={
                  <TextField
                    disabled={loading}
                    defaultValue={row?.weight}
                    type={"number"}
                    onChange={(event: any) =>
                      setUpdatedRowWeight(event?.target?.value)
                    }
                    className={classes.weightInput}
                  />
                }
              />
            </>
          ) : (
            <>
              <TableCell
                component="th"
                scope="row"
                children={row?.food?.name}
                className={classes.foodCell}
              />
              <TableCell component="th" scope="row" children={row?.weight} />
            </>
          )}
          <TableCell
            component="th"
            scope="row"
            children={
              <React.Fragment>
                {isInEditMode || mode === "add"
                  ? editModeNutrients?.energy_cal
                  : row?.energy_cal}
                &nbsp;|&nbsp;
                {isInEditMode || mode === "add"
                  ? editModeNutrients?.energy_kj
                  : row?.energy_kj}
              </React.Fragment>
            }
          />
          <TableCell
            component="th"
            scope="row"
            children={
              isInEditMode || mode === "add"
                ? editModeNutrients?.proteins
                : row?.proteins
            }
          />
          <TableCell
            component="th"
            scope="row"
            children={
              isInEditMode || mode === "add"
                ? editModeNutrients?.carbohydrates
                : row?.carbohydrates
            }
          />
          <TableCell
            component="th"
            scope="row"
            children={
              isInEditMode || mode === "add"
                ? editModeNutrients?.fats
                : row?.fats
            }
          />
          <TableCell
            component="th"
            scope="row"
            children={
              isPermitted && (
                <EditDeleteButtonGroup
                  onConfirmClick={
                    isInEditMode
                      ? mode === "add"
                        ? () =>
                            insert_recipe_item_one({
                              variables: {
                                ...editModeNutrients,
                                recipe_id,
                                u_id,
                                food_id: updatedRowFood,
                                weight: updatedRowWeight,
                              },
                            })
                        : () =>
                            update_recipe_item_by_pk({
                              variables: {
                                ...editModeNutrients,
                                id: row.id,
                                food_id: updatedRowFood,
                                weight: updatedRowWeight,
                              },
                            })
                      : undefined
                  }
                  onCancelClick={
                    isInEditMode
                      ? () => {
                          setEditMode(false);
                          onClickOutside();
                        }
                      : undefined
                  }
                  onEditClick={
                    !(isInEditMode || mode === "add")
                      ? () => setEditMode(row.id)
                      : undefined
                  }
                  onDeleteClick={
                    !(mode === "add")
                      ? () =>
                          delete_recipe_item_by_pk({
                            variables: { id: row.id },
                          })
                      : undefined
                  }
                />
              )
            }
          />
        </TableRow>
      )}
    </>
  );
};
