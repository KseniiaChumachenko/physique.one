import React, { useState, Suspense } from "react";
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
  CircularProgress,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { Alert } from "@material-ui/lab";
import { Trans } from "@lingui/react";
import { useCopyDayMutation } from "../../../graphql/generated/graphql";
import { useStore } from "../../../store";
import {
  useMealsByDateQuery,
  useMealsPreloadedQuery,
  MealsByDatePreloadedHookProps,
} from "../../../api-hooks/mealsByDate";

interface ContainerProps extends MealsByDatePreloadedHookProps {
  refetch: () => void;
  onClose: (e?: any) => void;
}

const DialogContent = ({
  queryReference,
  refetch,
  onClose,
}: ContainerProps) => {
  const data = useMealsPreloadedQuery(queryReference);
  const {
    userStore: {
      user: { id: u_id },
    },
  } = useStore();

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [insertDate, setInsertDate] = useState(null);

  const [insert_day_copy, { loading: postLoading }] = useCopyDayMutation({
    onCompleted: (data) => {
      refetch();
      setSuccess(
        `Copied  ${data.insert_meal?.affected_rows} rows successfully`
      );
      onClose();
    },
    onError: (error) => setError(error.message),
  });

  const newMeals = data?.meal_connection.edges.map(({ node: m }) => {
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
    <>
      <MDialogContent>
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
      </MDialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" disabled={postLoading}>
          <Trans>Cancel</Trans>
        </Button>
        <Button
          disabled={postLoading}
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
    </>
  );
};

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
  const { queryReference, refetch } = useMealsByDateQuery({ u_id, date });

  const handleClose = (event: any) => {
    setOpen(false);
    event.stopPropagation();
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
      <Suspense fallback={<CircularProgress />}>
        {queryReference && (
          <DialogContent
            onClose={handleClose}
            queryReference={queryReference}
            refetch={refetch}
          />
        )}
      </Suspense>
    </Dialog>
  );
};
