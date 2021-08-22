import React from "react";
import { NIL } from "uuid";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "src/components/AppBar";
import { Box, CssBaseline } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import { DrawerNavigation } from "../components/DrawerNavigation";
import { Meals } from "./Meals";
import { FoodLibrary } from "./FoodLibrary";
import { Recipes } from "./Recipes";
import { Authorization } from "./Authorization";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { Profile } from "./Profile";
// import { Pantry } from "./Pantry";

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
}));

export const Router = observer(() => {
  const classes = useStyles();
  const {
    userStore: { user },
  } = useStore();

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
              <div>
                {/*<Route path={"/"} component={Summary} exact />*/}
                <Route path={"/"} component={Meals} exact />
                <Route path={"/ration/:weekNumber"} component={Meals} exact />
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
