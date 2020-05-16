import React from "react";
import { ButtonGroup, IconButton } from "@material-ui/core";
import { AddRounded, DeleteRounded, EditRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    height: "35px",
    padding: 0,
  },
}));

interface Props {
  onAddClick?(): void;
  onEditClick?(): void;
  onDeleteClick?(): void;
}

export const EditDeleteButtonGroup = ({
  onAddClick,
  onEditClick,
  onDeleteClick,
}: Props) => {
  const classes = useStyles();
  return (
    <ButtonGroup>
      <IconButton
        children={<AddRounded />}
        onClick={onAddClick}
        disabled={!onAddClick}
        className={classes.button}
      />
      <IconButton
        children={<EditRounded />}
        onClick={onEditClick}
        disabled={!onEditClick}
        className={classes.button}
      />
      <IconButton
        children={<DeleteRounded />}
        onClick={onDeleteClick}
        disabled={!onDeleteClick}
        className={classes.button}
      />
    </ButtonGroup>
  );
};
