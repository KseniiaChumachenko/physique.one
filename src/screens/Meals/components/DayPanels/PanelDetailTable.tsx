import React, {useState} from "react";
import {Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ApolloError} from "@apollo/client";
import {Alert} from "@material-ui/lab";
import {Trans} from "@lingui/react";
import {Food, Meal_Item, useDeleteMealItemByPrimaryKeyMutation,} from "src/graphql/generated/graphql";
import {EditDeleteButtonGroup} from "../../../components/EditDeletButtonGroup";
import {EditMealItemDialog} from "../../../components/MealItemDialog/EditMealItemDialog";

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
  },
}));

type MealItemNode = { __typename?: "meal_item" } & Pick<
  Meal_Item,
  | "id"
  | "meal_id"
  | "food"
  | "weight"
  | "carbohydrates"
  | "proteins"
  | "fats"
  | "energy_cal"
  | "energy_kj"
> & {
    foodDesc: { __typename?: "food" } & Pick<
      Food,
      | "id"
      | "name"
      | "energy_cal"
      | "energy_kj"
      | "carbohydrates"
      | "fats"
      | "proteins"
    >;
  };

export const PanelDetailTable = ({
  meal_items,
}: {
  meal_items?: Meal_Item[];
}) => {
  const classes = useStyles();
  const [openEditMealItemDialog, setEditMealItemDialog] = useState<
    MealItemNode | boolean
  >(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<ApolloError>();

  const [delete_by_pk] = useDeleteMealItemByPrimaryKeyMutation({
    onCompleted: () => setSuccess(true),
    onError: (error1) => setError(error1),
  });

  const withMealItems = meal_items && meal_items.length > 0;

  return (
    <React.Fragment>
      <TableContainer>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Calories&nbsp;|&nbsp;kJ</TableCell>
              <TableCell>Protein&nbsp;(g)</TableCell>
              <TableCell>Carbohydrate&nbsp;(g)</TableCell>
              <TableCell>Fat&nbsp;(g)</TableCell>
              <TableCell>Weight&nbsp;(g)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {withMealItems &&
              meal_items?.map((row, key) => (
                <TableRow key={key}>
                  <TableCell
                    component="th"
                    scope="row"
                    children={row.foodDesc?.name || row.recipe?.name}
                  />
                  <TableCell
                    component="th"
                    scope="row"
                    children={
                      <React.Fragment>
                        {row.energy_cal.toFixed(2)}&nbsp;|&nbsp;
                        {row.energy_kj.toFixed(2)}
                      </React.Fragment>
                    }
                  />
                  <TableCell
                    component="th"
                    scope="row"
                    children={row.proteins.toFixed(2)}
                  />

                  <TableCell
                    component="th"
                    scope="row"
                    children={row.carbohydrates.toFixed(2)}
                  />

                  <TableCell
                    component="th"
                    scope="row"
                    children={row.fats.toFixed(2)}
                  />

                  <TableCell component="th" scope="row" children={row.weight} />
                  <TableCell
                    component="th"
                    scope="row"
                    children={
                      <EditDeleteButtonGroup
                        onEditClick={() => setEditMealItemDialog(row)}
                        onDeleteClick={() =>
                          delete_by_pk({ variables: { id: row.id } })
                        }
                      />
                    }
                  />

                  {/*  Toasts  */}
                  {success && (
                    <Snackbar
                      key={key}
                      open={success}
                      autoHideDuration={6000}
                      onClose={() => setSuccess(false)}
                    >
                      <Alert
                        severity={"success"}
                        onClose={() => setSuccess(false)}
                      >
                        <Trans>Meals successfully updated</Trans>
                      </Alert>
                    </Snackbar>
                  )}
                  {error && (
                    <Snackbar
                      key={key}
                      open={!!error}
                      autoHideDuration={6000}
                      onClose={() => setError(false as any)}
                    >
                      <Alert
                        severity={"error"}
                        onClose={() => setError(false as any)}
                      >
                        {error.message}
                      </Alert>
                    </Snackbar>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit MealItem dialog */}
      {(openEditMealItemDialog as Meal_Item)?.id && (
        <EditMealItemDialog
          open={!!openEditMealItemDialog}
          setOpen={setEditMealItemDialog}
          mealItem={openEditMealItemDialog as Meal_Item}
        />
      )}
    </React.Fragment>
  );
};
