import React from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "src/components/AppBar";
import { DrawerNavigation } from "src/components/DrawerNavigation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    marginTop: theme.spacing(8),
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#f5f5f5", // TODO: add to palette
  },
}));

export const AppLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <DrawerNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};
