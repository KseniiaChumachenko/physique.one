import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  DialogTitle,
  Dialog,
  DialogContent as MDialogContent,
  DialogContentText,
  TextField,
  Button,
  DialogActions,
  Snackbar,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { Alert } from "@material-ui/lab";
import { Trans } from "@lingui/react";
import { useActiveUser } from "src/api-hooks/authorization";
import {
  AddMealMutationVariables,
  MealsByDateQueryResponse,
} from "src/api-hooks/mealsByDate";
import moment from "moment";

interface Props {
  open: boolean;
  setOpen: any;
  date: string;
  data: MealsByDateQueryResponse;
  onSubmit: (v: AddMealMutationVariables, onClose: () => void) => void;
}

export const CopyDayDialog = ({
  open,
  setOpen,
  date,
  data,
  onSubmit,
}: Props) => {
  const { user } = useActiveUser();

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [insertDate, setInsertDate] = useState(date);

  const newMeals = {
    data: data.meal_connection.edges.map(({ node: m }) => {
      const meal_id = uuid();

      return (
        m && {
          id: meal_id,
          date: insertDate,
          time: m.time,
          name: m.name || "",
          u_id: user?.id,
          meal_items: {
            data: m.meal_items_connection.edges.map(
              ({ node: i }) =>
                i && {
                  id: uuid(),
                  u_id: user?.id,
                  food: i.food,
                  weight: i.weight,
                  carbohydrates: i.carbohydrates,
                  proteins: i.proteins,
                  fats: i.fats,
                  energy_cal: i.energy_cal,
                  energy_kj: i.energy_kj,
                  recipe_id: i.recipe_id,
                }
            ),
          },
        }
      );
    }),
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: any) => {
    onSubmit(newMeals, handleClose);
    event.stopPropagation();
  };

  const formatedFromDate = moment(date).format("dd (DD/MM/YYYY)");

  return (
    <Dialog
      open={open}
      onClick={(e) => e.stopPropagation()}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Trans>Copy meals</Trans>
      </DialogTitle>

      <MDialogContent>
        <DialogContentText>
          <Trans>
            From <b>{formatedFromDate}</b>
          </Trans>
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          <DatePicker
            renderInput={(props) => <TextField {...props} />}
            value={insertDate}
            onChange={(date, e) => {
              if (date) {
                setInsertDate(moment(date, "YYYY-w-e").format());
              }
            }}
            label={<Trans>To</Trans>}
            inputFormat={"DD/MM/yyyy"}
          />
        </DialogContentText>
      </MDialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          <Trans>Cancel</Trans>
        </Button>
        <Button
          onClick={handleSubmit}
          variant={"contained"}
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
