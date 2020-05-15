import React, { useState } from "react";
import {
  Avatar,
  Button,
  Chip,
  ExpansionPanelSummary,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddRounded, ExpandMoreRounded } from "@material-ui/icons";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Meal_Sum_Fields } from "src/graphql/generated/graphql";
import { AddMealDialog } from "../../../AddMealDialog";

const useStyles = makeStyles((theme) => ({
  content: {
    margin: 0,
    "&$expanded": {
      margin: 0,
    },
  },
  expanded: {},
  chip: {
    marginLeft: theme.spacing(1),
  },
}));

interface Props extends Meal_Sum_Fields {
  date: string;
  refetchPanel: any;
}

export const DayPanelHeader = ({
  date,
  energy_cal,
  energy_kj,
  carbohydrates,
  fats,
  proteins,
  refetchPanel,
}: Props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleAddMeal = () => setOpen(true);

  return (
    <ExpansionPanelSummary
      classes={{ content: classes.content, expanded: classes.expanded }}
      expandIcon={<ExpandMoreRounded />}
    >
      <Grid container spacing={3} alignItems={"center"}>
        <Grid item xs alignItems={"center"}>
          <Typography variant={"subtitle1"} color={"textSecondary"}>
            {moment(date).format("dd (DD/MM/YYYY)")}
          </Typography>
        </Grid>
        <Grid item xs={9} alignItems={"center"}>
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
        <Grid item xs={1} alignItems={"center"}>
          <IconButton children={<AddRounded />} onClick={handleAddMeal} />
        </Grid>
      </Grid>
      <AddMealDialog
        refetchPanel={refetchPanel}
        open={open}
        setOpen={setOpen}
        date={date}
      />
    </ExpansionPanelSummary>
  );
};
