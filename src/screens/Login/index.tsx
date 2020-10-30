import React, { useState } from "react";
import FacebookLoginWithButton from "react-facebook-login";
import {
  Button,
  Card,
  CardContent,
  createStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Trans } from "@lingui/react";
import {
  useIsFacebookUserLazyQuery,
  useLogInLazyQuery,
  useRegisterFacebookUserMutation,
  useRegisterMutation,
} from "../../graphql/generated/graphql";
import { useHistory } from "react-router-dom";
import { ToastMessage } from "../../components/ToastMessage";
import { makeStyles } from "@material-ui/core/styles";
import { ApolloError } from "@apollo/client";
import { useUpdateUser } from "../context/userContext";

const FB_APP_ID = process.env.FACEBOOK_APP_ID;

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

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: `${theme.spacing(15)}px auto`,
      width: 360,
    },
    credentials: {
      display: "flex",
      flexDirection: "column",
    },
    textFields: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    buttonBlock: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    facebookButton: {
      background: theme.palette.primary.main,
      color: "white",
      border: "none",
      padding: theme.spacing(1),
      marginTop: theme.spacing(2),
      fontWeight: 500,
      width: "100%",
    },
  })
);

export const Login = () => {
  const history = useHistory();
  const classes = useStyles();

  const { setUser } = useUpdateUser();

  const [isLoginPage, setLoginPage] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fbResponse, setFBResponse] = useState<FBResponse>(
    INITIAL_FB_RESP_STATE
  );
  const [error, setError] = useState<ApolloError | undefined>(undefined);

  const [getLogin] = useLogInLazyQuery({
    variables: { user_name: username, password },
    onCompleted: (data) => {
      const withRegularUser = data?.users && data?.users.length > 0;

      if (withRegularUser) {
        setUser(data?.users[0]);
        history.push("/");
      }
    },
    onError: (error1) => setError(error1),
  });

  const [insert_users_one] = useRegisterMutation({
    variables: { user_name: username, password },
    // TODO: implement regular registration
    onCompleted: ({ insert_users_one }) => {
      getLogin(insert_users_one?.id);
    },
    onError: (error1) => setError(error1),
  });

  const [insert_fb_user] = useRegisterFacebookUserMutation({
    onCompleted: ({ insert_users_one }) => {
      setUser(insert_users_one);
    },
    onError: (error1) => setError(error1),
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
    onError: (error1) => setError(error1),
  });

  const handleLogin = () => getLogin();
  const handleRegister = () => insert_users_one();

  const handleFacebookResponse = (r: FBResponse) => {
    setFBResponse(r);
    getCheckFacebookUser();
  };

  return (
    <>
      <Card className={classes.root} variant={"outlined"}>
        <CardContent>
          <Typography variant={"h4"}>
            {isLoginPage ? (
              <Trans>Welcome</Trans>
            ) : (
              <Trans>Create account</Trans>
            )}
          </Typography>
          <div className={classes.credentials}>
            <TextField
              className={classes.textFields}
              variant={"outlined"}
              label={<Trans>Username</Trans>}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              className={classes.textFields}
              variant={"outlined"}
              label={<Trans>Password</Trans>}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.buttonBlock}>
            <Button
              color={"primary"}
              onClick={isLoginPage ? handleLogin : handleRegister}
              variant={"contained"}
            >
              {isLoginPage ? <Trans>Log in</Trans> : <Trans>Register</Trans>}
            </Button>
            <Button
              color={"secondary"}
              onClick={() => setLoginPage(!isLoginPage)}
            >
              {isLoginPage ? <Trans>Register</Trans> : <Trans>Log in</Trans>}
            </Button>
          </div>
          {FB_APP_ID && (
            <FacebookLoginWithButton
              appId={FB_APP_ID}
              autoLoad={true}
              size={"small"}
              scope={"public_profile,email,picture"}
              fields={"email, name, picture"}
              callback={handleFacebookResponse}
              cssClass={classes.facebookButton}
            />
          )}
        </CardContent>
      </Card>

      <ToastMessage severity={"error"} open={!!error}>
        <>{error?.message}</>
      </ToastMessage>
    </>
  );
};
