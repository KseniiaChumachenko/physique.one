import { Trans } from "@lingui/macro";
import React from "react";
import {
  FastfoodRounded,
  LocalGroceryStoreRounded,
  MenuBookRounded,
} from "@material-ui/icons";

export const ROUTES = [
  {
    title: <Trans>Meals</Trans>,
    pathname: `/auth/ration`,
    icon: <FastfoodRounded />,
  },
  {
    title: <Trans>Recipes</Trans>,
    pathname: "/auth/recipes",
    icon: <MenuBookRounded />,
  },
  {
    title: <Trans>Food Library</Trans>,
    pathname: "/auth/foodLibrary",
    icon: <LocalGroceryStoreRounded />,
  },
];
