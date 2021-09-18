import React from "react";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import {
  AppBar as MAppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { MenuOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "src/store";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../constants";
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

export const AppBar = observer(() => {
  const {
    screenStore: { action, navigationOpen, handleToggleNavigation },
  } = useStore();
  const classes = useStyles();
  const { pathname } = useLocation();

  const routeInfo = ROUTES.find((r) =>
    r.pathname.startsWith(pathname.slice(0, 3))
  );

  return (
    <MAppBar
      position="fixed"
      color={"default"}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: navigationOpen,
      })}
    >
      <Toolbar className={classes.spacer}>
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleNavigation}
            edge="start"
            className={classes.menuButton}
          >
            <MenuOutlined />
          </IconButton>

          {!!routeInfo && (
            <Typography variant={"h6"}>{routeInfo.title}</Typography>
          )}
        </div>
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
});
