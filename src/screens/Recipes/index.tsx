import React from "react";
import { Trans } from "@lingui/react";
import { Button, createStyles, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useAddRecipeMutation,
  useRecipeListingSubscription,
} from "../../graphql/generated/graphql";
import { useStore } from "../../store";
import { RecipeCard } from "./RecipeCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    addButton: {
      width: "100%",
      margin: theme.spacing(3),
      fontSize: 20,
      fontWeight: 600,
    },
  })
);

export const Recipes = () => {
  const classes = useStyles();
  const {
    userStore: {
      user: { id: u_id },
    },
  } = useStore();
  const { data, loading } = useRecipeListingSubscription();
  const [insert_recipe_one] = useAddRecipeMutation({
    variables: {
      name: "New recipe",
      u_id,
    },
  });

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <>
      <Button
        variant={"text"}
        color={"primary"}
        onClick={() => insert_recipe_one()}
        className={classes.addButton}
      >
        <Trans>+ Add new recipe</Trans>
      </Button>
      {data?.recipe.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          {...recipe as any}
        />
      ))}
    </>
  );
};
