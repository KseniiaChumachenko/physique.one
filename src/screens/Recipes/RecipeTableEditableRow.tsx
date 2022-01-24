import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { NIL, v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import {
  createStyles,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import {
  FoodPreloadedHookProps,
  useFoodPreloadedQuery,
} from "../../api-hooks/food";
import { RecipePreloadedHookProps } from "../../api-hooks/recipe";
import {
  useAddRecipeItemMutation,
  useUpdateRecipeItemMutation,
  useDeleteRecipeItemMutation,
} from "../../api-hooks/recipeItem";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";
import { MealAutocomplete } from "../../components/MealAutocomplete";
import { useStore } from "../../store";
import { getRowValues } from "./utils";
import { RecipeItem } from "./RecipeCard";

type ExtendProps = FoodPreloadedHookProps & RecipePreloadedHookProps;

interface Props extends ExtendProps {
  recipe_id?: string;
  row: RecipeItem;
  u_id: string;
  coefficientForPortions: number;
  onDiscardAddRow?: () => void;
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

export const RecipeTableEditableRow = observer(
  ({
    recipe_id,
    row: basePortionRow,
    u_id,
    coefficientForPortions,
    onDiscardAddRow,
    foodQR,
    recipeQR,
  }: Props) => {
    const classes = useStyles();
    const { data } = useFoodPreloadedQuery(foodQR);
    const [add] = useAddRecipeItemMutation();
    const [update] = useUpdateRecipeItemMutation();
    const [destroy] = useDeleteRecipeItemMutation();

    const {
      userStore: {
        user: { id: userId },
      },

      //TODO: Stopped here, need to check on how mutations above work
      // recipeStore: { addRecipeItem, updateRecipeItem, deleteRecipeItem },
    } = useStore();

    const isPermitted = userId === u_id;
    const isNewRecipeItem = basePortionRow?.id === NIL;

    const [isInEditMode, setEditMode] = useState(isNewRecipeItem);

    const [rowFoodId, setRowFoodId] = useState(basePortionRow?.food?.id);
    const [rowFoodWeight, setRowFoodWeight] = useState(basePortionRow?.weight);

    const foodById = data.food_connection.edges.find(
      ({ node }) =>
        node.id === (rowFoodId ?? data.food_connection.edges[0].node.id)
    )!;
    const row = {
      id: basePortionRow.id,
      food_id: foodById?.node.id,
      food: foodById,
      recipe_id,
      u_id,
      ...getRowValues(
        foodById.node,
        rowFoodWeight,
        isInEditMode ? 1 : coefficientForPortions
      ),
    };

    const handleSubmit = isInEditMode
      ? isNewRecipeItem
        ? () =>
            add({
              variables: { ...row, id: uuid() },
              onCompleted: onDiscardAddRow,
            })
        : () =>
            update({ variables: row, onCompleted: () => setEditMode(false) })
      : undefined;

    const handleCancel = isInEditMode
      ? () => {
          setEditMode(false);
          onDiscardAddRow?.();
        }
      : undefined;

    const handleEdit = !isInEditMode ? () => setEditMode(true) : undefined;

    const handleDelete = !isNewRecipeItem ? () => destroy(row.id) : undefined;

    return (
      <TableRow>
        {isInEditMode ? (
          <>
            <TableCell
              component="th"
              scope="row"
              className={classes.foodCell}
              children={
                <MealAutocomplete
                  recipeQR={recipeQR}
                  foodQR={foodQR}
                  value={row.food?.node.id}
                  setValue={setRowFoodId}
                  withRecipes={false}
                />
              }
            />
            <TableCell
              component="th"
              scope="row"
              children={
                <TextField
                  value={rowFoodWeight}
                  type={"number"}
                  onChange={(event: any) =>
                    setRowFoodWeight(event?.target?.value)
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
              children={row?.food?.node.name}
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
              {row?.energy_cal}
              &nbsp;|&nbsp;
              {row?.energy_kj}
            </React.Fragment>
          }
        />
        <TableCell component="th" scope="row" children={row?.proteins} />
        <TableCell component="th" scope="row" children={row?.carbohydrates} />
        <TableCell component="th" scope="row" children={row?.fats} />
        <TableCell
          component="th"
          scope="row"
          children={
            isPermitted && (
              <EditDeleteButtonGroup
                onConfirmClick={handleSubmit}
                onCancelClick={handleCancel}
                onEditClick={handleEdit}
                onDeleteClick={handleDelete}
              />
            )
          }
        />
      </TableRow>
    );
  }
);
