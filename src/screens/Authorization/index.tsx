import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Slide, Typography } from "@material-ui/core";
import { Trans } from "@lingui/macro";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { useStyles } from "./styled";

enum Form {
  LOGIN,
  REGISTER,
}

const ColoredSection = ({
  state,
  setState,
}: {
  state: Form;
  setState: Dispatch<SetStateAction<Form>>;
}) => {
  const classes = useStyles();

  const handleChangeState = () =>
    setState((prevState) =>
      prevState === Form.LOGIN ? Form.REGISTER : Form.LOGIN
    );

  return (
    <Slide
      direction={state === Form.LOGIN ? "left" : "right"}
      in={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <div className={classes.coloredSection}>
        <Typography variant={"h2"}>
          <Trans>Welcome to Physique.one</Trans>
        </Typography>
        <Typography variant={"h6"}>
          <Trans>
            The best tool on your way to the best version of yourself
          </Trans>
        </Typography>
        <Button
          variant="outlined"
          onClick={handleChangeState}
          className={classes.buttonOverride}
        >
          {state === Form.LOGIN ? (
            <Trans>Register</Trans>
          ) : (
            <Trans>Login</Trans>
          )}
        </Button>
      </div>
    </Slide>
  );
};

export const Authorization = () => {
  const [state, setState] = useState(Form.LOGIN);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {state === Form.LOGIN ? (
          <>
            <ColoredSection state={state} setState={setState} />
            <LoginForm />
          </>
        ) : (
          <>
            <RegisterForm />
            <ColoredSection state={state} setState={setState} />
          </>
        )}
      </div>
    </div>
  );
};
