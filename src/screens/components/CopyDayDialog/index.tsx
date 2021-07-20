import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  DialogActions,
  Snackbar,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { Alert } from "@material-ui/lab";
import { Trans } from "@lingui/react";
import {
  useCopyDayMutation,
  useMealsByDateSubscription,
} from "../../../graphql/generated/graphql";
import { useStore } from "../../../store";

interface Props {
  open: boolean;
  setOpen: any;

  date: string;
}

export const CopyDayDialog = ({ open, setOpen, date }: Props) => {
  const {
    userStore: {
      user: { id: u_id },
    },
  } = useStore();

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [insertDate, setInsertDate] = useState(null);

  const { data, loading: getLoading } = useMealsByDateSubscription({
    variables: { date, u_id },
  });

  const [insert_day_copy, { loading: postLoading }] = useCopyDayMutation({
    onCompleted: (data) => {
      setSuccess(
        `Copied  ${data.insert_meal?.affected_rows} rows successfully`
      );
      setOpen(false);
    },
    onError: (error) => setError(error.message),
  });

  const handleClose = (event: any) => {
    setOpen(false);
    event.stopPropagation();
  };

  const newMeals = data?.meal.map((m) => {
    const meal_id = uuid();

    return {
      id: meal_id,
      date: insertDate,
      time: m.time,
      name: m.name || "",

      meal_items: m.meal_items.map((i) => ({
        id: uuid(),
        u_id,
        food: i.food,
        weight: i.weight,
        carbohydrates: i.carbohydrates,
        proteins: i.proteins,
        fats: i.fats,
        energy_cal: i.energy_cal,
        energy_kj: i.energy_kj,
        recipe_id: i.recipe_id,
      })),
    };
  });

  const handleSubmit = (e: any) => {
    e.stopPropagation();
    newMeals?.map((m) =>
      insert_day_copy({
        variables: { ...m, u_id },
      })
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Trans>Copy meals</Trans>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <DatePicker
            renderInput={(props: any) => (
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                onClick={(e) => e.stopPropagation()}
                placeholder={<Trans>Select date to insert to</Trans>}
                //className={classes.smallerField}
                {...props}
              />
            )}
            value={insertDate}
            onChange={(date) => {
              setInsertDate(date);
            }}
            label={<Trans>When</Trans>}
            //autoOk={true}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
          disabled={getLoading || postLoading}
        >
          <Trans>Cancel</Trans>
        </Button>
        <Button
          disabled={getLoading || postLoading}
          onClick={handleSubmit}
          color="primary"
          autoFocus
        >
          <Trans>Submit</Trans>
        </Button>
      </DialogActions>

      {!!success && (
        <Snackbar
          open={!!success}
          autoHideDuration={6000}
          onClose={() => setSuccess("")}
        >
          <Alert severity={"success"} onClose={() => setSuccess("")}>
            {success}
          </Alert>
        </Snackbar>
      )}

      {!!error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError("")}
        >
          <Alert severity={"error"} onClose={() => setError("")}>
            Error has occurred: {error}
          </Alert>
        </Snackbar>
      )}
    </Dialog>
  );
};
