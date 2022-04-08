import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import {
  LoginPreloadedQuery,
  useLoginPreloaded,
} from "../../api-hooks/authorization";

export const Redirect = ({ loginQR }: LoginPreloadedQuery) => {
  const history = useHistory();

  const data = useLoginPreloaded({ loginQR });

  if (data) {
    history.push(`/ration/${moment().week()}/${moment().year()}`);
  }

  return <div />;
};
