import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { BottomNavigation } from "./BottomNavigation";
import { makeStyles } from "@material-ui/core/styles";
import { Summary } from "../screens/Summary";
import { Meals } from "../screens/Meals";
import { FoodLibrary } from "../screens/FoodLibrary";
import { Recipes } from "../screens/Recipes";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    overflow: "hidden",
  },
  childrenContainer: {
    height: "92vh", // & bottom navigation height 5vh
    overflow: "scroll",
  },
  childrenPadding: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const Router = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <main className={classes.root}>
        <div className={classes.childrenContainer}>
          <div className={classes.childrenPadding}>
            <Route path={"/"} component={Summary} exact /> {/* aka 'Summary'*/}
            <Route path={"/ration/:weekNumber"} component={Meals} exact />
            <Route path={"/foodLibrary"} component={FoodLibrary} exact />
            <Route path={"/recipes"} component={Recipes} exact />
          </div>
        </div>
        <BottomNavigation />
      </main>
    </BrowserRouter>
  );
};
