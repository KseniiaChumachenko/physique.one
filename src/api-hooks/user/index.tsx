import { useEffect } from "react";
import { useQueryLoader, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { UserQuery as UserQueryDocument } from "./UserQuery";
import {
  UserQuery,
  UserQueryVariables,
} from "./__generated__/UserQuery.graphql";

export * from "./__generated__/UserQuery.graphql";

export const useUser = (v: UserQueryVariables) => {
  const [queryReference, loadQuery] = useQueryLoader<UserQuery>(
    UserQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, []);

  const refetch = () => loadQuery(v, { fetchPolicy: "network-only" });

  return { queryReference, refetch };
};

export interface UserPreloadedHookProps {
  userQR: PreloadedQuery<UserQuery, Record<string, unknown>>;
}

export const useUserPreloadedQuery = (userQR: PreloadedQuery<UserQuery>) => {
  const data = usePreloadedQuery<UserQuery>(UserQueryDocument, userQR);

  return { data };
};
