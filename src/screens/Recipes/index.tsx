import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { RecipeCard } from "./RecipeCard";

export const Recipes = observer(() => {
  const {
    recipeStore: { data, addRecipe },
    screenStore: { setAction },
  } = useStore();

  useEffect(() => {
    setAction({
      label: "+ Add new recipe",
      onClick: addRecipe,
    });

    return () => {
      setAction(null);
    };
  }, []);

  return (
    <>
      {data.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </>
  );
});
