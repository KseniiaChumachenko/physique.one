import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Link, TextField, Typography } from "@material-ui/core";
import { Trans } from "@lingui/react";
import { useUpdateUser } from "../context/userContext";
import {
  useIsFacebookUserLazyQuery,
  useLogInLazyQuery,
  useRegisterFacebookUserMutation,
} from "../../graphql/generated/graphql";
import FacebookLoginWithButton from "react-facebook-login";
import { useStyles } from "./styled";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { FormCard } from "./FormCard";
import { FB_APP_ID } from "./constants";

const INITIAL_FB_RESP_STATE = {
  accessToken: "",
  data_access_expiration_time: 0,
  expiresIn: 0,
  graphDomain: "",
  id: "",
  name: "",
  picture: {
    data: {
      height: 0,
      is_silhouette: false,
      signedRequest: "",
      url: "",
      userID: "",
      width: 0,
    },
  },
};

interface FBResponse {
  accessToken: string;
  data_access_expiration_time: number;
  expiresIn: number;
  graphDomain: string;
  id: string;
  name: string;
  picture: {
    data: {
      height: number;
      width: number;
      is_silhouette: boolean;
      url: string;
      signedRequest: string;
      userID: string;
    };
  };
}

export const LoginForm = () => {
  const history = useHistory();
  const classes = useStyles();

  const { setUser } = useUpdateUser();

  const [isResetForm, setResetForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fbResponse, setFBResponse] = useState<FBResponse>(
    INITIAL_FB_RESP_STATE
  );
  const [error, setError] = useState("");

  const [getLogin, { loading }] = useLogInLazyQuery({
    variables: { email, password },
    onCompleted: (data) => {
      const withRegularUser = data?.users && data?.users.length > 0;

      if (withRegularUser) {
        setUser(data?.users[0]);
        history.push("/");
      } else {
        setError(
          "Entered credentials are invalid. Check correctness of entered email and password."
        );
      }
    },
    onError: (error1) => setError(error1.message),
  });

  const [insert_fb_user] = useRegisterFacebookUserMutation({
    onCompleted: ({ insert_users_one }) => {
      setUser(insert_users_one);
    },
    onError: (error1) => setError(error1.message),
  });

  const [
    getCheckFacebookUser,
    checkFacebookUserResponse,
  ] = useIsFacebookUserLazyQuery({
    variables: { fb_id: fbResponse.id },
    onCompleted: ({ users }) => {
      const withUser = users.length > 0;
      if (withUser) {
        setUser(checkFacebookUserResponse.data?.users[0]);
        history.push("/");
      } else {
        insert_fb_user({
          variables: {
            fb_id: fbResponse.id,
            fb_picture_url: fbResponse.picture.data.url,
            full_name: fbResponse.name,
          },
        });
      }
    },
    onError: (error1) => setError(error1.message),
  });

  const handleLogin = () => getLogin();
  const handleFacebookResponse = (r: FBResponse) => {
    setFBResponse(r);
    getCheckFacebookUser();
  };

  const handleChangeToResetForm = () => setResetForm(!isResetForm);

  return isResetForm ? (
    <ForgotPasswordForm onBackButtonClick={handleChangeToResetForm} />
  ) : (
    <FormCard
      title={<Trans>Login</Trans>}
      fieldsSection={
        <>
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            label={<Trans>E-mail</Trans>}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.textFields}
            variant={"outlined"}
            label={<Trans>Password</Trans>}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
      }
      buttonsSection={
        <>
          <div className={classes.buttonsRow}>
            <Button
              color={"primary"}
              onClick={handleLogin}
              variant={"contained"}
              disabled={!email || !password || loading}
            >
              <Trans>Log in</Trans>
            </Button>
            <Typography variant={"body1"}>
              <Link onClick={handleChangeToResetForm}>
                <Trans>Forgot password?</Trans>
              </Link>
            </Typography>
          </div>
          {FB_APP_ID && (
            <FacebookLoginWithButton
              appId={FB_APP_ID}
              size={"small"}
              scope={"public_profile,email,picture"}
              fields={"email, name, picture"}
              callback={handleFacebookResponse}
              cssClass={classes.facebookButton}
              isDisabled={loading}
            />
          )}
        </>
      }
      errorMessage={error}
    />
  );
};
