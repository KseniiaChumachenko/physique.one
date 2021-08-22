import { Trans } from "@lingui/react";
import React from "react";
import moment from "moment";
import {
  FastfoodRounded,
  LocalGroceryStoreRounded,
  MenuBookRounded,
} from "@material-ui/icons";

export const ROUTES = [
  {
    title: <Trans>Meals</Trans>,
    pathname: `/ration/${moment().week()}`,
    icon: <FastfoodRounded />,
  },
  {
    title: <Trans>Recipes</Trans>,
    pathname: "/recipes",
    icon: <MenuBookRounded />,
  },
  {
    title: <Trans>Food Library</Trans>,
    pathname: "/foodLibrary",
    icon: <LocalGroceryStoreRounded />,
  },
];
