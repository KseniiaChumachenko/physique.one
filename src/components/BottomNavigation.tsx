import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";
import { Trans } from "@lingui/react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigation as MaterialBottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@material-ui/core";
import {
  DashboardRounded,
  FastfoodRounded,
  LocalGroceryStoreRounded,
  MenuBookRounded,
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    height: "8vh",
    width: "100%",
  },
});

export const BottomNavigation = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  return (
    <Paper elevation={2}>
      <MaterialBottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          history.push(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          value={"/"}
          label={<Trans>Summary</Trans>}
          icon={<DashboardRounded />}
        />
        <BottomNavigationAction
          value={`/ration/${moment().week()}`}
          label={<Trans>Meals</Trans>}
          icon={<FastfoodRounded />}
        />
        <BottomNavigationAction
          value={"/recipes"}
          label={<Trans>Recipes</Trans>}
          icon={<MenuBookRounded />}
        />
        <BottomNavigationAction
          value={"/foodLibrary"}
          label={<Trans>Food Library</Trans>}
          icon={<LocalGroceryStoreRounded />}
        />
      </MaterialBottomNavigation>
    </Paper>
  );
};
