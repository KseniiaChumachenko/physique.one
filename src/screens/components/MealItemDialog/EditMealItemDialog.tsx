import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Alert} from "@material-ui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@material-ui/core";
import {Trans} from "@lingui/react";
import {
  Meal_Item,
  useFoodSelectFieldListingQuery,
  useUpdateMealItemMutation,
} from "../../../graphql/generated/graphql";
import {ToastMessage} from "../../../components/ToastMessage";
import {HARDCODED_U_ID} from "../AddMealDialog";

const useStyles = makeStyles(() => ({
  field: {
    width: "100%",
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

  const { data, loading } = useFoodSelectFieldListingQuery();
  const [food, setFood] = useState(mealItem.food);
  const [weight, setWeight] = useState(mealItem.weight);

  const foodById = data?.food.find((item) => item.id === food);

  const [addMealItem] = useUpdateMealItemMutation({
    onError: (error1) => setOpenErrorMessage(error1),
    onCompleted: () => {
      setOpenSuccessMessage(true);
      setOpen(false);
    },
    variables: {
      id: mealItem.id,
      u_id: HARDCODED_U_ID,
      weight,
      meal_id: mealItem.meal_id,
      food,
      energy_cal: (foodById?.energy_cal / 100) * weight,
      energy_kj: (foodById?.energy_kj / 100) * weight,
      proteins: (foodById?.proteins / 100) * weight,
      carbohydrates: (foodById?.carbohydrates / 100) * weight,
      fats: (foodById?.fats / 100) * weight,
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
          {data && (
            <Select
              label={<Trans>Food</Trans>}
              defaultValue={food}
              onChange={(event) => setFood(event.target.value as any)}
              className={classes.field}
            >
              {data?.food.map((food, key) => (
                <MenuItem value={food.id} key={key}>
                  {food.name}
                </MenuItem>
              ))}
            </Select>
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
              addMealItem();
              event.stopPropagation();
            }}
            disabled={loading}
          />
        </DialogActions>
      </Dialog>

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
