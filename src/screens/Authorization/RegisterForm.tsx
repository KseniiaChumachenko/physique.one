import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { send } from "emailjs-com";
import { Button, TextField } from "@material-ui/core";
import { ApolloError } from "@apollo/client";
import { Trans } from "@lingui/react";
import { useUpdateUser } from "../context/userContext";
import {
  useRegisterMutation,
  Users_Insert_Input,
} from "../../graphql/generated/graphql";
import {
  EMAILJS_REGISTRATION_CONFIRMATION_TEMPLATE_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_USER_ID,
} from "./constants";
import { useStyles } from "./styled";
import { FormCard } from "./FormCard";

export const RegisterForm = () => {
  const history = useHistory();
  const classes = useStyles();

  const { setUser } = useUpdateUser();

  const [state, setState] = useState<Users_Insert_Input>();
  const [password, setPassword] = useState({
    initial: "",
    confirmation: "",
  });
  const [error, setError] = useState<ApolloError | undefined>(undefined);

  const [insert_users_one] = useRegisterMutation({
    variables: state,
    onCompleted: ({ insert_users_one }) => {
      setUser(insert_users_one);
      send(
        EMAILJS_SERVICE_ID,
        EMAILJS_REGISTRATION_CONFIRMATION_TEMPLATE_ID,
        {
          reply_to: insert_users_one?.email,
          to_name:
            insert_users_one?.first_name + " " + insert_users_one?.last_name,
        },
        EMAILJS_USER_ID
      );
      history.push("/");
    },
    onError: (error1) => setError(error1),
  });

  const handleRegister = () => insert_users_one();

  const validationUnmet =
    !!state?.email ||
    !!state?.password ||
    !!state?.first_name ||
    !!state?.last_name;

  return (
    <FormCard
      title={<Trans>Create an Account</Trans>}
      fieldsSection={
        <>
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            required={true}
            label={<Trans>First name</Trans>}
            onChange={(e) => setState({ ...state, first_name: e.target.value })}
          />
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            required={true}
            label={<Trans>Last name</Trans>}
            onChange={(e) => setState({ ...state, last_name: e.target.value })}
          />
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            required={true}
            label={<Trans>E-mail</Trans>}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            label={<Trans>Username</Trans>}
            onChange={(e) => setState({ ...state, user_name: e.target.value })}
          />
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            required={true}
            label={<Trans>Password</Trans>}
            type={"password"}
            onChange={(e) =>
              setPassword({ ...password, initial: e.target.value })
            }
          />
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            required={true}
            label={<Trans>Confirm password</Trans>}
            type={"password"}
            error={
              !!password.confirmation &&
              password.initial !== password.confirmation
            }
            onChange={(e) => {
              setPassword({ ...password, confirmation: e.target.value });
              if (password.confirmation === password.initial) {
                setState({ ...state, password: e.target.value });
              }
            }}
          />
        </>
      }
      buttonsSection={
        <Button
          color={"primary"}
          onClick={handleRegister}
          variant={"contained"}
          disabled={validationUnmet}
        >
          <Trans>Register</Trans>
        </Button>
      }
      errorMessage={error?.message}
    />
  );
};
