import React, { useState } from "react";
import {
  Avatar,
  Chip,
  ExpansionPanelSummary,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { AddRounded, ExpandMoreRounded } from "@material-ui/icons";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import {
  AddMealMutationVariables,
  Meal_Sum_Fields,
  useAddMealMutation,
} from "src/graphql/generated/graphql";
import { AddMealDialog } from "../../../AddMealDialog";
import { Trans } from "@lingui/react";
import { ApolloError } from "@apollo/client";
import { Alert } from "@material-ui/lab";

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

interface Props extends Meal_Sum_Fields {
  date: string;
  refetchPanel: any;
}

export const DayPanelHeader = ({
  date,
  energy_cal,
  energy_kj,
  carbohydrates,
  fats,
  proteins,
  refetchPanel,
}: Props) => {
  const classes = useStyles();
  const [error, setOpenErrorMessage] = React.useState<ApolloError | boolean>(
    false
  );
  const [success, setOpenSuccessMessage] = React.useState(false);
  const [openAddDialog, setOpenAddMealDialog] = useState(false);
  const [insert_meal_one] = useAddMealMutation({
    onCompleted: () => {
      refetchPanel();
      setOpenAddMealDialog(false);
    },
    onError: (error) => setOpenErrorMessage(error),
  });

  const handleOpenAddMealDialog = () => setOpenAddMealDialog(true);

  const handleConfirm = (variables: AddMealMutationVariables) => () =>
    insert_meal_one({ variables });

  const macronutrientsInPersents = () => {
    const sum = carbohydrates + fats + proteins;
    return {
      proteins: ((proteins * 100) / sum)?.toFixed(2),
      carbohydrates: ((carbohydrates * 100) / sum)?.toFixed(2),
      fats: ((fats * 100) / sum)?.toFixed(2),
    };
  };

  return (
    <>
      <ExpansionPanelSummary
        classes={{ content: classes.content, expanded: classes.expanded }}
        expandIcon={<ExpandMoreRounded />}
      >
        <Grid container spacing={3} alignItems={"center"}>
          <Grid item xs alignItems={"center"}>
            <Typography variant={"subtitle1"} color={"textSecondary"}>
              {moment(date).format("dd (DD/MM/YYYY)")}
            </Typography>
          </Grid>
          <Grid item xs={9} alignItems={"center"}>
            {energy_cal && (
              <Chip
                label={`${energy_cal?.toFixed(2)} kcal | ${energy_kj?.toFixed(
                  2
                )} kJ`}
                variant={"outlined"}
                size={"small"}
                color={"secondary"}
                className={classes.chip}
              />
            )}
            {proteins && (
              <Chip
                avatar={<Avatar>P</Avatar>}
                label={`${proteins?.toFixed(2)} | ${
                  macronutrientsInPersents().proteins
                }%`}
                variant={"outlined"}
                size={"small"}
                color={"primary"}
                className={classes.chip}
              />
            )}
            {carbohydrates && (
              <Chip
                avatar={<Avatar>C</Avatar>}
                label={`${carbohydrates?.toFixed(2)} | ${
                  macronutrientsInPersents().carbohydrates
                }%`}
                variant={"outlined"}
                size={"small"}
                color={"primary"}
                className={classes.chip}
              />
            )}
            {fats && (
              <Chip
                avatar={<Avatar>F</Avatar>}
                label={`${fats?.toFixed(2)} | ${
                  macronutrientsInPersents().fats
                }%`}
                variant={"outlined"}
                size={"small"}
                color={"primary"}
                className={classes.chip}
              />
            )}
          </Grid>
          <Grid item xs={1} alignItems={"center"}>
            <IconButton
              children={<AddRounded />}
              onClick={handleOpenAddMealDialog}
            />
          </Grid>
        </Grid>
        <AddMealDialog
          open={openAddDialog}
          setOpen={setOpenAddMealDialog}
          date={date}
          onConfirm={handleConfirm}
        />
      </ExpansionPanelSummary>

      {/*  Toasts  */}
      {success && (
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setOpenErrorMessage(false)}
        >
          <Alert
            severity={"success"}
            onClose={() => setOpenErrorMessage(false)}
          >
            <Trans>Meals successfully updated</Trans>
          </Alert>
        </Snackbar>
      )}
      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setOpenSuccessMessage(false)}
        >
          <Alert
            severity={"error"}
            onClose={() => setOpenSuccessMessage(false)}
          >
            {error instanceof ApolloError ? error.message : ("Error" as any)}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
