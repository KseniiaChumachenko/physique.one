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
import { useStore } from "src/store";
import {
  Meal_Item,
  useUpdateMealItemMutation,
} from "../../../graphql/generated/graphql";
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
  mealItem: Meal_Item;
}

export const EditMealItemDialog = ({ open, setOpen, mealItem }: Props) => {
  const classes = useStyles();
  const {
    userStore: { user },
    foodLibraryStore: { data: foodLibrary },
    recipeStore: { data: recipeLibrary },
  } = useStore();

  const [error, setOpenErrorMessage] = React.useState<string | undefined>();
  const [success, setOpenSuccessMessage] = React.useState(false);

  const [selectedItemId, setSelectedItemId] = useState(
    mealItem?.food ?? mealItem?.recipe_id ?? foodLibrary?.[0].id
  );
  const [weight, setWeight] = useState(mealItem.weight);

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

  const [update_meal_item_by_pk] = useUpdateMealItemMutation({
    onError: (error1) => {
      setOpenErrorMessage(error1.message);
    },
    onCompleted: () => {
      setOpenSuccessMessage(true);
      setOpen(false);
    },
    variables: {
      id: mealItem.id,
      u_id: user?.id,
      weight,
      meal_id: mealItem.meal_id,
      ...mealItemProps(),
    },
  });

  return (
    <React.Fragment>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Meal item</DialogTitle>
        <DialogContent>
          {selectedItemId && (
            <MealAutocomplete
              value={selectedItemId}
              setValue={setSelectedItemId}
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
        onClose={() => setOpenErrorMessage(undefined)}
      >
        <Alert
          severity={"success"}
          onClose={() => setOpenErrorMessage(undefined)}
        >
          <Trans>Meals successfully updated</Trans>
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setOpenErrorMessage(undefined)}
      >
        <Alert
          severity={"error"}
          onClose={() => setOpenErrorMessage(undefined)}
        >
          {error}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};
