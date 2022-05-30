import React from "react";
import { ButtonGroup, IconButton, Tooltip } from "@material-ui/core";
import {
  AddRounded,
  CancelRounded,
  DeleteRounded,
  DoneRounded,
  EditRounded,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { t } from "@lingui/macro";

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
  colored?: boolean;
}

export const EditDeleteButtonGroup = ({
  onConfirmClick,
  onCancelClick,
  onAddClick,
  onEditClick,
  onDeleteClick,
  colored = false,
}: Props) => {
  const classes = useStyles();
  return (
    <ButtonGroup>
      {onConfirmClick && (
        <IconButton
          onKeyPress={(event) =>
            event.key === "Enter" ? onConfirmClick!() : null
          }
          children={
            <Tooltip title={t`Save`} aria-label="save">
              <DoneRounded />
            </Tooltip>
          }
          onClick={(event) => {
            onConfirmClick!();
            event.stopPropagation();
          }}
          className={classes.button}
          color={"primary"}
        />
      )}
      {onAddClick && (
        <IconButton
          children={
            <Tooltip title={t`Add`} aria-label="add">
              <AddRounded />
            </Tooltip>
          }
          onClick={(event) => {
            onAddClick!();
            event.stopPropagation();
          }}
          className={classes.button}
        />
      )}
      {onEditClick && (
        <IconButton
          children={
            <Tooltip title={t`Edit`} aria-label="edit">
              <EditRounded />
            </Tooltip>
          }
          onClick={(event) => {
            onEditClick!();
            event.stopPropagation();
          }}
          className={classes.button}
        />
      )}
      {onCancelClick && (
        <IconButton
          onKeyPress={(event) =>
            event.key === "Escape" ? onConfirmClick!() : null
          }
          children={
            <Tooltip title={t`Cancel`} aria-label="cancel">
              <CancelRounded />
            </Tooltip>
          }
          onClick={(event) => {
            onCancelClick!();
            event.stopPropagation();
          }}
          className={classes.button}
        />
      )}
      {onDeleteClick && (
        <IconButton
          children={
            <Tooltip title={t`Delete`} aria-label="delete">
              <DeleteRounded />
            </Tooltip>
          }
          onClick={(event) => {
            onDeleteClick!();
            event.stopPropagation();
          }}
          color={colored ? "secondary" : undefined}
          className={classes.button}
        />
      )}
    </ButtonGroup>
  );
};
