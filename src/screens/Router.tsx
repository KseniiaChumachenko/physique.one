import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "src/components/AppBar";
import {
  Box,
  CssBaseline,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { DrawerNavigation } from "../components/DrawerNavigation";
import { useActiveUser } from "../api-hooks/authorization";
import { PrivateRoute } from "../components/PrivateRoute";
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
  backdrop: {
    zIndex: theme.zIndex.drawer - 1,
    color: "#fff", // TODO: add to palette
  },
}));

export const Router = () => {
  const classes = useStyles();

  const { user } = useActiveUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/auth"} children={Authorization} exact />
        <Route path={"/privacyPolicy"} children={PrivacyPolicy} exact />
        <Box
          style={{ visibility: user ? "visible" : "hidden" }}
          sx={{ display: "flex" }}
        >
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
              <div>
                {/*<Route path={"/"} component={Summary} exact />*/}
                <PrivateRoute
                  path={["/", "/ration/:weekNumber/:year"]}
                  children={<Meals />}
                  exact
                />
                <PrivateRoute
                  path={"/foodLibrary"}
                  children={<FoodLibrary />}
                  exact
                />
                <PrivateRoute path={"/recipes"} children={<Recipes />} exact />
                <PrivateRoute path={"/profile"} children={<Profile />} exact />
                {/*<PrivateRoute path={"/pantry"} children={<Pantry/>} exact />*/}
              </div>
            </main>
          </Suspense>
        </Box>
      </Routes>
    </BrowserRouter>
  );
};
// kseniia.chumachenko@gmail.com
