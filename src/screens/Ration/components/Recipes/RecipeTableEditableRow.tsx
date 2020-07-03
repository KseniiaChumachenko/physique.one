import React, { useState } from "react";
import {
  createStyles,
  MenuItem,
  Select,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import { Trans } from "@lingui/react";
import { EditDeleteButtonGroup } from "../EditDeletButtonGroup";
import {
  Recipe_Item,
  useDeleteRecipeItemByPkMutation,
  useFoodSelectFieldListingQuery,
  useUpdateRecipeItemByPkMutation,
} from "../../../../graphql/generated/graphql";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  row: Partial<Recipe_Item>;
  mode?: boolean;
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

// TODO: unify food selector across app

export const RecipeTableEditableRow = ({ row, mode = false }: Props) => {
  const [isInEditMode, setEditMode] = useState(mode);

  const [updatedRowFood, setUpdatedRowFood] = useState(row?.food?.id);
  const [updatedRowWeight, setUpdatedRowWeight] = useState(row?.weight);

  const { data } = useFoodSelectFieldListingQuery();
  const [update_recipe_item_by_pk] = useUpdateRecipeItemByPkMutation({
    onCompleted: () => setEditMode(false),
    onError: (props) => console.log("Failed to updated:", props.message),
  });
  const [delete_recipe_item_by_pk] = useDeleteRecipeItemByPkMutation({
    onCompleted: () => setEditMode(false),
  });

  const classes = useStyles();

  return (
    <TableRow>
      {isInEditMode ? (
        <>
          <TableCell
            component="th"
            scope="row"
            className={classes.foodCell}
            children={
              data && (
                <Select
                  label={<Trans>Food</Trans>}
                  defaultValue={row?.food?.id || data?.food[0].id}
                  onChange={(event) =>
                    setUpdatedRowFood(event.target.value as any)
                  }
                >
                  {data?.food.map((food, key) => (
                    <MenuItem value={food.id} key={key}>
                      {food.name}
                    </MenuItem>
                  ))}
                </Select>
              )
            }
          />
          <TableCell
            component="th"
            scope="row"
            children={
              <TextField
                defaultValue={row.weight}
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
            {row?.energy_cal?.toFixed(2)}&nbsp;|&nbsp;
            {row?.energy_kj?.toFixed(2)}
          </React.Fragment>
        }
      />
      <TableCell
        component="th"
        scope="row"
        children={row?.proteins?.toFixed(2)}
      />
      <TableCell
        component="th"
        scope="row"
        children={row?.carbohydrates?.toFixed(2)}
      />
      <TableCell component="th" scope="row" children={row?.fats?.toFixed(2)} />
      <TableCell
        component="th"
        scope="row"
        children={
          <EditDeleteButtonGroup
            onConfirmClick={
              isInEditMode
                ? () =>
                    update_recipe_item_by_pk({
                      variables: {
                        id: row.id,
                        food_id: updatedRowFood,
                        weight: updatedRowWeight,
                      },
                    })
                : undefined
            }
            onCancelClick={isInEditMode ? () => setEditMode(false) : undefined}
            onEditClick={isInEditMode ? undefined : () => setEditMode(row.id)}
            onDeleteClick={() =>
              delete_recipe_item_by_pk({
                variables: { id: row.id },
              })
            }
          />
        }
      />
    </TableRow>
  );
};
