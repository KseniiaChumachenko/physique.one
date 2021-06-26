import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import { Trans } from "@lingui/react";
import { useStore } from "src/store";
import { useAddMealItemMutation } from "../../../graphql/generated/graphql";
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
  meal_id?: string;
}

export const AddMealItemDialog = ({ open, setOpen, meal_id }: Props) => {
  const classes = useStyles();
  const {
    userStore: { user },
  } = useStore();

  const [error, setOpenErrorMessage] = React.useState(false);
  const [success, setOpenSuccessMessage] = React.useState(false);

  const [food, setFood] = useState<any>();
  const [weight, setWeight] = useState(100);

  const mealItemProps = {
    recipe_id: food?.recipe ? food?.id : null,
    food: !food?.recipe ? food?.id : null,

    energy_cal: (food?.energy_cal / (food?.weight || 100)) * weight,
    energy_kj: (food?.energy_kj / (food?.weight || 100)) * weight,
    proteins: (food?.proteins / (food?.weight || 100)) * weight,
    carbohydrates: (food?.carbohydrates / (food?.weight || 100)) * weight,
    fats: (food?.fats / (food?.weight || 100)) * weight,
  };

  const [addMealItem, { error: submitError }] = useAddMealItemMutation({
    onError: () => setOpenErrorMessage(true),
    onCompleted: () => {
      setOpenSuccessMessage(true);
      setOpen(false);
    },
    variables: {
      u_id: user?.id,
      weight,
      meal_id,
      ...mealItemProps,
    },
  });

  return (
    <React.Fragment>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Meal item</DialogTitle>
        <DialogContent>
          <MealAutocomplete
            value={food}
            setValue={setFood}
            className={classes.field}
          />
          <TextField
            label={<Trans>Weight (g)</Trans>}
            defaultValue={weight}
            type={"number"}
            onChange={(event: any) => {
              setWeight(event?.target?.value);
              event.stopPropagation();
            }}
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
              addMealItem();
              event.stopPropagation();
            }}
          />
        </DialogActions>
      </Dialog>

      {success && (
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setOpenSuccessMessage(false)}
        >
          <Alert
            severity={"success"}
            onClose={() => setOpenSuccessMessage(false)}
          >
            <Trans>Meals successfully updated</Trans>
          </Alert>
        </Snackbar>
      )}
      {error && (
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => setOpenErrorMessage(false)}
        >
          <Alert severity={"error"} onClose={() => setOpenErrorMessage(false)}>
            <Trans>Failed to add item: {submitError?.message}</Trans>
          </Alert>
        </Snackbar>
      )}
    </React.Fragment>
  );
};
