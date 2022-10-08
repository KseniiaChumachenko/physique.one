import { useEffect } from "react";
import {
  useQueryLoader,
  usePreloadedQuery,
  PreloadedQuery,
  useLazyLoadQuery,
} from "react-relay";
import type {
  UserQuery,
  UserQuery$variables,
} from "./__generated__/UserQuery.graphql";
import { UserQuery as UserQueryDocument } from "./UserQuery";
import { UsersQuery as UsersQueryDocument } from "./UsersQuery";
import {
  UsersQuery,
  UsersQuery$variables,
} from "./__generated__/UsersQuery.graphql";

export * from "./__generated__/UserQuery.graphql";

export const useLazyUser = (v: UserQuery$variables) => {
  return useLazyLoadQuery<UserQuery>(UserQueryDocument, v);
};

export const useUser = (v: UserQuery$variables) => {
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

export const useUsers = (v: UsersQuery$variables) => {
  const [queryReference, loadQuery] = useQueryLoader<UsersQuery>(
    UsersQueryDocument
  );

  useEffect(() => {
    loadQuery(v);
  }, []);

  const refetch = () => loadQuery(v, { fetchPolicy: "network-only" });

  return { queryReference, refetch };
};

export interface UsersPreloadedHookProps {
  usersQR: PreloadedQuery<UsersQuery, Record<string, unknown>>;
}

export const useUsersPreloadedQuery = (usersQR: PreloadedQuery<UsersQuery>) => {
  const data = usePreloadedQuery<UsersQuery>(UsersQueryDocument, usersQR);

  return { data };
};
