import React, { useState } from "react";
import { Disposable, UseMutationConfig } from "react-relay";
import { Trans } from "@lingui/macro"
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import {
  DeleteMealMutation,
  DeleteMealMutation$variables,
} from "src/api-hooks/mealsByDate";
import { RecipesPreloadedHookProps } from "src/api-hooks/recipes";
import { FoodPreloadedHookProps } from "src/api-hooks/food";
import { base64ToUuid } from "src/utils/base64-to-uuid";
import { EditDeleteButtonGroup } from "../../../components/EditDeletButtonGroup";
import { AddMealItemDialog } from "../../../components/MealItemDialog/AddMealItemDialog";

type ExtendProps = DeleteMealMutation$variables &
  FoodPreloadedHookProps &
  RecipesPreloadedHookProps;

interface Props extends ExtendProps {
  refetch: () => void;
  destroy: (c: UseMutationConfig<DeleteMealMutation>) => Disposable;
}

export const PanelDetailActions = ({
  id,
  refetch,
  destroy,
  foodQR,
  recipesQR,
}: Props) => {
  const [openAddMealItemDialog, setAddMealItemDialog] = useState(false);

  const [error, setOpenErrorMessage] = React.useState<boolean | Error>();
  const [success, setOpenSuccessMessage] = React.useState<boolean>(false);

  const handleDeleteMeal = () =>
    destroy({
      variables: { id: base64ToUuid(id as string) },
      onCompleted: () => setOpenSuccessMessage(true),
      onError: (error) => setOpenErrorMessage(error),
    });

  return (
    <React.Fragment>
      <EditDeleteButtonGroup
        onAddClick={() => setAddMealItemDialog(true)}
        onDeleteClick={handleDeleteMeal}
      />

      {/*  Modals  */}
      {id && (
        <AddMealItemDialog
          refetch={refetch}
          foodQR={foodQR}
          recipesQR={recipesQR}
          open={openAddMealItemDialog}
          setOpen={setAddMealItemDialog}
          meal_id={id}
        />
      )}
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
            {error instanceof Error
              ? error.message
              : ("Failed to delete item" as any)}
          </Alert>
        </Snackbar>
      )}
    </React.Fragment>
  );
};
