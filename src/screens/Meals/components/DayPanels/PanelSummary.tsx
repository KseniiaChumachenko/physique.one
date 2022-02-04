import React from "react";
import moment from "moment";
import { Disposable, UseMutationConfig } from "react-relay";
import { ExpandMoreRounded } from "@material-ui/icons";
import { AccordionSummary, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteMealMutation } from "src/api-hooks/mealsByDate";
import { FoodPreloadedHookProps } from "src/api-hooks/food";
import { RecipePreloadedHookProps } from "src/api-hooks/recipe";
import { AggregationChips } from "../../../../components/AggredationChips";
import { PanelDetailActions } from "./PanelDetailActions";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginLeft: theme.spacing(1),
  },
  panelHeader: {
    flexGrow: 1,
  },
}));

//TODO: types
type SummaryProps = {
  readonly id: string;
  readonly date: string | null;
  readonly time: string | null;
  readonly name: string | null;
} & {
  meal_items_aggregate: {
    readonly aggregate: {
      readonly sum: {
        readonly carbohydrates: number | null;
        readonly energy_cal: number | null;
        readonly energy_kj: number | null;
        readonly fats: number | null;
        readonly proteins: number | null;
      } | null;
    } | null;
  };
} & {
  refetch: () => void;
  destroy: (c: UseMutationConfig<DeleteMealMutation>) => Disposable;
} & FoodPreloadedHookProps &
  RecipePreloadedHookProps;

export const PanelSummary = ({
  name,
  id,
  time,
  meal_items_aggregate,
  refetch,
  destroy,
  foodQR,
  recipeQR,
}: SummaryProps) => {
  const classes = useStyles();

  const macronutrients = meal_items_aggregate.aggregate?.sum;

  return (
    <AccordionSummary expandIcon={<ExpandMoreRounded />}>
      <div className={classes.panelHeader}>
        <Grid container spacing={1} alignItems={"center"}>
          <Grid
            item
            xs={1}
            md={2}
            children={<Typography color={"textPrimary"}>{name}</Typography>}
          />
          <Grid item xs={4} md alignItems={"center"}>
            <AggregationChips
              energy_cal={macronutrients?.energy_cal || 0}
              energy_kj={macronutrients?.energy_kj || 0}
              proteins={macronutrients?.proteins || 0}
              carbohydrates={macronutrients?.carbohydrates || 0}
              fats={macronutrients?.fats || 0}
            />
          </Grid>
          {id && (
            <Grid
              item
              xs={5}
              md={2}
              alignItems={"center"}
              children={
                <PanelDetailActions
                  id={id}
                  refetch={refetch}
                  destroy={destroy}
                  foodQR={foodQR}
                  recipeQR={recipeQR}
                />
              }
            />
          )}
          <Grid
            item
            xs={3}
            md={1}
            alignItems={"center"}
            children={
              <Typography color={"textSecondary"} variant={"body1"}>
                {moment(time, "HH:mm").format("LT")}
              </Typography>
            }
          />
        </Grid>
      </div>
    </AccordionSummary>
  );
};
