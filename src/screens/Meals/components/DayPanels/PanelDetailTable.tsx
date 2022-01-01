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
import { Alert } from "@material-ui/lab";
import { Trans } from "@lingui/react";
import { Food, Meal_Item } from "src/graphql/generated/graphql";
import { EditDeleteButtonGroup } from "../../../components/EditDeletButtonGroup";
import { EditMealItemDialog } from "../../../components/MealItemDialog/EditMealItemDialog";
import {
  DeleteMealItemMutationVariables,
  useDeleteMealItemMutation,
} from "../../../../api-hooks/mealItem";
import { base64ToUuid } from "../../../../utils/base64-to-uuid";
import { FoodPreloadedHookProps } from "../../../../api-hooks/food";
import { RecipePreloadedHookProps } from "../../../../api-hooks/recipe";

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

type ExtendProps = FoodPreloadedHookProps & RecipePreloadedHookProps;
interface P extends ExtendProps {
  meal_items?: Meal_Item[];
  refetch: () => void;
}

export const PanelDetailTable = ({
  meal_items,
  refetch,
  foodQR,
  recipeQR,
}: P) => {
  const classes = useStyles();
  const [openEditMealItemDialog, setEditMealItemDialog] = useState<
    MealItemNode | Meal_Item | boolean
  >(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<Error>();

  const [destroy] = useDeleteMealItemMutation();
  const handleDelete = (v: DeleteMealItemMutationVariables) =>
    destroy({
      variables: v,
      onCompleted: () => {
        refetch();
        setSuccess(true);
      },
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
              <TableCell>Weight&nbsp;(g)</TableCell>
              <TableCell>Protein&nbsp;(g)</TableCell>
              <TableCell>Carbohydrate&nbsp;(g)</TableCell>
              <TableCell>Fat&nbsp;(g)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {withMealItems &&
              meal_items?.map((row) => (
                <TableRow key={row.id}>
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
                  <TableCell component="th" scope="row" children={row.weight} />
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

                  <TableCell
                    component="th"
                    scope="row"
                    children={
                      <EditDeleteButtonGroup
                        onEditClick={() => setEditMealItemDialog(row)}
                        onDeleteClick={() =>
                          handleDelete({ id: base64ToUuid(row.id) })
                        }
                      />
                    }
                  />

                  {/*  Toasts  */}
                  <Snackbar
                    key={row.id + "succes"}
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
                  <Snackbar
                    key={row.id + "error"}
                    open={!!error}
                    autoHideDuration={6000}
                    onClose={() => setError(false as any)}
                  >
                    <Alert
                      severity={"error"}
                      onClose={() => setError(false as any)}
                    >
                      {error?.message}
                    </Alert>
                  </Snackbar>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit MealItem dialog */}
      {(openEditMealItemDialog as Meal_Item)?.id && (
        <EditMealItemDialog
          refetch={refetch}
          foodQR={foodQR}
          recipeQR={recipeQR}
          open={!!openEditMealItemDialog}
          setOpen={setEditMealItemDialog}
          mealItem={openEditMealItemDialog as Meal_Item}
          key={(openEditMealItemDialog as Meal_Item).id + "editDialog"}
        />
      )}
    </React.Fragment>
  );
};
