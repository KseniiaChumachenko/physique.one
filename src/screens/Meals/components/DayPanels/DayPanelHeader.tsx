import React, { useState } from "react";
import moment from "moment";
import {
  AccordionSummary,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@material-ui/core";
import {
  AddRounded,
  ExpandMoreRounded,
  FileCopyRounded,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Trans } from "@lingui/react";
import { Alert } from "@material-ui/lab";
import {
  AddMealMutationVariables,
  MealsByDatePreloadedHookProps,
  useMealsPreloadedQuery,
} from "src/api-hooks/mealsByDate";
import { AddMealDialog } from "../../../components/AddMealDialog";
import { AggregationChips } from "../../../../components/AggredationChips";
import { CopyDayDialog } from "../../../components/CopyDayDialog";

const useStyles = makeStyles((theme) => ({
  content: {
    margin: 0,
    "&$expanded": {
      margin: 0,
    },
  },
  expanded: {},
  chip: {
    marginLeft: theme.spacing(1),
  },
}));

interface Props extends MealsByDatePreloadedHookProps {
  date: string;
}

export const DayPanelHeader = ({ date, queryReference }: Props) => {
  const classes = useStyles();
  const {
    data,
    mutations: { add },
  } = useMealsPreloadedQuery(queryReference);

  const [error, setOpenErrorMessage] = React.useState<Error | boolean>(false);
  const [success, setOpenSuccessMessage] = React.useState(false);
  const [openAddDialog, setOpenAddMealDialog] = useState(false);
  const [openCopyDayDialog, setOpenCopyDayDialog] = useState(false);

  const handleOpenAddMealDialog = () => setOpenAddMealDialog(true);
  const handleOpenCopyDayDialog = () => setOpenCopyDayDialog(true);

  const handleConfirm = (variables: AddMealMutationVariables) => (
    event: any
  ) => {
    add({
      variables,
      onCompleted: () => {
        setOpenAddMealDialog(false);
        setOpenSuccessMessage(true);
      },
      onError: (error) => setOpenErrorMessage(error),
    });
    event.stopPropagation();
  };

  const macronutrients =
    data.meal_connection.edges.length > 0
      ? data?.meal_connection.edges
          .map((e) => e?.node?.meal_items_aggregate?.aggregate?.sum)
          ?.reduce((p, c) => {
            return {
              energy_cal: (p?.["energy_cal"] || 0) + (c?.["energy_cal"] || 0),
              energy_kj: (p?.["energy_kj"] || 0) + (c?.["energy_kj"] || 0),
              fats: (p?.["fats"] || 0) + (c?.["fats"] || 0),
              proteins: (p?.["proteins"] || 0) + (c?.["proteins"] || 0),
              carbohydrates:
                (p?.["carbohydrates"] || 0) + (c?.["carbohydrates"] || 0),
            };
          })
      : {
          energy_cal: 0,
          energy_kj: 0,
          fats: 0,
          proteins: 0,
          carbohydrates: 0,
        };

  return (
    <React.Fragment>
      {data && (
        <AccordionSummary
          classes={{ content: classes.content, expanded: classes.expanded }}
          expandIcon={<ExpandMoreRounded />}
        >
          <Grid container spacing={1} alignItems={"center"}>
            <Grid item xs={4} md={2} alignItems={"center"}>
              <Typography variant={"subtitle1"} color={"textSecondary"}>
                {moment(date).format("dd (DD/MM/YYYY)")}
              </Typography>
            </Grid>
            <Grid item xs alignItems={"center"}>
              {macronutrients?.energy_kj ? (
                <AggregationChips
                  energy_cal={macronutrients.energy_cal || 0}
                  energy_kj={macronutrients.energy_kj || 0}
                  proteins={macronutrients.proteins || 0}
                  carbohydrates={macronutrients.carbohydrates || 0}
                  fats={macronutrients.fats || 0}
                />
              ) : null}
            </Grid>
            <Grid item xs={2} md={1} alignItems={"center"}>
              <IconButton
                children={<AddRounded />}
                onClick={(event) => {
                  handleOpenAddMealDialog();
                  event.stopPropagation();
                }}
              />
            </Grid>
            {macronutrients?.energy_kj ? (
              <Grid item xs={2} md={1} alignItems={"center"}>
                <IconButton
                  children={<FileCopyRounded />}
                  onClick={(event) => {
                    handleOpenCopyDayDialog();
                    event.stopPropagation();
                  }}
                />
              </Grid>
            ) : null}
          </Grid>

          <AddMealDialog
            open={openAddDialog}
            setOpen={setOpenAddMealDialog}
            date={date}
            onConfirm={handleConfirm}
          />

          <CopyDayDialog
            date={date}
            open={openCopyDayDialog}
            setOpen={setOpenCopyDayDialog}
          />
        </AccordionSummary>
      )}

      {/*  Toasts  */}
      {success && (
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setOpenSuccessMessage(false)}
        >
          <Alert
            severity={"success"}
            onClose={() => setOpenSuccessMessage(false)}
          >
            <Trans>Meals successfully updated</Trans>
          </Alert>
        </Snackbar>
      )}
      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setOpenErrorMessage(false)}
        >
          <Alert severity={"error"} onClose={() => setOpenErrorMessage(false)}>
            {error instanceof Error ? error.message : ("Error" as any)}
          </Alert>
        </Snackbar>
      )}
    </React.Fragment>
  );
};
