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
import { useActiveUser } from "src/api-hooks/authorization";
import {
  FoodPreloadedHookProps,
  useFoodPreloadedQuery,
} from "src/api-hooks/food";
import {
  RecipePreloadedHookProps,
  useRecipePreloaded,
} from "src/api-hooks/recipe";
import {
  useAddRecipeItemMutation,
  useUpdateRecipeItemMutation,
  useDeleteRecipeItemMutation,
} from "src/api-hooks/recipeItem";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";
import { MealAutocomplete } from "../../components/MealAutocomplete";
import { base64ToUuid } from "../../utils/base64-to-uuid";
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
    const { refetch } = useRecipePreloaded(recipeQR);
    const { user } = useActiveUser();
    const [add] = useAddRecipeItemMutation();
    const [update] = useUpdateRecipeItemMutation();
    const [destroy] = useDeleteRecipeItemMutation();

    const isPermitted = user?.id === u_id;
    const isNewRecipeItem = basePortionRow?.id === NIL;

    const [isInEditMode, setEditMode] = useState(isNewRecipeItem);

    const [rowFoodId, setRowFoodId] = useState(basePortionRow?.food?.id);
    const [rowFoodWeight, setRowFoodWeight] = useState(basePortionRow?.weight);

    const foodById = data.food_connection.edges.find(
      ({ node }) =>
        node.id === (rowFoodId ?? data.food_connection.edges[0].node.id)
    )!;

    const {
      carbohydrates,
      energy_cal,
      energy_kj,
      fats,
      proteins,
      weight,
    } = getRowValues(
      foodById.node,
      rowFoodWeight,
      isInEditMode ? 1 : coefficientForPortions
    );

    const row = {
      id: base64ToUuid(basePortionRow.id),
      food_id: base64ToUuid(foodById?.node.id),
      food: foodById,
      recipe_id: recipe_id ? base64ToUuid(recipe_id) : undefined,
      u_id,
      carbohydrates,
      energy_cal,
      energy_kj,
      fats,
      proteins,
      weight,
    };

    const newRecipeId = uuid();

    const handleSubmit = isInEditMode
      ? isNewRecipeItem
        ? () =>
            add({
              variables: {
                objects: [
                  {
                    carbohydrates,
                    energy_cal,
                    energy_kj,
                    fats,
                    food_id: row.food_id,
                    proteins,
                    recipe_id: row.recipe_id,
                    u_id,
                    weight,
                    id: newRecipeId,
                  },
                ],
                id: newRecipeId,
              },
              onCompleted: () => {
                refetch();
                onDiscardAddRow?.();
              },
            })
        : () =>
            update({
              variables: {
                id: row.id!,
                set: { food_id: row.food_id, weight: row.weight },
              },
              onCompleted: () => {
                refetch();
                setEditMode(false);
              },
            })
      : undefined;

    const handleCancel = isInEditMode
      ? () => {
          setEditMode(false);
          onDiscardAddRow?.();
        }
      : undefined;

    const handleEdit = !isInEditMode ? () => setEditMode(true) : undefined;

    const handleDelete = !isNewRecipeItem
      ? () => destroy({ variables: { id: base64ToUuid(row.id) } })
      : undefined;

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
