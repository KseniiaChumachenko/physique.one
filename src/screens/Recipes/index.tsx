import React from "react";
import { Trans } from "@lingui/react";
import { Button, createStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import { useAddRecipeMutation } from "../../graphql/generated/graphql";
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

export const Recipes = observer(() => {
  const classes = useStyles();
  const {
    userStore: {
      user: { id: u_id },
    },
    recipeStore: { data, load },
  } = useStore();

  const [insert_recipe_one] = useAddRecipeMutation({
    variables: {
      name: "New recipe",
      u_id,
    },
    onCompleted: () => load(),
  });

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
      {data.map((recipe) => (
        <RecipeCard key={recipe.id} {...(recipe as any)} />
      ))}
    </>
  );
});
