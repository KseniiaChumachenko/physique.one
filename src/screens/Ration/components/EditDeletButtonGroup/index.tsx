import React from "react";
import { ButtonGroup, IconButton } from "@material-ui/core";
import {
  DoneRounded,
  CancelRounded,
  AddRounded,
  DeleteRounded,
  EditRounded,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    height: "35px",
    padding: 0,
  },
}));

interface Props {
  onConfirmClick?(): void;
  onCancelClick?(): void;
  onAddClick?(): void;
  onEditClick?(): void;
  onDeleteClick?(): void;
}

export const EditDeleteButtonGroup = ({
  onConfirmClick,
  onCancelClick,
  onAddClick,
  onEditClick,
  onDeleteClick,
}: Props) => {
  const classes = useStyles();
  return (
    <ButtonGroup>
      {onConfirmClick && (
        <IconButton
          children={<DoneRounded />}
          onClick={(event) => {
            onConfirmClick!();
            event.stopPropagation();
          }}
          className={classes.button}
          color={"primary"}
        />
      )}
      {onCancelClick && (
        <IconButton
          children={<CancelRounded />}
          onClick={(event) => {
            onCancelClick!();
            event.stopPropagation();
          }}
          className={classes.button}
          color={"secondary"}
        />
      )}
      {onAddClick && (
        <IconButton
          children={<AddRounded />}
          onClick={(event) => {
            onAddClick!();
            event.stopPropagation();
          }}
          className={classes.button}
        />
      )}
      {onEditClick && (
        <IconButton
          children={<EditRounded />}
          onClick={(event) => {
            onEditClick!();
            event.stopPropagation();
          }}
          className={classes.button}
        />
      )}
      {onDeleteClick && (
        <IconButton
          children={<DeleteRounded />}
          onClick={(event) => {
            onDeleteClick!();
            event.stopPropagation();
          }}
          className={classes.button}
        />
      )}
    </ButtonGroup>
  );
};
