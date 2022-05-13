import React, { Suspense } from "react";
import {
  Backdrop,
  Box,
  CircularProgress,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "src/components/AppBar";
import { DrawerNavigation } from "src/components/DrawerNavigation";
import { Outlet } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(8),
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#f5f5f5", // TODO: add to palette
  },
  backdrop: {
    zIndex: theme.zIndex.drawer - 1,
    color: "#fff", // TODO: add to palette
  },
}));

export const AppLayout = () => {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar />
      <DrawerNavigation />
      <Suspense
        fallback={
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <main className={classes.content}>
          <Outlet />
        </main>
      </Suspense>
    </Box>
  );
};
