import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import {
  LoginPreloadedQuery, useActiveUser,
  useLoginPreloaded,
} from "../../api-hooks/authorization";

export const Redirect = ({ loginQR }: LoginPreloadedQuery) => {

  const data = useLoginPreloaded({ loginQR });

  const { mutations: {setActiveUser}} = useActiveUser()

  useEffect(() => {
    setActiveUser(data.users_connection.edges[0].node as any) // TODO kseniia.chumachenko@gmail.com
  }, [data])

  return <div />;
};
