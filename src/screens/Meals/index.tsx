import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import { Trans } from "@lingui/macro";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import {
  NativeSelect,
  Typography,
  InputBase,
  FormControl,
} from "@material-ui/core";
import { MealsListing } from "./components/MealsListing";

const NUMBER_OF_WEEKS_IN_YEAR = 52;

const useStyles = makeStyles((theme) => ({
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
  yearSelector: {
    minWidth: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
}));

export const Meals = () => {
  const history = useHistory();
  const classes = useStyles();
  const { weekNumber, year } = useParams<{
    weekNumber: string;
    year: string;
  }>();
  const [currentYear, setCurrentYear] = useState(year || moment().year());

  if (!weekNumber || !year) {
    history.push(
      `/ration/${weekNumber || moment().week()}/${year || moment().year()}`
    );
  }

  const days = [0, 1, 2, 3, 4, 5, 6].map((d) =>
    moment(`${currentYear}-${weekNumber}-` + d, "YYYY-w-e").format()
  );

  const yearOptions = [
    moment().year() - 2,
    moment().year() - 1,
    moment().year(),
    moment().year() + 1,
    moment().year() + 2,
  ];

  const handlePaginationClick = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => history.push(`/ration/${page}/${currentYear}`);

  const handleChangeYear = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentYear(event.target.value as number);
    history.push(`/ration/${weekNumber}/${event.target.value}`);
  };

  return (
    <div>
      <div className={classes.paginationContainer}>
        <Typography variant={"subtitle1"}>
          <Trans>Select week: </Trans>
        </Typography>
        <Pagination
          count={NUMBER_OF_WEEKS_IN_YEAR}
          page={Number(weekNumber)}
          onChange={handlePaginationClick}
          variant="outlined"
          shape={"rounded"}
          color={"primary"}
        />
        <FormControl className={classes.yearSelector}>
          <NativeSelect
            value={currentYear}
            onChange={handleChangeYear}
            input={<InputBase />}
          >
            {yearOptions.map((y, i) => (
              <option value={y} key={i}>
                {y}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
      <MealsListing days={days} />
    </div>
  );
};
