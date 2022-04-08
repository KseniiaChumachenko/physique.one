import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  ChevronLeftRounded,
  ChevronRightRounded,
  DirectionsRunRounded,
} from "@material-ui/icons";
import { Trans } from "@lingui/react";
import { useHistory, useLocation } from "react-router-dom";
import { useActiveUser } from "src/api-hooks/authorization";
import { useStore } from "../store";
import { ROUTES } from "../constants";

export const DRAWER_WIDTH_OPEN = 240;
export const DRAWER_WIDTH_CLOSED = (theme: Theme) => theme.spacing(7) + 1;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: DRAWER_WIDTH_OPEN,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: DRAWER_WIDTH_OPEN,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: DRAWER_WIDTH_CLOSED(theme),
    [theme.breakpoints.down("sm")]: {
      width: 0,
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },

  avatar: {
    marginRight: theme.spacing(4),
    width: 25,
    height: 25,
  },
}));

export const DrawerNavigation = observer(() => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();
  const {
    user,
    mutations: { resetUser },
  } = useActiveUser();

  const {
    screenStore: {
      navigationOpen,
      handleToggleNavigation,
      handleCloseNavigation,
    },
  } = useStore();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChangeRoute = useCallback(
    (newRoute: string) => () => {
      history.push(newRoute);
      handleCloseNavigation();
    },
    []
  );

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleRedirectToProfile = () => {
    handleMenuClose();
    handleChangeRoute("/profile")();
  };
  const handleLogOut = () => {
    resetUser();
    handleMenuClose();
    handleChangeRoute("/auth");
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleRedirectToProfile}>Profile</MenuItem>
      <MenuItem onClick={handleLogOut}>Log out</MenuItem>
    </Menu>
  );

  return (
    <Drawer
      variant="permanent"
      PaperProps={{ variant: "elevation", elevation: 1 }}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: navigationOpen,
        [classes.drawerClose]: !navigationOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: navigationOpen,
          [classes.drawerClose]: !navigationOpen,
        }),
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton
          children={<DirectionsRunRounded />}
          onClick={handleChangeRoute(ROUTES[0].pathname)}
        />
        <Typography variant={"h5"}>
          <Trans>Physique</Trans>
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={handleToggleNavigation}>
          <ListItemIcon
            children={
              navigationOpen ? <ChevronLeftRounded /> : <ChevronRightRounded />
            }
          />
        </ListItem>

        {ROUTES.map((r, i) => (
          <ListItem
            key={i}
            button
            onClick={handleChangeRoute(r.pathname)}
            selected={pathname.startsWith(r.pathname.slice(0, 3))}
          >
            <ListItemIcon children={r.icon} />
            <ListItemText primary={r.title} />
          </ListItem>
        ))}

        <Divider />

        {user && (
          <ListItem button onClick={handleProfileMenuOpen}>
            <Avatar
              src={user.fb_picture_url || ""}
              children={user.first_name?.toString().slice(0, 1)}
              className={classes.avatar}
              variant={"rounded"}
            />
            <ListItemText primary={user.first_name} />
          </ListItem>
        )}
        {renderMenu}

        {/*<BottomNavigationAction*/}
        {/*  value={"/"}*/}
        {/*  label={<Trans>Summary</Trans>}*/}
        {/*  icon={<DashboardRounded />}*/}
        {/*/>*/}

        {/*<BottomNavigationAction*/}
        {/*  value={"/pantry"}*/}
        {/*  label={<Trans>Pantry</Trans>}*/}
        {/*  icon={<KitchenRounded />}*/}
        {/*/>*/}
      </List>
    </Drawer>
  );
});
