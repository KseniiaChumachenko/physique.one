import React, { Suspense, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { LinearProgress } from "@material-ui/core";
import { useActiveUser } from "src/api-hooks/authorization";
import {
  RecipePreloadedHookProps,
  useRecipe,
  useRecipePreloaded,
} from "src/api-hooks/recipe";
import { FoodPreloadedHookProps, useFood } from "src/api-hooks/food";
import { useStore } from "../../store";
import { RecipeCard } from "./RecipeCard";

export const RecipesContent = ({
  recipeQR,
  foodQR,
}: RecipePreloadedHookProps & FoodPreloadedHookProps) => {
  const {
    data,
    mutations: { add },
  } = useRecipePreloaded(recipeQR);
  const { user } = useActiveUser();

  const { setAction } = useStore();

  const handleAddRecipe = () =>
    add({
      variables: {
        objects: [
          {
            id: uuid(),
            name: "New recipe",
            u_id: user?.id,
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
      {data.recipe_connection.edges.map(
        ({ node }) =>
          node && (
            <RecipeCard
              key={node.id}
              recipeQR={recipeQR}
              foodQR={foodQR}
              {...node}
            />
          )
      )}
    </>
  );
};

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
