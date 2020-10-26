import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { Trans } from "@lingui/react";
import {
  Meal_Item,
  useUpdateMealItemMutation,
} from "../../../graphql/generated/graphql";
import { ToastMessage } from "../../../components/ToastMessage";
import { HARDCODED_U_ID } from "../AddMealDialog";
import { MealAutocomplete } from "../../../components/MealAutocomplete";

const useStyles = makeStyles(() => ({
  field: {
    width: "100%",
    minWidth: 250,
  },
}));

interface Props {
  open: boolean;
  setOpen(o: boolean): void;
  mealItem: Meal_Item;
}

export const EditMealItemDialog = ({ open, setOpen, mealItem }: Props) => {
  const classes = useStyles();

  const [error, setOpenErrorMessage] = React.useState();
  const [success, setOpenSuccessMessage] = React.useState();

  const [selectedFood, setSelectedFood] = useState(
    mealItem.food || mealItem.recipe_id
  );
  const [weight, setWeight] = useState(mealItem.weight);

  const mealItemProps = {
    recipe_id: selectedFood?.recipe ? selectedFood?.id : null,
    food: !selectedFood?.recipe ? selectedFood?.id : null,

    energy_cal:
      (selectedFood?.energy_cal / (selectedFood?.weight || 100)) * weight,
    energy_kj:
      (selectedFood?.energy_kj / (selectedFood?.weight || 100)) * weight,
    proteins: (selectedFood?.proteins / (selectedFood?.weight || 100)) * weight,
    carbohydrates:
      (selectedFood?.carbohydrates / (selectedFood?.weight || 100)) * weight,
    fats: (selectedFood?.fats / (selectedFood?.weight || 100)) * weight,
  };

  const [update_meal_item_by_pk] = useUpdateMealItemMutation({
    onError: (error1) => {
      setOpenErrorMessage(error1);
    },
    onCompleted: (v) => {
      setOpenSuccessMessage(true);
      setOpen(false);
    },
    variables: {
      id: mealItem.id,
      u_id: HARDCODED_U_ID,
      weight,
      meal_id: mealItem.meal_id,
      ...mealItemProps,
    },
  });

  if (error) {
    return <ToastMessage severity={"error"} children={error?.message as any} />;
  }

  return (
    <React.Fragment>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Meal item</DialogTitle>
        <DialogContent>
          {selectedFood && (
            <MealAutocomplete
              value={selectedFood}
              setValue={setSelectedFood}
              className={classes.field}
            />
          )}
          <TextField
            label={<Trans>Weight (g)</Trans>}
            defaultValue={weight}
            type={"number"}
            onChange={(event: any) => setWeight(event?.target?.value)}
            className={classes.field}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant={"text"}
            children={<Trans>Cancel</Trans>}
            onClick={(event) => {
              setOpen(false);
              event.stopPropagation();
            }}
          />
          <Button
            variant={"text"}
            children={<Trans>Submit</Trans>}
            onClick={(event) => {
              update_meal_item_by_pk();
              event.stopPropagation();
            }}
          />
        </DialogActions>
      </Dialog>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setOpenErrorMessage(false)}
      >
        <Alert severity={"success"} onClose={() => setOpenErrorMessage(false)}>
          <Trans>Meals successfully updated</Trans>
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setOpenSuccessMessage(false)}
      >
        <Alert severity={"error"} onClose={() => setOpenSuccessMessage(false)}>
          {error?.message as any}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};
