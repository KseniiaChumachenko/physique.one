import React, { ComponentProps, forwardRef } from "react";
import clsx from "clsx";
import {
  Card,
  CardActionArea,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AggregationChips } from "src/components/AggregationChips";
import { RecipesQuery$data } from "src/api-hooks/recipes";

type General = Pick<
  RecipesQuery$data["recipe_connection"]["edges"][0]["node"],
  "name" | "id"
>;
type Chips = ComponentProps<typeof AggregationChips>;

interface Props {
  isActive?: boolean;
  onClick(id: string): void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: theme.spacing(2),
  },
  isActive: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
  },
}));

export const RecipeCard = forwardRef(
  ({ id, name, onClick, isActive, ...chips }: General & Chips & Props, ref) => {
    const classes = useStyles();
    return (
      <Card ref={ref} className={clsx({ [classes.isActive]: isActive })}>
        <CardActionArea
          onClick={(event) => {
            event.stopPropagation();
            onClick(id);
          }}
          className={classes.root}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <AggregationChips {...chips} />
        </CardActionArea>
      </Card>
    );
  }
);
