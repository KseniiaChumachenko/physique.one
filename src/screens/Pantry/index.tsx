import React from "react";
import { observer } from "mobx-react-lite";
import { LinearProgress, Grid, Button } from "@material-ui/core";
import { AlertTitle, Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { Trans } from "@lingui/react";
import { CategoryCard } from "./CategoryCard";
import { usePantryStore } from "./store/usePantryStore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  button: {
    display: "flex",
    justifyContent: "center",
    maxWidth: 400,
    minWidth: 330,
  },
}));

export const Pantry = observer(() => {
  const {
    categories,
    loading,
    error,
    handleAddNewCategoryStore,
    activeCard,
  } = usePantryStore();
  const classes = useStyles();

  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error.message}
      </Alert>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container={true} spacing={3}>
        {categories.map((card, i) => (
          <Grid key={i} item={true} xs={true}>
            <CategoryCard {...card} />
          </Grid>
        ))}
        {!activeCard && (
          <Grid item={true} xs={true} className={classes.button}>
            <Button onClick={handleAddNewCategoryStore}>
              <Trans>Add category</Trans>
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
});
