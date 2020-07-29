import React, {useMemo, useState} from "react";
import moment from "moment";
import {Trans} from "@lingui/react";
import {makeStyles} from "@material-ui/core/styles";
import {Pagination} from "@material-ui/lab";
import {Typography} from "@material-ui/core";

import {MealsListing} from "./components/MealsListing";

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

  const [selectedWeek, setSelectedWeek] = useState<number>(moment().week()); // current week of the year

  const currentYear = moment().year();

  const days = useMemo(
    () =>
      [0, 1, 2, 3, 4, 5, 6].map((d) =>
        moment(`${currentYear}-${selectedWeek}-` + d, "YYYY-w-e").format()
      ),
    [currentYear, selectedWeek]
  );

  const handlePaginationClick = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => setSelectedWeek(page);

  return (
    <div className={classes.root}>
      {selectedWeek && (
        <div className={classes.paginationContainer}>
          <Typography variant={"subtitle1"}>
            <Trans>Select week of the year: </Trans>
          </Typography>
          <Pagination
            count={NUMBER_OF_WEEKS_IN_YEAR}
            defaultPage={selectedWeek}
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
