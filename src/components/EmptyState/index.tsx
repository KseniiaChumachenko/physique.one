import React from "react";
import { Button, ButtonProps, Typography } from "@material-ui/core";
import { useStyles } from "./useStyles";

interface P {
  message: React.ReactNode;
  buttonProps?: ButtonProps;
}

// TODO: not used - dead code ?
export const EmptyState = ({ message, buttonProps }: P) => {
  const { root, illustration, action } = useStyles();
  return (
    <div className={root}>
      <img
        className={illustration}
        alt={"Illustration"}
        src={
          "https://blush.design/api/download?shareUri=3oPtC03oI&w=800&h=800&fm=png"
        }
      />
      <Typography variant={"h4"}>{message}</Typography>
      {buttonProps && (
        <Button
          className={action}
          variant={"contained"}
          color={"primary"}
          {...buttonProps}
        />
      )}
    </div>
  );
};
