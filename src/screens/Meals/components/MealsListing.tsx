import React from "react";
import {DayPanels} from "./DayPanels";

interface Props {
  days: string[];
}

export const MealsListing = ({ days }: Props) => {
  return (
    <React.Fragment>
      {days.map((day, key) => (
        <DayPanels key={key} date={day} />
      ))}
    </React.Fragment>
  );
};
