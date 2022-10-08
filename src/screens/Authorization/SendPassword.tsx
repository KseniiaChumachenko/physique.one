import { send } from "emailjs-com";
import {
  GetForgottenPasswordPreloadedQuery,
  useGetForgottenPasswordPreloaded,
} from "../../api-hooks/authorization";
import {
  EMAILJS_RESET_PASSWORD_TEMPLATE_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_USER_ID,
} from "./constants";

export const SendPassword = ({
  forgottenPasswordQR,
  email,
  setError,
  setSentEmail,
}: GetForgottenPasswordPreloadedQuery & {
  email: string;
  setError: (e: string) => void;
  setSentEmail: (p: boolean) => void;
}) => {
  const data = useGetForgottenPasswordPreloaded({ forgottenPasswordQR });

  const password = data.users_connection.edges[0].node.password;

  if (password) {
    send(
      EMAILJS_SERVICE_ID,
      EMAILJS_RESET_PASSWORD_TEMPLATE_ID,
      {
        reply_to: email,
        password,
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

  return null;
};
