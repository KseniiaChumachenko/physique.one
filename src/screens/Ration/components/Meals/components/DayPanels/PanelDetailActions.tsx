import React, { useState } from "react";
import { Trans } from "@lingui/react";
import { Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import {
  Meal,
  useDeleteMealByIdMutation,
} from "../../../../../../graphql/generated/graphql";
import { EditDeleteButtonGroup } from "../../../EditDeletButtonGroup";
import { AddMealItemDialog } from "../../../MealItemDialog/AddMealItemDialog";

const useStyles = makeStyles((theme) => ({}));

type MealItem = Pick<Meal, "id">;

interface Props extends MealItem {}

export const PanelDetailActions = ({ id }: Props) => {
  const classes = useStyles();
  const [openAddMealItemDialog, setAddMealItemDialog] = useState(false);

  const [error, setOpenErrorMessage] = React.useState();
  const [success, setOpenSuccessMessage] = React.useState();

  const [delete_meal_by_pk] = useDeleteMealByIdMutation({
    variables: { id },
    onCompleted: () => setOpenSuccessMessage(true),
    onError: (error) => setOpenErrorMessage(error),
  });

  return (
    <React.Fragment>
      <EditDeleteButtonGroup
        onAddClick={() => setAddMealItemDialog(true)}
        onDeleteClick={() => delete_meal_by_pk()}
      />

      {/*  Modals  */}
      <AddMealItemDialog
        open={openAddMealItemDialog}
        setOpen={setAddMealItemDialog}
        meal_id={id}
      />

      {/*  Toasts  */}
      {success && (
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setOpenErrorMessage(false)}
        >
          <Alert
            severity={"success"}
            onClose={() => setOpenErrorMessage(false)}
          >
            <Trans>Meals successfully updated</Trans>
          </Alert>
        </Snackbar>
      )}
      {!!error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setOpenSuccessMessage(false)}
        >
          <Alert
            severity={"error"}
            onClose={() => setOpenSuccessMessage(false)}
          >
            {error?.message as any}
          </Alert>
        </Snackbar>
      )}
    </React.Fragment>
  );
};
