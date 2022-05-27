import React from "react";
import { Nullable } from "src/types";
import { Avatar, Chip } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import {
  AggregationChips as AggregationChipsBase,
  Props as ComponentProps,
  useStyles,
} from "./AggregationChips";

export type Props = Partial<Nullable<ComponentProps>>;

export const AggregationChips = (p: Props) => {
  const classes = useStyles();

  if (!p?.energy_cal) {
    return (
      <>
        <Chip
          label={
            <>
              <Skeleton variant="text" /> kcal |<Skeleton variant="text" /> kJ
            </>
          }
          variant={"outlined"}
          size={"small"}
          className={classes.chip}
        />
        <Chip
          avatar={<Avatar>P</Avatar>}
          label={<Skeleton variant="text" />}
          variant={"outlined"}
          size={"small"}
          className={classes.chip}
        />
        <Chip
          avatar={<Avatar>C</Avatar>}
          label={<Skeleton variant="text" />}
          variant={"outlined"}
          size={"small"}
          className={classes.chip}
        />
        <Chip
          avatar={<Avatar>F</Avatar>}
          label={<Skeleton variant="text" />}
          variant={"outlined"}
          size={"small"}
          className={classes.chip}
        />
      </>
    );
  }

  return (
    <AggregationChipsBase
      energy_cal={p.energy_cal!}
      energy_kj={p.energy_kj!}
      proteins={p.proteins!}
      carbohydrates={p.carbohydrates!}
      fats={p.fats!}
    />
  );
};
