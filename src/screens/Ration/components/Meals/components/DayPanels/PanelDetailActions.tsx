import React from "react";
import { ButtonGroup, IconButton } from "@material-ui/core";
import { DeleteRounded, EditRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {
  Meal,
  useDeleteMealByIdMutation,
} from "../../../../../../graphql/generated/graphql";
import { ToastMessage } from "../../../../../../components/ToastMessage";
import { Trans } from "@lingui/react";
import { AddMealDialog } from "../../../AddMealDialog";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {},
  button: {
    padding: `0 ${theme.spacing(1)}px`,
  },
}));

type MealItem = Pick<Meal, "id">;

interface Props extends MealItem {
  refetchPanel: any;
  setOpenEditMealDialog: any;
}

export const PanelDetailActions = ({
  id,
  refetchPanel,
  setOpenEditMealDialog,
}: Props) => {
  const classes = useStyles();
  const [openErrorMessage, setOpenErrorMessage] = React.useState(false);
  const [openSuccessMessage, setOpenSuccessMessage] = React.useState(false);

  const [delete_meal_by_pk, { error }] = useDeleteMealByIdMutation({
    variables: { id },
    onCompleted: () => {
      setOpenSuccessMessage(true);
      refetchPanel();
    },
    onError: (error) => setOpenErrorMessage(true),
  });

  return (
    <>
      <ButtonGroup
        variant={"text"}
        color={"secondary"}
        className={classes.buttonGroup}
      >
        <IconButton
          children={<EditRounded />}
          className={classes.button}
          onClick={() => setOpenEditMealDialog(true)}
        />
        <IconButton
          children={<DeleteRounded />}
          className={classes.button}
          onClick={() => delete_meal_by_pk()}
        />
      </ButtonGroup>
      <ToastMessage
        open={openSuccessMessage}
        severity={"success"}
        children={<Trans>Meal successfully deleted</Trans>}
        controledClose={setOpenErrorMessage}
      />
      <ToastMessage
        open={openErrorMessage}
        severity={"error"}
        children={error?.message as any}
        controledClose={setOpenSuccessMessage}
      />
    </>
  );
};
