import React, { useState } from "react";
import {
  LinearProgress,
  GridList,
  Button,
  GridListTile,
} from "@material-ui/core";
import { AlertTitle, Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

import { useFoodTypesQuery } from "../../graphql/generated/graphql";
import { EMPTY_STATE_IMG } from "../../constants";
import { CategoryCard } from "./CategoryCard";
import { Trans } from "@lingui/react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    padding: theme.spacing(2),
  },
}));

export function Pantry() {
  const classes = useStyles();
  const { data, loading, error } = useFoodTypesQuery();
  const [addCategory, setAddCategory] = useState(false);

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
        {data?.food_type.map(({ value, decription, img_url }, i) => (
          <GridListTile key={i}>
            <CategoryCard
              mode={"regular"}
              name={value}
              description={decription}
              img_url={img_url || EMPTY_STATE_IMG}
            />
          </GridListTile>
        ))}

        {addCategory ? (
          <GridListTile>
            <CategoryCard mode={"edit"} setAddCategory={setAddCategory} />
          </GridListTile>
        ) : (
          <Button onClick={() => setAddCategory(true)}>
            <Trans>Add category</Trans>
          </Button>
        )}
      </GridList>
    </div>
  );
}
