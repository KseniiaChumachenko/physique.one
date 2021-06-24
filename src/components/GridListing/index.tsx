import React, { ComponentProps } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, LinearProgress } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { ApolloError } from "@apollo/client";
import { Trans } from "@lingui/react";
import { Card } from "src/components/Card";

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

interface GridListingProps {
  items: ComponentProps<typeof Card>[];
  loading: boolean;
  activeCard: boolean;
  onAddCardClick(): void;
  error?: ApolloError;
}

export const GridListing = ({
  items,
  loading,
  error,
  activeCard,
  onAddCardClick,
}: GridListingProps) => {
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
        {items.map((card, i) => (
          <Grid key={i} item={true} xs={true}>
            <Card {...card} />
          </Grid>
        ))}
        {!activeCard && (
          <Grid item={true} xs={true} className={classes.button}>
            <Button onClick={onAddCardClick}>
              <Trans>Add new item</Trans>
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
