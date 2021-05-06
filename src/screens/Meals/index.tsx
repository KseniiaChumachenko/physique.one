import React, { useMemo } from "react";
import moment from "moment";
import { Trans } from "@lingui/react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import { Typography } from "@material-ui/core";

import { MealsListing } from "./components/MealsListing";
import { useParams, useHistory } from "react-router-dom";

const NUMBER_OF_WEEKS_IN_YEAR = 52;

interface Props {}
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

export const Meals = ({}: Props) => {
  const classes = useStyles();
  const { weekNumber } = useParams();
  const history = useHistory();

  const currentYear = moment().year();

  const days = useMemo(
    () =>
      [0, 1, 2, 3, 4, 5, 6].map((d) =>
        moment(
          `${currentYear}-${weekNumber || moment().week()}-` + d,
          "YYYY-w-e"
        ).format()
      ),
    [currentYear, weekNumber]
  );

  const handlePaginationClick = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => history.push(`/ration/${page}`);

  return (
    <div className={classes.root}>
      {weekNumber && (
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
      )}
      {days && <MealsListing days={days} />}
    </div>
  );
};
