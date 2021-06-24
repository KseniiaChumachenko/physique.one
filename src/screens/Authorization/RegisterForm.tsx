import React, { useState } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { send } from "emailjs-com";
import { Button, TextField } from "@material-ui/core";
import { ApolloError } from "@apollo/client";
import { Trans } from "@lingui/react";
import { useStore } from "src/store";
import {
  useRegisterMutation,
  Users,
  Users_Insert_Input,
} from "../../graphql/generated/graphql";
import { FormCard } from "./FormCard";
import {
  EMAILJS_REGISTRATION_CONFIRMATION_TEMPLATE_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_USER_ID,
} from "./constants";
import { useStyles } from "./styled";

export const RegisterForm = () => {
  const history = useHistory();
  const classes = useStyles();

  const {
    userStore: { setUser },
  } = useStore();

  const [state, setState] = useState<Users_Insert_Input>();
  const [password, setPassword] = useState({
    initial: "",
    confirmation: "",
  });
  const [error, setError] = useState<ApolloError | undefined>(undefined);

  const [insert_users_one] = useRegisterMutation({
    variables: {
      ...state,
      password:
        password.confirmation === password.initial ? password.confirmation : "",
    },
    onCompleted: ({ insert_users_one }) => {
      setUser((insert_users_one as unknown) as Users);
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
      history.push(`/ration/${moment().week()}`);
    },
    onError: (error1) => setError(error1),
  });

  const handleRegister = () => insert_users_one();

  const validationUnmet = !(
    state?.email &&
    password?.initial &&
    password?.confirmation &&
    password?.initial === password?.confirmation &&
    state?.first_name &&
    state?.last_name
  );

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
