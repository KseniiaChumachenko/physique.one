import React from "react";
import { DayPanels } from "./DayPanels";

interface Props {
  days: string[];
}

export const MealsListing = ({ days }: Props) => {
  return (
    <>
      {days.map((day, key) => (
        <DayPanels key={key} date={day} />
      ))}
    </>
  );
};
