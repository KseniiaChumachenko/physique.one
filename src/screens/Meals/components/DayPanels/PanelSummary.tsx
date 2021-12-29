import React from "react";
import moment from "moment";
import { ExpandMoreRounded } from "@material-ui/icons";
import { AccordionSummary, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Meal,
  useMealItemMacrosSumByIdSubscription,
} from "src/graphql/generated/graphql";
import { useStore } from "src/store";
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

type SummaryProps = Pick<Meal, "name" | "time"> & Pick<Meal, "id">;

export const PanelSummary = ({ name, id, time }: SummaryProps) => {
  const classes = useStyles();
  const {
    userStore: { user },
  } = useStore();

  const { data } = useMealItemMacrosSumByIdSubscription({
    variables: { meal_id: id, u_id: user?.id },
  });

  const macronutrients = data?.meal_item_aggregate?.aggregate?.sum;

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
            {macronutrients?.energy_kj ? (
              <AggregationChips
                energy_cal={macronutrients.energy_cal}
                energy_kj={macronutrients.energy_kj}
                proteins={macronutrients.proteins}
                carbohydrates={macronutrients.carbohydrates}
                fats={macronutrients.fats}
              />
            ) : null}
          </Grid>
          {id && (
            <Grid
              item
              xs={5}
              md={2}
              alignItems={"center"}
              children={<PanelDetailActions id={id} />}
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
