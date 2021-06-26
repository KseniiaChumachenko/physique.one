import React, { useState } from "react";
import moment from "moment";
import {
  ExpansionPanelSummary,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { AddRounded, ExpandMoreRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Trans } from "@lingui/react";
import { ApolloError } from "@apollo/client";
import { Alert } from "@material-ui/lab";
import {
  AddMealMutationVariables,
  useAddMealMutation,
  useMealItemMacrosSumByDateSubscription,
} from "src/graphql/generated/graphql";
import { useStore } from "src/store";
import { AddMealDialog } from "../../../components/AddMealDialog";
import { AggregationChips } from "../../../../components/AggredationChips";

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

interface Props {
  date: string;
}

export const DayPanelHeader = ({ date }: Props) => {
  const classes = useStyles();
  const {
    userStore: { user },
  } = useStore();
  const [error, setOpenErrorMessage] = React.useState<ApolloError | boolean>(
    false
  );
  const [success, setOpenSuccessMessage] = React.useState(false);
  const [openAddDialog, setOpenAddMealDialog] = useState(false);

  const { data } = useMealItemMacrosSumByDateSubscription({
    variables: { date, u_id: user?.id },
  });

  const [insert_meal_one] = useAddMealMutation({
    onCompleted: () => setOpenAddMealDialog(false),
    onError: (error) => setOpenErrorMessage(error),
  });

  const handleOpenAddMealDialog = () => setOpenAddMealDialog(true);

  const handleConfirm = (variables: AddMealMutationVariables) => (
    event: any
  ) => {
    insert_meal_one({ variables });
    event.stopPropagation();
  };

  const macronutrients = data?.meal_item_aggregate?.aggregate?.sum;

  return (
    <React.Fragment>
      {data && (
        <ExpansionPanelSummary
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
                  energy_cal={macronutrients.energy_cal}
                  energy_kj={macronutrients.energy_kj}
                  proteins={macronutrients.proteins}
                  carbohydrates={macronutrients.carbohydrates}
                  fats={macronutrients.fats}
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
          </Grid>

          <AddMealDialog
            open={openAddDialog}
            setOpen={setOpenAddMealDialog}
            date={date}
            onConfirm={handleConfirm}
          />
        </ExpansionPanelSummary>
      )}

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
    </React.Fragment>
  );
};
