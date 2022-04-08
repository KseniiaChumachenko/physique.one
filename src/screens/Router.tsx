import React from "react";
import { NIL } from "uuid";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "src/components/AppBar";
import {
  Box,
  CssBaseline,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import { DrawerNavigation } from "../components/DrawerNavigation";
import { useActiveUser } from "../api-hooks/authorization";

const Authorization = React.lazy(() =>
  import("./Authorization").then((module) => ({
    default: module.Authorization,
  }))
);
const PrivacyPolicy = React.lazy(() =>
  import("./PrivacyPolicy").then((module) => ({
    default: module.PrivacyPolicy,
  }))
);
const Meals = React.lazy(() =>
  import("./Meals").then((module) => ({ default: module.Meals }))
);
const FoodLibrary = React.lazy(() =>
  import("./FoodLibrary").then((module) => ({ default: module.FoodLibrary }))
);
const Recipes = React.lazy(() =>
  import("./Recipes").then((module) => ({ default: module.Recipes }))
);
const Profile = React.lazy(() =>
  import("./Profile").then((module) => ({ default: module.Profile }))
);
// const Pantry = React.lazy(() => import("./Pantry").then((module) => ({default: module.Pantry})));

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

export const Router = observer(() => {
  const classes = useStyles();
  const {
    screenStore: { loading },
  } = useStore();

  const { user } = useActiveUser();

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/auth"} component={Authorization} exact />
        <Route path={"/privacyPolicy"} component={PrivacyPolicy} exact />
        {user?.id !== NIL ? (
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar />
            <DrawerNavigation />
            <main className={classes.content}>
              <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
              </Backdrop>
              <div>
                {/*<Route path={"/"} component={Summary} exact />*/}
                <Route path={"/"} component={Meals} exact />
                <Route
                  path={"/ration/:weekNumber/:year"}
                  component={Meals}
                  exact
                />
                <Route path={"/foodLibrary"} component={FoodLibrary} exact />
                <Route path={"/recipes"} component={Recipes} exact />
                <Route path={"/profile"} component={Profile} exact />
                {/*<Route path={"/pantry"} component={Pantry} exact />*/}
              </div>
            </main>
          </Box>
        ) : (
          <Redirect to={"/auth"} />
        )}
      </Switch>
    </BrowserRouter>
  );
});
