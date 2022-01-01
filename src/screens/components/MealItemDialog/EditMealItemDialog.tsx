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
import { base64ToUuid } from "src/utils/base64-to-uuid";
import {
  FoodPreloadedHookProps,
  useFoodPreloadedQuery,
} from "src/api-hooks/food";
import {
  RecipePreloadedHookProps,
  useRecipePreloaded,
} from "src/api-hooks/recipe";
import { useUpdateMealItemMutation } from "src/api-hooks/mealItem";
import { useStore } from "src/store";
import { Meal_Item } from "../../../graphql/generated/graphql";
import { MealAutocomplete } from "../../../components/MealAutocomplete";
import { aggregate } from "../../Recipes/utils";

const useStyles = makeStyles(() => ({
  field: {
    width: "100%",
    minWidth: 250,
  },
}));

type ExtendProps = FoodPreloadedHookProps & RecipePreloadedHookProps;

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
  recipeQR,
  refetch,
}: Props) => {
  const classes = useStyles();

  const { data: foodLibrary } = useFoodPreloadedQuery(foodQR);
  const { data: recipeLibrary } = useRecipePreloaded(recipeQR);
  const [update] = useUpdateMealItemMutation();

  const {
    userStore: { user },
  } = useStore();

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
        const recipeWeight = aggregate(recipe.recipe_items as any, "weight");
        const weightAdjustment = (divider: number) =>
          (divider / recipeWeight) * weight;

        return {
          id: base64ToUuid(recipe.id),
          recipe_id: base64ToUuid(recipe.id),
          carbohydrates: weightAdjustment(
            aggregate(recipe.recipe_items as any, "carbohydrates")
          ),
          proteins: weightAdjustment(
            aggregate(recipe.recipe_items as any, "proteins")
          ),
          fats: weightAdjustment(aggregate(recipe.recipe_items as any, "fats")),
          energy_cal: weightAdjustment(
            aggregate(recipe.recipe_items as any, "energy_cal")
          ),
          energy_kj: weightAdjustment(
            aggregate(recipe.recipe_items as any, "energy_kj")
          ),
          weight: weightAdjustment(
            aggregate(recipe.recipe_items as any, "weight")
          ),
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
              recipeQR={recipeQR}
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
