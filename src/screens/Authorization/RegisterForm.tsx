import { v4 as uuid } from "uuid";
import React, { ChangeEvent, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { send } from "emailjs-com";
import { Button, TextField } from "@material-ui/core";
import { Trans } from "@lingui/macro";
import {
  ActiveUser,
  useActiveUser,
  useRegisterMutation,
} from "../../api-hooks/authorization";
import { FormCard } from "./FormCard";
import {
  EMAILJS_REGISTRATION_CONFIRMATION_TEMPLATE_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_USER_ID,
} from "./constants";
import { useStyles } from "./styled";

export const RegisterForm = () => {
  const history = useNavigate();
  const classes = useStyles();
  const id = uuid();
  const {
    mutations: { setActiveUser },
  } = useActiveUser();

  const [registerMutation] = useRegisterMutation();
  const [state, setState] = useState<ActiveUser | undefined>();
  const [password, setPassword] = useState({
    initial: "",
    confirmation: "",
  });
  const [error, setError] = useState<Error | undefined>(undefined);

  const handleRegister = () =>
    registerMutation({
      variables: {
        object: {
          ...state,
          password:
            password.confirmation === password.initial
              ? password.confirmation
              : "",
        },
      },
      onCompleted: ({ insert_users_one }) => {
        setActiveUser(insert_users_one as any); //TODO
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
        history(`/auth/ration?week=${moment().week()}&year=${moment().year()}`);
      },
      onError: (error1) => setError(error1),
    });

  const validationUnmet = !(
    state?.email &&
    password?.initial &&
    password?.confirmation &&
    password?.initial === password?.confirmation &&
    state?.first_name &&
    state?.last_name
  );

  const handleSetState = (v: keyof ActiveUser) => (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setState({ ...state, id, [v]: e.target.value } as any);

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
            onChange={handleSetState("first_name")}
          />
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            required={true}
            label={<Trans>Last name</Trans>}
            onChange={handleSetState("last_name")}
          />
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            required={true}
            label={<Trans>E-mail</Trans>}
            onChange={handleSetState("email")}
          />
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            label={<Trans>Username</Trans>}
            onChange={handleSetState("user_name")}
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
