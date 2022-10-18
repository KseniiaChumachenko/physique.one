import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import { Trans } from "@lingui/macro";
import { useActiveUser } from "src/api-hooks/authorization";
import {
  FoodPreloadedHookProps,
  useFoodPreloadedQuery,
} from "src/api-hooks/food";
import {
  RecipesPreloadedHookProps,
  useRecipesPreloaded,
} from "src/api-hooks/recipes";
import { useAddMealItemMutation } from "src/api-hooks/mealItem";
import { base64ToUuid } from "src/utils/base64-to-uuid";
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
  meal_id: string;
  refetch: () => void;
}

// TODO Refactor Add/Edit modals first

export const AddMealItemDialog = ({
  open,
  setOpen,
  meal_id,
  foodQR,
  recipesQR,
  refetch,
}: Props) => {
  const classes = useStyles();
  const { data: foodLibrary } = useFoodPreloadedQuery(foodQR);
  const { data: recipeLibrary } = useRecipesPreloaded(recipesQR);
  const [addMealItem] = useAddMealItemMutation();
  const { user } = useActiveUser();

  const [error, setOpenErrorMessage] = React.useState<Error>();
  const [success, setOpenSuccessMessage] = React.useState(false);

  const [selectedItemId, setSelectedItemId] = useState(
    foodLibrary.food_connection.edges[0].node.id || ""
  );
  const [weight, setWeight] = useState(100);

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

  const handleAddMealItem = () =>
    addMealItem({
      onError: (e) => setOpenErrorMessage(e),
      onCompleted: () => {
        refetch();
        setOpenSuccessMessage(true);
        setOpen(false);
      },
      variables: {
        objects: [
          {
            u_id: user?.id,
            weight,
            meal_id: base64ToUuid(meal_id),
            ...mealItemProps(),
          },
        ],
      },
    });

  if (!foodQR || !recipesQR) {
    return <CircularProgress />;
  }

  return (
    <React.Fragment>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Meal item</DialogTitle>
        <DialogContent>
          <MealAutocomplete
            value={selectedItemId}
            setValue={setSelectedItemId}
            className={classes.field}
            foodQR={foodQR}
            recipesQR={recipesQR}
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
            onClick={handleAddMealItem}
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
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setOpenErrorMessage(undefined)}
        >
          <Alert
            severity={"error"}
            onClose={() => setOpenErrorMessage(undefined)}
          >
            <Trans>Failed to add item: {error?.message}</Trans>
          </Alert>
        </Snackbar>
      )}
    </React.Fragment>
  );
};
