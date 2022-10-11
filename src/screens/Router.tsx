import React from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {CircularProgress} from "@material-ui/core";
import {ErrorBoundary} from "../components/ErrorBoundary";
import {RequireAuth} from "../components/RequireAuth";
import {AppLayout} from "./components/AppLayout";
import {Meals} from "./Meals";
import {FoodLibrary} from "./FoodLibrary";
import {Recipes} from "./Recipes";
import {Authorization} from "./Authorization";
import {PrivacyPolicy} from "./PrivacyPolicy";
import {Profile} from "./Profile";
import {NoMatch} from "./NoMatch";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Authorization />,
  },
  {
    path: "/privacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "auth",
    element: (
      <RequireAuth>
        <AppLayout />
      </RequireAuth>
    ),
    errorElement: <ErrorBoundary/>,
    children: [
      {
        path: "ration",
        element: (
          <RequireAuth>
            <Meals />
          </RequireAuth>
        ),
      },
      {
        path: "foodLibrary",
        element: (
          <RequireAuth>
            <FoodLibrary />
          </RequireAuth>
        ),
      },
      {
        path: "recipes",
        element: (
          <RequireAuth>
            <Recipes />
          </RequireAuth>
        ),
      },
      {
        path: "profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);

export const Router = () => {
  return (
    <RouterProvider router={router} fallbackElement={<CircularProgress />} />
  );
};
