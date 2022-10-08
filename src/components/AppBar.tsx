import React from "react";
import clsx from "clsx";
import {
  AppBar as MAppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { MenuOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "src/store";
import { DRAWER_WIDTH_OPEN, DRAWER_WIDTH_CLOSED } from "./DrawerNavigation";

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginLeft: DRAWER_WIDTH_CLOSED(theme),
    width: `calc(100% - ${DRAWER_WIDTH_CLOSED(theme)}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "100%",
    },
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH_OPEN,
    width: `calc(100% - ${DRAWER_WIDTH_OPEN}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "unset",
      marginRight: theme.spacing(2),
    },
  },
  spacer: {
    justifyContent: "space-between",
  },
}));

export const AppBar = () => {
  const {
    action,
    navigationOpen,
    handleToggleNavigation,
    pageName,
  } = useStore();
  const classes = useStyles();

  return (
    <MAppBar
      position="fixed"
      color={"default"}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: navigationOpen,
      })}
    >
      <Toolbar className={classes.spacer}>
        <Box display={"flex"} alignItems={"center"}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleNavigation}
            edge="start"
            className={classes.menuButton}
          >
            <MenuOutlined />
          </IconButton>
          <Typography variant={"h6"}>{pageName}</Typography>
        </Box>
        {/*
            Search and filters in future
          */}
        {action && (
          <Button
            onClick={action.onClick}
            variant={"contained"}
            color={"primary"}
          >
            {action.label}
          </Button>
        )}
      </Toolbar>
    </MAppBar>
  );
};
