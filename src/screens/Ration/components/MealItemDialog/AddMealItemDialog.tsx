import React, { useEffect, useState } from "react";
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
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import { Trans } from "@lingui/react";
import {
  useAddMealItemMutation,
  useFoodSelectFieldListingQuery,
} from "../../../../graphql/generated/graphql";
import { ToastMessage } from "../../../../components/ToastMessage";
import { HARDCODED_U_ID } from "../AddMealDialog";

const useStyles = makeStyles((theme) => ({
  field: {
    width: "100%",
  },
}));

interface Props {
  open: boolean;
  setOpen(o: boolean): void;
  meal_id?: string;
}

export const AddMealItemDialog = ({ open, setOpen, meal_id }: Props) => {
  const classes = useStyles();

  const [error, setOpenErrorMessage] = React.useState();
  const [success, setOpenSuccessMessage] = React.useState();

  const { data } = useFoodSelectFieldListingQuery();
  const [food, setFood] = useState();
  const [weight, setWeight] = useState(100);

  const foodById =
    data?.food.find((item) => item.id === food) ??
    data?.recipe.find((item) => item.id === food)?.recipe_items_aggregate
      .aggregate?.sum;

  const weightOfRecipe = data?.recipe.find((item) => item.id === food)
    ?.recipe_items_aggregate.aggregate?.sum?.weight;

  const recipeOrFoodProps = data?.recipe.find((item) => item.id === food)?.id
    ? {
        recipe_id: data?.recipe.find((item) => item.id === food)?.id,
        food: null,

        energy_cal: (foodById?.energy_cal / weightOfRecipe) * weight,
        energy_kj: (foodById?.energy_kj / weightOfRecipe) * weight,
        proteins: (foodById?.proteins / weightOfRecipe) * weight,
        carbohydrates: (foodById?.carbohydrates / weightOfRecipe) * weight,
        fats: (foodById?.fats / weightOfRecipe) * weight,
      }
    : {
        food,
        energy_cal: (foodById?.energy_cal / 100) * weight,
        energy_kj: (foodById?.energy_kj / 100) * weight,
        proteins: (foodById?.proteins / 100) * weight,
        carbohydrates: (foodById?.carbohydrates / 100) * weight,
        fats: (foodById?.fats / 100) * weight,
        recipe_id: null,
      };

  const [addMealItem] = useAddMealItemMutation({
    onError: (error1) => setOpenErrorMessage(error1),
    onCompleted: () => {
      setOpenSuccessMessage(true);
      setOpen(false);
    },
    variables: {
      u_id: HARDCODED_U_ID,
      weight,
      meal_id,
      ...recipeOrFoodProps,
    },
  });

  useEffect(() => {
    if (data) {
      setFood(data.food[0].id);
    }
  }, [data]);

  if (error) {
    return <ToastMessage severity={"error"} children={error?.message as any} />;
  }

  return (
    <React.Fragment>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Meal item</DialogTitle>
        <DialogContent>
          {data && (
            <>
              <Select
                label={<Trans>Food</Trans>}
                defaultValue={food || data?.food[0].id}
                onChange={(event) => setFood(event.target.value as any)}
                className={classes.field}
              >
                {data?.food.map((food, key) => (
                  <MenuItem value={food.id} key={key}>
                    {food.name}
                  </MenuItem>
                ))}
              </Select>
              <Typography color={"secondary"} variant={"h4"}>
                OR
              </Typography>
              <Select
                label={<Trans>Recipe</Trans>}
                defaultValue={food || data?.recipe[0].id}
                onChange={(event) => setFood(event.target.value as any)}
                className={classes.field}
              >
                {data?.recipe.map((recipe, key) => (
                  <MenuItem value={recipe.id} key={key}>
                    {recipe.name}
                  </MenuItem>
                ))}
              </Select>
            </>
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
