import React from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Chip,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMealsByDateQuery } from "src/graphql/generated/graphql";
import { ToastMessage } from "src/components/ToastMessage";
import {
  DeleteRounded,
  EditRounded,
  ExpandMoreRounded,
} from "@material-ui/icons";
import moment from "moment";
import { Trans } from "@lingui/react";
import { DayPanelHeader } from "./DayPanelHeader";
import { PanelSummary } from "./PanelSummary";
import { PanelDetailActions } from "./PanelDetailActions";
import { PanelDetailTable } from "./PanelDetailTable";

const useStyles = makeStyles((theme) => ({
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
  expansionPanelDetails: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
  },
}));

interface Props {
  date: string;
}

export const DayPanels = ({ date }: Props) => {
  const classes = useStyles();
  const { data, loading, error } = useMealsByDateQuery({
    variables: { _eq: date },
  });

  if (loading) {
    return <LinearProgress className={classes.progress} />;
  }

  if (error) {
    return <ToastMessage severity={"error"} children={error.message as any} />;
  }

  return (
    <div>
      <DayPanelHeader date={date} {...data?.meal_aggregate.aggregate?.sum} />
      {data?.meal_aggregate?.nodes.map((item, key) => (
        <ExpansionPanel key={key}>
          <PanelSummary
            name={item.name}
            time={item.time}
            {...item.meal_items_aggregate.aggregate?.sum}
          />
          <ExpansionPanelDetails className={classes.expansionPanelDetails}>
            <PanelDetailActions />
            <PanelDetailTable nodes={item?.meal_items_aggregate?.nodes} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};
