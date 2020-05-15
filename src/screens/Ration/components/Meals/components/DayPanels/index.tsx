import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMealsByDateQuery } from "src/graphql/generated/graphql";
import { ToastMessage } from "src/components/ToastMessage";
import { DayPanelHeader } from "./DayPanelHeader";
import { PanelSummary } from "./PanelSummary";
import { PanelDetailActions } from "./PanelDetailActions";
import { PanelDetailTable } from "./PanelDetailTable";
import { AddMealDialog } from "../../../AddMealDialog";

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
  const { data, loading, error, refetch } = useMealsByDateQuery({
    variables: { _eq: date },
  });

  if (loading) {
    return <LinearProgress className={classes.progress} />;
  }

  if (error) {
    return <ToastMessage severity={"error"} children={error.message as any} />;
  }

  return (
    <ExpansionPanel className={classes.parentExpPanel}>
      <DayPanelHeader
        date={date}
        refetchPanel={refetch}
        {...data?.meal_aggregate.aggregate?.sum}
      />
      <ExpansionPanelDetails className={classes.parentExpPanelDetails}>
        {data?.meal_aggregate?.nodes.map((item, key) => (
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
              {...item.meal_items_aggregate.aggregate?.sum}
              refetchPanel={refetch}
            />
            <ExpansionPanelDetails className={classes.parentExpPanelDetails}>
              <PanelDetailTable nodes={item?.meal_items_aggregate?.nodes} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
