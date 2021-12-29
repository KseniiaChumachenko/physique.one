import React from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import { Trans } from "@lingui/react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import { Typography } from "@material-ui/core";
import { MealsListing } from "./components/MealsListing";

const NUMBER_OF_WEEKS_IN_YEAR = 52;

const useStyles = makeStyles((theme) => ({
  root: {},
  paginationContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  paginationTitle: {
    marginRight: theme.spacing(1),
  },
}));

export const Meals = () => {
  const classes = useStyles();
  const { weekNumber } = useParams<{ weekNumber: string }>();
  const history = useHistory();

  if (!weekNumber) {
    history.push(`/ration/${moment().week()}`);
  }

  const currentYear = moment().year();

  const days = [0, 1, 2, 3, 4, 5, 6].map((d) =>
    moment(`${currentYear}-${weekNumber}-` + d, "YYYY-w-e").format()
  );

  const handlePaginationClick = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => history.push(`/ration/${page}`);

  return (
    <div className={classes.root}>
      <div className={classes.paginationContainer}>
        <Typography variant={"subtitle1"}>
          <Trans>Select week of the year: </Trans>
        </Typography>
        <Pagination
          count={NUMBER_OF_WEEKS_IN_YEAR}
          page={Number(weekNumber)}
          onChange={handlePaginationClick}
          variant="outlined"
          color={"primary"}
        />
      </div>
      <MealsListing days={days} />
    </div>
  );
};
