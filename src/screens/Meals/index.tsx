import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import moment from "moment";
import { t, Trans } from "@lingui/macro";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import {
  NativeSelect,
  Typography,
  InputBase,
  FormControl,
} from "@material-ui/core";
import { MealsListing } from "./components/MealsListing";
import { useStore } from "../../store";

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
  const history = useNavigate();
  const classes = useStyles();
  const { handlePageName } = useStore();
  const [searchParams] = useSearchParams();
  const week = searchParams.get("week");
  const year = searchParams.get("year");

  useEffect(() => {
    if (!week || !year) {
      history(`/auth/ration?week=${moment().week()}&year=${moment().year()}`);
    }
  }, [year, week]);

  const days = [0, 1, 2, 3, 4, 5, 6].map((d) =>
    moment(`${year}-${week}-` + d, "YYYY-w-e").format()
  ); // parse and get URLSearchParams from search

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
  ) => history(`/auth/ration?week=${page}&year=${year}`);

  const handleChangeYear = (event: React.ChangeEvent<{ value: unknown }>) => {
    history(`/auth/ration?week=${week}&year=${event.target.value}`);
  };

  handlePageName(t`Meals`);

  return (
    <div>
      <div className={classes.paginationContainer}>
        <Typography variant={"subtitle1"}>
          <Trans>Select week: </Trans>
        </Typography>
        <Pagination
          count={NUMBER_OF_WEEKS_IN_YEAR}
          page={Number(week)}
          onChange={handlePaginationClick}
          variant="outlined"
          shape={"rounded"}
          color={"primary"}
        />
        <FormControl className={classes.yearSelector}>
          <NativeSelect
            value={year}
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
