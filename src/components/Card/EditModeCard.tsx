import React, { ComponentProps } from "react";
import { ApolloError } from "@apollo/client";
import * as M from "@material-ui/core";
import { Trans } from "@lingui/react";
import { useStyles } from "./useStyles";

export interface EditModeCardProps {
  fields: ComponentProps<typeof M.TextField>[];
  onSubmit(): void;
  onCancel(): void;

  loading?: boolean;
  error?: ApolloError;
}

export const EditModeCard = ({
  fields,
  onCancel,
  onSubmit,
  loading,
  error,
}: EditModeCardProps) => {
  const classes = useStyles();

  return (
    <M.Card variant={"outlined"} className={classes.root}>
      <M.CardContent>
        {fields.map((field, i) => (
          <M.TextField key={i} className={classes.textField} {...field} />
        ))}
      </M.CardContent>
      <M.CardActions>
        <M.Button
          color={"primary"}
          onClick={onSubmit}
          disabled={loading || !!error}
        >
          <Trans>Save</Trans>
        </M.Button>
        <M.Button onClick={onCancel} disabled={loading}>
          <Trans>Cancel</Trans>
        </M.Button>
      </M.CardActions>
    </M.Card>
  );
};
