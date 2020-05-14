import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { DeleteRounded, EditRounded } from "@material-ui/icons";
import { Trans } from "@lingui/react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    alignSelf: "flex-end",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

interface Props {}

export const PanelDetailActions = ({}: Props) => {
  const classes = useStyles();
  return (
    <ButtonGroup
      variant={"text"}
      color={"secondary"}
      className={classes.buttonGroup}
    >
      <Button startIcon={<EditRounded />} children={<Trans>Edit</Trans>} />
      <Button startIcon={<DeleteRounded />} children={<Trans>Delete</Trans>} />
    </ButtonGroup>
  );
};
