import { t } from "@lingui/macro";
import React from "react";
import {
  FastfoodRounded,
  LocalGroceryStoreRounded,
  MenuBookRounded,
} from "@material-ui/icons";

export const ROUTES = [
  {
    title: t`Meals`,
    pathname: `/auth/ration`,
    icon: <FastfoodRounded />,
  },
  {
    title: t`Recipes`,
    pathname: "/auth/recipes",
    icon: <MenuBookRounded />,
  },
  {
    title: t`Food Library`,
    pathname: "/auth/foodLibrary",
    icon: <LocalGroceryStoreRounded />,
  },
];
