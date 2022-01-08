import React, { useState } from "react";
import { observer } from "mobx-react-lite";
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
import { aggregate } from "../../Recipes/utils";

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

export const AddMealItemDialog = observer(
  ({ open, setOpen, meal_id }: Props) => {
    const classes = useStyles();
    const {
      userStore: { user },
      foodLibraryStore: { data: foodLibrary },
      recipeStore: { data: recipeLibrary },
    } = useStore();

    const [error, setOpenErrorMessage] = React.useState(false);
    const [success, setOpenSuccessMessage] = React.useState(false);

    const [selectedItemId, setSelectedItemId] = useState(foodLibrary?.[0]?.id);
    const [weight, setWeight] = useState(100);

    const mealItemProps = () => {
      const food = foodLibrary.find(({ id }) => id === selectedItemId);
      if (food) {
        const weightAdjustment = (divider: number) =>
          (divider / (food?.weight || 100)) * weight;
        return {
          food: food?.id,

          energy_cal: weightAdjustment(food?.energy_cal),
          energy_kj: weightAdjustment(food?.energy_kj),
          proteins: weightAdjustment(food?.proteins),
          carbohydrates: weightAdjustment(food?.carbohydrates),
          fats: weightAdjustment(food?.fats),
        };
      } else {
        const recipe = recipeLibrary.find(({ id }) => id === selectedItemId);

        if (recipe) {
          const recipeWeight = aggregate(recipe.recipe_items, "weight");
          const weightAdjustment = (divider: number) =>
            (divider / recipeWeight) * weight;

          return {
            id: recipe.id,
            recipe_id: recipe.id,
            name: recipe.name,
            carbohydrates: weightAdjustment(
              aggregate(recipe.recipe_items, "carbohydrates")
            ),
            proteins: weightAdjustment(
              aggregate(recipe.recipe_items, "proteins")
            ),
            fats: weightAdjustment(aggregate(recipe.recipe_items, "fats")),
            energy_cal: weightAdjustment(
              aggregate(recipe.recipe_items, "energy_cal")
            ),
            energy_kj: weightAdjustment(
              aggregate(recipe.recipe_items, "energy_kj")
            ),
            weight: weightAdjustment(aggregate(recipe.recipe_items, "weight")),
          };
        }
      }
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
        ...mealItemProps(),
      },
    });

    return (
      <React.Fragment>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Meal item</DialogTitle>
          <DialogContent>
            <MealAutocomplete
              value={selectedItemId}
              setValue={setSelectedItemId}
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
            <Alert
              severity={"error"}
              onClose={() => setOpenErrorMessage(false)}
            >
              <Trans>Failed to add item: {submitError?.message}</Trans>
            </Alert>
          </Snackbar>
        )}
      </React.Fragment>
    );
  }
);
