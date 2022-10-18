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
import { Trans } from "@lingui/macro"
import { base64ToUuid } from "src/utils/base64-to-uuid";
import { Meal_Item } from "src/types";
import {
  FoodPreloadedHookProps,
  useFoodPreloadedQuery,
} from "src/api-hooks/food";
import {
  RecipesPreloadedHookProps,
  useRecipesPreloaded,
} from "src/api-hooks/recipes";
import { useUpdateMealItemMutation } from "src/api-hooks/mealItem";
import { useActiveUser } from "src/api-hooks/authorization";
import { MealAutocomplete } from "src/components/MealAutocomplete";

const useStyles = makeStyles(() => ({
  field: {
    width: "100%",
    minWidth: 250,
  },
}));

type ExtendProps = FoodPreloadedHookProps & RecipesPreloadedHookProps;

interface Props extends ExtendProps {
  open: boolean;
  setOpen(o: boolean): void;
  mealItem: Meal_Item;
  refetch: () => void;
}

export const EditMealItemDialog = ({
  open,
  setOpen,
  mealItem,
  foodQR,
  recipesQR,
  refetch,
}: Props) => {
  const classes = useStyles();

  const { data: foodLibrary } = useFoodPreloadedQuery(foodQR);
  const { data: recipeLibrary } = useRecipesPreloaded(recipesQR);
  const [update] = useUpdateMealItemMutation();

  const { user } = useActiveUser();

  const [error, setOpenErrorMessage] = React.useState<string | undefined>();
  const [success, setOpenSuccessMessage] = React.useState(false);

  const [selectedItemId, setSelectedItemId] = useState(
    mealItem?.food ??
      mealItem?.recipe_id ??
      foodLibrary.food_connection.edges[0].node.id
  );
  const [weight, setWeight] = useState(mealItem.weight);

  const mealItemProps = () => {
    const food = foodLibrary.food_connection.edges.find(
      ({ node: { id } }) => id === selectedItemId
    )?.node;
    if (food) {
      const weightAdjustment = (divider: number) =>
        (divider / (food?.weight || 100)) * weight;
      return {
        food: base64ToUuid(food?.id),

        energy_cal: weightAdjustment(food?.energy_cal),
        energy_kj: weightAdjustment(food?.energy_kj),
        proteins: weightAdjustment(food?.proteins),
        carbohydrates: weightAdjustment(food?.carbohydrates),
        fats: weightAdjustment(food?.fats),
      };
    } else {
      const recipe = recipeLibrary.recipe_connection.edges.find(
        ({ node: { id } }) => id === selectedItemId
      )?.node;

      if (recipe) {
        const sum = recipe?.recipe_items_aggregate?.aggregate?.sum;

        const recipeWeight = sum?.weight || 0;
        const weightAdjustment = (divider: number) =>
          (divider / recipeWeight) * weight;

        return {
          id: base64ToUuid(recipe.id),
          recipe_id: base64ToUuid(recipe.id),
          carbohydrates: weightAdjustment(sum?.carbohydrates || 0),
          proteins: weightAdjustment(sum?.proteins || 0),
          fats: weightAdjustment(sum?.fats || 0),
          energy_cal: weightAdjustment(sum?.energy_cal || 0),
          energy_kj: weightAdjustment(sum?.energy_kj || 0),
          weight: weightAdjustment(sum?.weight || 0),
        };
      }
    }
  };

  const handleUpdateMealItem = () =>
    update({
      variables: {
        id: base64ToUuid(mealItem.id),
        _set: {
          u_id: user?.id,
          weight,
          meal_id: mealItem.meal_id,
          ...mealItemProps(),
        },
      },
      onCompleted: () => {
        refetch();
        setOpenSuccessMessage(true);
        setOpen(false);
      },
      onError: (error1) => {
        setOpenErrorMessage(error1.message);
      },
    });

  return (
    <React.Fragment>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Meal item</DialogTitle>
        <DialogContent>
          {selectedItemId && (
            <MealAutocomplete
              foodQR={foodQR}
              recipesQR={recipesQR}
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
              handleUpdateMealItem();
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
