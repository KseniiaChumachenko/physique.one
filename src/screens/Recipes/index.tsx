import React, { Suspense, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { v4 as uuid } from "uuid";
import { LinearProgress } from "@material-ui/core";
import { useStore } from "../../store";
import {
  RecipePreloadedHookProps,
  useRecipe,
  useRecipePreloaded,
} from "../../api-hooks/recipe";
import { FoodPreloadedHookProps, useFood } from "../../api-hooks/food";
import { RecipeCard } from "./RecipeCard";

export const RecipesContent = observer(
  ({ recipeQR, foodQR }: RecipePreloadedHookProps & FoodPreloadedHookProps) => {
    const {
      data,
      mutations: { add },
    } = useRecipePreloaded(recipeQR);

    const {
      userStore: {
        user: { id },
      },
      screenStore: { setAction },
    } = useStore();

    const handleAddRecipe = () =>
      add({
        variables: {
          objects: [
            {
              id: uuid(),
              name: "New recipe",
              u_id: id,
              increment: 0,
              meal_items: null,
              recipe_items: null,
            },
          ],
        },
      });

    useEffect(() => {
      setAction({
        label: "+ Add new recipe",
        onClick: handleAddRecipe,
      });

      return () => {
        setAction(null);
      };
    }, []);

    return (
      <>
        {data.recipe_connection.edges.map(({ node }) => (
          <RecipeCard
            key={node.id}
            recipeQR={recipeQR}
            foodQR={foodQR}
            {...node}
          />
        ))}
      </>
    );
  }
);

export const Recipes = () => {
  const { queryReference: recipeQR } = useRecipe({});
  const { queryReference: foodQR } = useFood({});

  const references = recipeQR && foodQR;

  return (
    <Suspense fallback={<LinearProgress />}>
      {references && <RecipesContent recipeQR={recipeQR} foodQR={foodQR} />}
    </Suspense>
  );
};
