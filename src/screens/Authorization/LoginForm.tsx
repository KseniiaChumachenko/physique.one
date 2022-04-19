import React, { useState } from "react";
import { Button, Link, TextField, Typography } from "@material-ui/core";
import { Trans } from "@lingui/macro"
import { useLogin } from "src/api-hooks/authorization";
import { useStyles } from "./styled";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { FormCard } from "./FormCard";
import { Redirect } from "./Redirect";

// const INITIAL_FB_RESP_STATE = {
//   accessToken: "",
//   data_access_expiration_time: 0,
//   expiresIn: 0,
//   graphDomain: "",
//   id: "",
//   name: "",
//   picture: {
//     data: {
//       height: 0,
//       is_silhouette: false,
//       signedRequest: "",
//       url: "",
//       userID: "",
//       width: 0,
//     },
//   },
// };
//
// interface FBResponse {
//   accessToken: string;
//   data_access_expiration_time: number;
//   expiresIn: number;
//   graphDomain: string;
//   id: string;
//   name: string;
//   picture: {
//     data: {
//       height: number;
//       width: number;
//       is_silhouette: boolean;
//       url: string;
//       signedRequest: string;
//       userID: string;
//     };
//   };
// }

export const LoginForm = () => {
  const classes = useStyles();

  const [isResetForm, setResetForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [fbResponse, setFBResponse] = useState<FBResponse>(
  //   INITIAL_FB_RESP_STATE
  // );

  const { queryReference, loadQuery } = useLogin();

  const handleLogin = () => {
    loadQuery({
      where: { email: { _eq: email }, password: { _eq: password } },
    });
  };

  // const handleFacebookResponse = (r: FBResponse) => {
  //   setFBResponse(r);
  //
  //   const fb_id = fbResponse.id;
  //   loadQuery({ where: { fb_id: { _eq: fb_id } } });
  // };

  const handleChangeToResetForm = () => setResetForm(!isResetForm);

  return isResetForm ? (
    <ForgotPasswordForm onBackButtonClick={handleChangeToResetForm} />
  ) : (
    <>
      <FormCard
        title={<Trans>Login</Trans>}
        fieldsSection={
          <>
            <TextField
              className={classes.textFields}
              variant={"outlined"}
              label={<Trans>E-mail</Trans>}
              type={'email'}
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
                disabled={!email || !password}
              >
                <Trans>Log in</Trans>
              </Button>
              <Typography variant={"body1"}>
                <Link onClick={handleChangeToResetForm}>
                  <Trans>Forgot password?</Trans>
                </Link>
              </Typography>
            </div>
            {/*{FB_APP_ID && (*/}
            {/*  <FacebookLoginWithButton*/}
            {/*    appId={FB_APP_ID}*/}
            {/*    size={"small"}*/}
            {/*    scope={"public_profile,email,picture"}*/}
            {/*    fields={"email, name, picture"}*/}
            {/*    callback={handleFacebookResponse}*/}
            {/*    cssClass={classes.facebookButton}*/}
            {/*    isDisabled={loading}*/}
            {/*  />*/}
            {/*)}*/}
          </>
        }
      />
      {queryReference && <Redirect loginQR={queryReference} />}
    </>
  );
};
