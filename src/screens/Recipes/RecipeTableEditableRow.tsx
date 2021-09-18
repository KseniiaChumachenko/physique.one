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
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";
import { MealAutocomplete } from "../../components/MealAutocomplete";
import { Recipe_Item } from "../../graphql/generated/graphql";
import { useStore } from "../../store";
import { getRowValues } from "./utils";

interface Props {
  recipe_id?: string;
  row: Partial<Recipe_Item>;
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

// TODO(#8): unify food selector across app
// TODO: error handling

export const RecipeTableEditableRow = observer(
  ({
    recipe_id,
    row: basePortionRow,
    u_id,
    coefficientForPortions,
    onDiscardAddRow,
  }: Props) => {
    const classes = useStyles();
    const {
      userStore: {
        user: { id: userId },
      },
      foodLibraryStore: { data },
      recipeStore: { addRecipeItem, updateRecipeItem, deleteRecipeItem },
    } = useStore();

    const isPermitted = userId === u_id;
    const isNewRecipeItem = basePortionRow?.id === NIL;

    const [isInEditMode, setEditMode] = useState(isNewRecipeItem);

    const [rowFoodId, setRowFoodId] = useState(basePortionRow?.food?.id);
    const [rowFoodWeight, setRowFoodWeight] = useState(basePortionRow?.weight);

    const foodById = data.find((item) => item.id === (rowFoodId ?? data[0].id));
    const row = {
      id: basePortionRow.id,
      food_id: foodById?.id,
      food: foodById,
      recipe_id,
      u_id,
      ...getRowValues(
        foodById!,
        rowFoodWeight,
        isInEditMode ? 1 : coefficientForPortions
      ),
    };

    const handleSubmit = isInEditMode
      ? isNewRecipeItem
        ? () => addRecipeItem({ ...row, id: uuid() }, onDiscardAddRow)
        : () => updateRecipeItem(row, () => setEditMode(false))
      : undefined;

    const handleCancel = isInEditMode
      ? () => {
          setEditMode(false);
          onDiscardAddRow?.();
        }
      : undefined;

    const handleEdit = !isInEditMode ? () => setEditMode(true) : undefined;

    const handleDelete = !isNewRecipeItem
      ? () => deleteRecipeItem(row.id)
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
                  value={row.food?.id}
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
