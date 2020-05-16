import React, { useState } from "react";
import {
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ApolloError } from "@apollo/client";
import { Alert } from "@material-ui/lab";
import { Trans } from "@lingui/react";
import {
  Food,
  Meal_Item,
  useDeleteMealItemByPrimaryKeyMutation,
  useUpdateMealItemMutation,
} from "src/graphql/generated/graphql";
import { EditDeleteButtonGroup } from "../../../EditDeletButtonGroup";
import { EditMealItemDialog } from "../../../MealItemDialog/EditMealItemDialog";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));

type MealItemNodes = Array<
  Meal_Item & {
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
  }
>;

export const PanelDetailTable = ({
  nodes,
  refetch,
}: {
  nodes: MealItemNodes;
  refetch: any;
}) => {
  const classes = useStyles();
  const [openEditMealItemDialog, setEditMealItemDialog] = useState<
    Meal_Item | boolean
  >(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<ApolloError>();

  const [delete_by_pk] = useDeleteMealItemByPrimaryKeyMutation({
    onCompleted: () => {
      refetch();
      setSuccess(true);
    },
    onError: (error1) => setError(error1),
  });

  return (
    <>
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
            {nodes.map((row, key) => (
              <TableRow key={key}>
                <TableCell
                  component="th"
                  scope="row"
                  children={row.foodDesc.name}
                />
                <TableCell
                  component="th"
                  scope="row"
                  children={
                    <>
                      {row.energy_cal.toFixed(2)}&nbsp;|&nbsp;
                      {row.energy_kj.toFixed(2)}
                    </>
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
          refetch={refetch}
        />
      )}
    </>
  );
};
