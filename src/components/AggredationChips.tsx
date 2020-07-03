import React from "react";
import { Avatar, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginLeft: theme.spacing(1),
  },
  panelHeader: {
    flexGrow: 1,
  },
}));

interface Props {
  energy_cal: number;
  energy_kj: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
}

export const AggregationChips = ({
  energy_cal,
  energy_kj,
  proteins,
  carbohydrates,
  fats,
}: Props) => {
  const classes = useStyles();

  const macronutrientsInPersents = () => {
    const sum = carbohydrates + fats + proteins;
    return {
      proteins: ((proteins * 100) / sum)?.toFixed(2),
      carbohydrates: ((carbohydrates * 100) / sum)?.toFixed(2),
      fats: ((fats * 100) / sum)?.toFixed(2),
    };
  };

  return (
    <>
      <Chip
        label={`${energy_cal?.toFixed(2)} kcal | ${energy_kj?.toFixed(2)} kJ`}
        variant={"outlined"}
        size={"small"}
        color={"secondary"}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar>P</Avatar>}
        label={`${proteins?.toFixed(2)} | ${
          macronutrientsInPersents().proteins
        }%`}
        variant={"outlined"}
        size={"small"}
        color={"primary"}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar>C</Avatar>}
        label={`${carbohydrates?.toFixed(2)} | ${
          macronutrientsInPersents().carbohydrates
        }%`}
        variant={"outlined"}
        size={"small"}
        color={"primary"}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar>F</Avatar>}
        label={`${fats?.toFixed(2)} | ${macronutrientsInPersents().fats}%`}
        variant={"outlined"}
        size={"small"}
        color={"primary"}
        className={classes.chip}
      />
    </>
  );
};
