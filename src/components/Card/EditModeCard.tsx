import React, { ComponentProps } from "react";
import { ApolloError } from "@apollo/client";
import * as M from "@material-ui/core";
import * as L from "@material-ui/lab";
import { Trans } from "@lingui/react";
import { useStyles } from "./useStyles";

export interface EditModeCardProps {
  fields: {
    textFieldProps: ComponentProps<typeof M.TextField>;
    autocompleteProps?: ComponentProps<typeof L.Autocomplete>;
  }[];
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
        {fields.map((field, i) =>
          field.autocompleteProps ? (
            <L.Autocomplete
              multiple
              id="tags-standard"
              {...field.autocompleteProps}
              renderInput={(params) => (
                <M.TextField
                  {...params}
                  {...field.textFieldProps}
                  variant={"outlined"}
                />
              )}
            />
          ) : (
            <M.TextField
              key={i}
              className={classes.textField}
              variant={"outlined"}
              {...field.textFieldProps}
            />
          )
        )}
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
