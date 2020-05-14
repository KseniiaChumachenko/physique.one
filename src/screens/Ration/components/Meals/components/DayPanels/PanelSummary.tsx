import React, { useState } from "react";
import moment from "moment";
import { ExpandMoreRounded } from "@material-ui/icons";
import {
  Avatar,
  Chip,
  ExpansionPanelSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Meal, Meal_Item_Sum_Fields } from "src/graphql/generated/graphql";
import { AddMealDialog } from "../../../AddMealDialog";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginLeft: theme.spacing(1),
  },
  panelHeader: {
    flexGrow: 1,
  },
}));

type SummaryProps = Meal_Item_Sum_Fields & Pick<Meal, "name" | "time">;

export const PanelSummary = ({
  name,
  energy_cal,
  energy_kj,
  proteins,
  carbohydrates,
  fats,
  time,
}: SummaryProps) => {
  const classes = useStyles();
  return (
    <ExpansionPanelSummary expandIcon={<ExpandMoreRounded />}>
      <div className={classes.panelHeader}>
        <Grid container spacing={1}>
          <Grid
            item
            xs
            children={<Typography color={"textPrimary"}>{name}</Typography>}
          />
          <Grid item xs={9}>
            <Chip
              label={`${energy_cal} kcal | ${energy_kj} kJ`}
              variant={"outlined"}
              size={"small"}
              color={"secondary"}
              className={classes.chip}
            />
            <Chip
              avatar={<Avatar>P</Avatar>}
              label={proteins}
              variant={"outlined"}
              size={"small"}
              color={"primary"}
              className={classes.chip}
            />
            <Chip
              avatar={<Avatar>C</Avatar>}
              label={carbohydrates}
              variant={"outlined"}
              size={"small"}
              color={"primary"}
              className={classes.chip}
            />
            <Chip
              avatar={<Avatar>F</Avatar>}
              label={fats}
              variant={"outlined"}
              size={"small"}
              color={"primary"}
              className={classes.chip}
            />
          </Grid>
          <Grid
            item
            xs={1}
            children={
              <Typography color={"textSecondary"} variant={"body1"}>
                {moment(time, "HH:mm").format("LT")}
              </Typography>
            }
          />
        </Grid>
      </div>
    </ExpansionPanelSummary>
  );
};
