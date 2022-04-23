import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  LoginPreloadedQuery,
  useLoginPreloaded,
} from "src/api-hooks/authorization";

export const Redirect = ({ loginQR }: LoginPreloadedQuery) => {
  const history = useHistory();
  const data = useLoginPreloaded({ loginQR });

  useEffect(() => {
    if (data.users_connection.edges[0].node.id) {
      history.push("/");
    }
  }, [data]);

  return <div />;
};
