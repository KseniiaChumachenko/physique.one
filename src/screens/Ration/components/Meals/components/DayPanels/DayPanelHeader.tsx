import React, { useState } from "react";
import {
  Avatar,
  Button,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddRounded } from "@material-ui/icons";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Meal_Sum_Fields } from "src/graphql/generated/graphql";
import { AddMealDialog } from "../../../AddMealDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  chip: {
    marginLeft: theme.spacing(1),
  },
}));

interface Props extends Meal_Sum_Fields {
  date: string;
}

export const DayPanelHeader = ({
  date,
  energy_cal,
  energy_kj,
  carbohydrates,
  fats,
  proteins,
}: Props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleAddMeal = () => setOpen(true);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Typography variant={"subtitle1"} color={"textSecondary"}>
            {moment(date).format("dd (DD/MM/YYYY)")}
          </Typography>
        </Grid>
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
        <Grid item xs={1}>
          <IconButton children={<AddRounded />} onClick={handleAddMeal} />
        </Grid>
      </Grid>
      <AddMealDialog open={open} setOpen={setOpen} date={date} />
    </div>
  );
};
