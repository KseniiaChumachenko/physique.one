import React from "react";
import { ErrorBoundary } from "src/components/ErrorBoundary";
import { DayPanels } from "./DayPanels";

interface Props {
  days: string[];
}

export const MealsListing = ({ days }: Props) => {
  return (
    <ErrorBoundary>
      <React.Fragment>
        {days.map((day, key) => (
          <DayPanels key={key} date={day} />
        ))}
      </React.Fragment>
    </ErrorBoundary>
  );
};
