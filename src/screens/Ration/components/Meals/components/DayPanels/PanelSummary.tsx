import React, { useEffect, useState } from "react";
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
import {
  Meal,
  useMealItemMacrosSumByIdSubscription,
} from "src/graphql/generated/graphql";
import { PanelDetailActions } from "./PanelDetailActions";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginLeft: theme.spacing(1),
  },
  panelHeader: {
    flexGrow: 1,
  },
}));

const INITIAL_STATE = {
  energy_cal: 0,
  energy_kj: 0,
  proteins: 0,
  fats: 0,
  carbohydrates: 0,
};

type SummaryProps = Pick<Meal, "name" | "time"> & Pick<Meal, "id">;

export const PanelSummary = ({ name, id, time }: SummaryProps) => {
  const classes = useStyles();

  const [
    { energy_cal, energy_kj, proteins, fats, carbohydrates },
    setSum,
  ] = useState(INITIAL_STATE);

  const { data } = useMealItemMacrosSumByIdSubscription({
    variables: { meal_id: id },
  });

  useEffect(() => {
    if (data?.meal_item_aggregate?.aggregate?.sum) {
      setSum({
        energy_cal: data?.meal_item_aggregate?.aggregate?.sum.energy_cal || 0,
        energy_kj: data?.meal_item_aggregate?.aggregate?.sum.energy_kj || 0,
        proteins: data?.meal_item_aggregate?.aggregate?.sum.proteins || 0,
        carbohydrates:
          data?.meal_item_aggregate?.aggregate?.sum.carbohydrates || 0,
        fats: data?.meal_item_aggregate?.aggregate?.sum.fats || 0,
      });
    }
  }, [data]);

  return (
    <ExpansionPanelSummary expandIcon={<ExpandMoreRounded />}>
      <div className={classes.panelHeader}>
        <Grid container spacing={1} alignItems={"center"}>
          <Grid
            item
            xs={1}
            md={2}
            children={<Typography color={"textPrimary"}>{name}</Typography>}
          />
          <Grid item xs={4} md alignItems={"center"}>
            <Chip
              label={`${energy_cal?.toFixed(2)} kcal | ${energy_kj?.toFixed(
                2
              )} kJ`}
              variant={"outlined"}
              size={"small"}
              color={"secondary"}
              className={classes.chip}
              disabled={!!energy_cal}
            />
            <Chip
              avatar={<Avatar>P</Avatar>}
              label={proteins?.toFixed(2)}
              variant={"outlined"}
              size={"small"}
              color={"primary"}
              className={classes.chip}
              disabled={!!proteins}
            />
            <Chip
              avatar={<Avatar>C</Avatar>}
              label={carbohydrates?.toFixed(2)}
              variant={"outlined"}
              size={"small"}
              color={"primary"}
              className={classes.chip}
              disabled={!!carbohydrates}
            />
            <Chip
              avatar={<Avatar>F</Avatar>}
              label={fats?.toFixed(2)}
              variant={"outlined"}
              size={"small"}
              color={"primary"}
              className={classes.chip}
              disabled={!!fats}
            />
          </Grid>
          <Grid
            item
            xs={5}
            md={2}
            alignItems={"center"}
            children={<PanelDetailActions id={id} />}
          />
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
    </ExpansionPanelSummary>
  );
};
