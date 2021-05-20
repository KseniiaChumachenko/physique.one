import React from "react";
import { observer } from "mobx-react-lite";
import {
  LinearProgress,
  GridList,
  Button,
  GridListTile,
} from "@material-ui/core";
import { AlertTitle, Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { Trans } from "@lingui/react";
import { CategoryCard } from "./CategoryCard";
import { usePantryStore } from "./store/usePantryStore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    padding: theme.spacing(2),
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
      <GridList cellHeight={230} cols={3}>
        {categories.map((card, i) => (
          <GridListTile key={i}>
            <CategoryCard {...card} />
          </GridListTile>
        ))}

        {!activeCard && (
          <Button onClick={handleAddNewCategoryStore}>
            <Trans>Add category</Trans>
          </Button>
        )}
      </GridList>
    </div>
  );
});
