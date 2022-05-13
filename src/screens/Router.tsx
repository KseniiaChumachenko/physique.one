import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth } from "../components/RequireAuth";
import { AppLayout } from "./components/AppLayout";
import { Meals } from "./Meals";
import { FoodLibrary } from "./FoodLibrary";
import { Recipes } from "./Recipes";
import { Authorization } from "./Authorization";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { Profile } from "./Profile";
import { NoMatch } from "./NoMatch";
// import { Pantry } from "./Pantry";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Authorization />} />
        <Route path={"/privacyPolicy"} element={<PrivacyPolicy />} />
        <Route
          path={"/auth"}
          element={
            <RequireAuth>
              <AppLayout />
            </RequireAuth>
          }
        >
          <Route
            path={"ration"}
            element={
              <RequireAuth>
                <Meals />
              </RequireAuth>
            }
          />
          <Route
            path={"foodLibrary"}
            element={
              <RequireAuth>
                <FoodLibrary />
              </RequireAuth>
            }
          />
          <Route
            path={"recipes"}
            element={
              <RequireAuth>
                <Recipes />
              </RequireAuth>
            }
          />
          <Route
            path={"profile"}
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          {/*<PrivateRoute path={"/pantry"} children={<Pantry/>} exact />*/}
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
// kseniia.chumachenko@gmail.com
