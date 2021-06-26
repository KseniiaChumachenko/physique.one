import React from "react";
import { ExpansionPanel, ExpansionPanelDetails } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Meal_Item,
  useMealsByDateSubscription,
} from "src/graphql/generated/graphql";
import { ToastMessage } from "src/components/ToastMessage";
import { useStore } from "src/store";
import { DayPanelHeader } from "./DayPanelHeader";
import { PanelSummary } from "./PanelSummary";
import { PanelDetailTable } from "./PanelDetailTable";

const useStyles = makeStyles((theme) => ({
  parentExpPanel: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    boxShadow: "none",
  },
  parentExpPanelDetails: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
  },
  childExpPanel: {
    "&$expanded": {
      margin: `${theme.spacing(1)}px 0`,
    },
  },
  expanded: {},
  progress: {
    display: "flex",
    margin: "50% 0",
  },
  header: {
    display: "flex",
  },
  chip: {
    marginLeft: theme.spacing(1),
  },
  panelHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  buttonGroup: {
    alignSelf: "flex-end",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
}));

interface Props {
  date: string;
}

export const DayPanels = ({ date }: Props) => {
  const classes = useStyles();
  const {
    userStore: { user },
  } = useStore();
  const { data, error } = useMealsByDateSubscription({
    variables: { date, u_id: user?.id },
  });

  if (error) {
    return <ToastMessage severity={"error"} children={error.message as any} />;
  }

  return (
    <ExpansionPanel className={classes.parentExpPanel} key={date + "Header"}>
      <DayPanelHeader date={date} />
      <ExpansionPanelDetails
        className={classes.parentExpPanelDetails}
        key={date + "panelDetail"}
      >
        {data?.meal.map((item, key) => (
          <ExpansionPanel
            key={key}
            defaultExpanded={true}
            classes={{
              root: classes.childExpPanel,
              expanded: classes.expanded,
            }}
          >
            <PanelSummary
              id={item.id}
              name={item.name}
              time={item.time}
              key={key}
            />
            <ExpansionPanelDetails className={classes.parentExpPanelDetails}>
              <PanelDetailTable meal_items={item?.meal_items as Meal_Item[]} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
