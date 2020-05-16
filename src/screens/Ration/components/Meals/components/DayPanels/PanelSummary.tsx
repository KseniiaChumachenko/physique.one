import React from "react";
import moment from "moment";
import { ExpandMoreRounded } from "@material-ui/icons";
import {
  Avatar,
  Chip,
  ExpansionPanel,
  ExpansionPanelSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Meal,
  Meal_Item,
  Meal_Item_Sum_Fields,
  useMealByIdQuery,
} from "src/graphql/generated/graphql";
import { PanelDetailActions } from "./PanelDetailActions";
import { AddMealDialog } from "../../../AddMealDialog";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginLeft: theme.spacing(1),
  },
  panelHeader: {
    flexGrow: 1,
  },
}));

type SummaryProps = Meal_Item_Sum_Fields &
  Pick<Meal, "name" | "time"> &
  Pick<Meal_Item, "id"> & { refetchPanel: any };

export const PanelSummary = ({
  name,
  energy_cal,
  energy_kj,
  proteins,
  carbohydrates,
  fats,
  id,
  time,
  refetchPanel,
}: SummaryProps) => {
  const classes = useStyles();

  return (
    <ExpansionPanelSummary expandIcon={<ExpandMoreRounded />}>
      <div className={classes.panelHeader}>
        <Grid container spacing={1} alignItems={"center"}>
          <Grid
            item
            xs
            children={<Typography color={"textPrimary"}>{name}</Typography>}
          />
          <Grid item xs={8} alignItems={"center"}>
            <Chip
              label={`${energy_cal?.toFixed(2)} kcal | ${energy_kj?.toFixed(
                2
              )} kJ`}
              variant={"outlined"}
              size={"small"}
              color={"secondary"}
              className={classes.chip}
            />
            <Chip
              avatar={<Avatar>P</Avatar>}
              label={proteins?.toFixed(2)}
              variant={"outlined"}
              size={"small"}
              color={"primary"}
              className={classes.chip}
            />
            <Chip
              avatar={<Avatar>C</Avatar>}
              label={carbohydrates?.toFixed(2)}
              variant={"outlined"}
              size={"small"}
              color={"primary"}
              className={classes.chip}
            />
            <Chip
              avatar={<Avatar>F</Avatar>}
              label={fats?.toFixed(2)}
              variant={"outlined"}
              size={"small"}
              color={"primary"}
              className={classes.chip}
            />
          </Grid>
          <Grid
            item
            xs
            alignItems={"center"}
            children={
              <PanelDetailActions id={id} refetchPanel={refetchPanel} />
            }
          />
          <Grid
            item
            xs={1}
            alignItems={"center"}
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
