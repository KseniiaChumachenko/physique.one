import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginPreloadedQuery,
  useLoginPreloaded,
} from "src/api-hooks/authorization";

export const Redirect = ({
  loginQR,
  setError,
}: LoginPreloadedQuery & { setError(p: boolean): void }) => {
  const history = useNavigate();
  const data = useLoginPreloaded({ loginQR });

  useEffect(() => {
    if (data?.users_connection?.edges[0]?.node?.id) {
      history("/auth/ration");
    } else {
      setError(true);
    }
  }, [data]);

  return <div />;
};
