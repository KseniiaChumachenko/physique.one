import React, { ReactNode } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { BottomNavigation } from "./BottomNavigation";
import { makeStyles } from "@material-ui/core/styles";
import { Summary } from "../screens/Summary";
import { Ration } from "../screens/Ration";
import { Meals } from "../screens/Ration/components/Meals";
import { FoodLibrary } from "../screens/Ration/components/FoodLibrary";

const useStyles = makeStyles((theme) => ({
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
            <Route path={"/ration"} component={Ration} exact />
          </div>
        </div>
        <BottomNavigation />
      </main>
    </BrowserRouter>
  );
};
