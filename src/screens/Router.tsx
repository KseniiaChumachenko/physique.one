import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { BottomNavigation } from "../components/BottomNavigation";
import { makeStyles } from "@material-ui/core/styles";
import { Summary } from "./Summary";
import { Meals } from "./Meals";
import { FoodLibrary } from "./FoodLibrary";
import { Recipes } from "./Recipes";
import { Login } from "./Login";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { useUser } from "./context/userContext";
import { Profile } from "./Profile";
import { AppBar } from "src/components/AppBar";

const useStyles = makeStyles(() => ({
  childrenContainer: {
    minHeight: "85.5vh",
    overflow: "auto",
    backgroundColor: "#f5f5f5", // TODO: add to palette
  },
  childrenPadding: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const Router = () => {
  const classes = useStyles();
  const { user } = useUser();

  // TODO: fix redirects fo privacyPolicy
  return (
    <BrowserRouter>
      <AppBar />
      {/* Public routes*/}
      <Route path={"/login"} component={Login} exact />
      <Route path={"/privacyPolicy"} component={PrivacyPolicy} exact />
      {!user ? <Redirect to={"/login"} /> : <Redirect to={"/"} />}
      {/* Private routes*/}
      {user && (
        <>
          <main className={classes.childrenContainer}>
            <div className={classes.childrenPadding}>
              <Route path={"/"} component={Summary} exact />
              <Route path={"/ration/:weekNumber"} component={Meals} exact />
              <Route path={"/foodLibrary"} component={FoodLibrary} exact />
              <Route path={"/recipes"} component={Recipes} exact />
              <Route path={"/profile"} component={Profile} exact />
            </div>
          </main>
          <BottomNavigation />
        </>
      )}
    </BrowserRouter>
  );
};
