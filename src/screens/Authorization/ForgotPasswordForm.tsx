import React, { useState } from "react";
import { Trans } from "@lingui/react";
import { Button, TextField } from "@material-ui/core";
import { useGetForgottenPassword } from "../../api-hooks/authorization";
import { useStyles } from "./styled";
import { FormCard } from "./FormCard";
import { SendPassword } from "./SendPassword";

export const ForgotPasswordForm = ({
  onBackButtonClick,
}: {
  onBackButtonClick(): void;
}) => {
  const classes = useStyles();
  const { queryReference, loadQuery } = useGetForgottenPassword();

  const [email, setEmail] = useState("");
  const [emailSent, setSentEmail] = useState(false);
  const [error, setError] = useState("");

  const handleFetchPassword = () =>
    loadQuery({ where: { email: { _eq: email } } });

  return (
    <>
      <FormCard
        title={<Trans>Forgot password?</Trans>}
        onBackButtonClick={onBackButtonClick}
        secondaryText={
          <Trans>
            No problem! Provide us with e-mail your account was created with and
            we will get back to you.
          </Trans>
        }
        fieldsSection={
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            required={true}
            label={<Trans>E-mail</Trans>}
            onChange={(e) => setEmail(e.target.value)}
          />
        }
        buttonsSection={
          <Button
            color={"primary"}
            onClick={handleFetchPassword}
            variant={"contained"}
            disabled={!email}
          >
            <Trans>Reset password</Trans>
          </Button>
        }
        errorMessage={error}
        successMessage={
          emailSent && (
            <Trans>
              We have just sent further instructions to your e-mail —
              <strong> check it out!</strong>
            </Trans>
          )
        }
      />
      {queryReference && (
        <SendPassword
          forgottenPasswordQR={queryReference}
          setError={setError}
          email={email}
          setSentEmail={setSentEmail}
        />
      )}
    </>
  );
};
