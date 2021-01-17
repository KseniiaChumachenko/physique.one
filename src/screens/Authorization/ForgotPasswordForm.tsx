import React, { useState } from "react";
import { send } from "emailjs-com";
import { Trans } from "@lingui/react";
import { Button, TextField } from "@material-ui/core";
import { useGetForgottenPasswordByEmailLazyQuery } from "../../graphql/generated/graphql";
import { useStyles } from "./styled";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_USER_ID,
  EMAILJS_RESET_PASSWORD_TEMPLATE_ID,
} from "./constants";
import { FormCard } from "./FormCard";

export const ForgotPasswordForm = ({
  onBackButtonClick,
}: {
  onBackButtonClick(): void;
}) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [emailSent, setSentEmail] = useState(false);
  const [error, setError] = useState("");

  const [
    getForgottenPassword,
    { loading },
  ] = useGetForgottenPasswordByEmailLazyQuery({
    variables: { email },
    onError: (error1) => setError(error1.message),
    onCompleted: (data) => {
      const withRegularUser = data?.users && data?.users.length > 0;

      if (withRegularUser) {
        send(
          EMAILJS_SERVICE_ID,
          EMAILJS_RESET_PASSWORD_TEMPLATE_ID,
          {
            reply_to: email,
            password: data?.users[0].password,
          },
          EMAILJS_USER_ID
        )
          .then(() => setSentEmail(true))
          .catch((error) => setError(error));
      } else {
        setError(
          "No user with such email in the system. We suggest you to create new account."
        );
      }
    },
  });

  return (
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
          onClick={() => getForgottenPassword()}
          variant={"contained"}
          disabled={!email || loading}
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
  );
};
