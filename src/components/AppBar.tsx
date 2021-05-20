import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar as MAppBar,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  Menu,
} from "@material-ui/core";
import { Trans } from "@lingui/react";
import { AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useLogOut } from "../screens/context/userContext";

const useStyles = makeStyles({
  userIcon: {
    marginLeft: "auto",
  },
});

export const AppBar = () => {
  const { user, logout } = useLogOut();
  const history = useHistory();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRedirectToProfile = () => history.push("/profile");

  const handleLogOut = () => {
    logout();
    handleMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleRedirectToProfile}>Profile</MenuItem>
      <MenuItem onClick={handleLogOut}>Log out</MenuItem>
    </Menu>
  );

  return (
    <>
      <MAppBar position={"sticky"}>
        <Toolbar>
          <Typography variant={"h6"}>
            <Trans>ONE | Physique</Trans>
          </Typography>
          {user && (
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.userIcon}
            >
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </MAppBar>
      {renderMenu}
    </>
  );
};
