import { useEffect } from "react";
import {
  PreloadedQuery,
  useMutation,
  UseMutationConfig,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { v4 as uuid } from "uuid";
import { base64ToUuid } from "src/utils/base64-to-uuid";
import { useLazyUser } from "src/api-hooks/user";
import {
  LogInQuery,
  LogInQuery$data,
} from "./__generated__/LogInQuery.graphql";
import { GetForgottenPasswordByEmailQuery } from "./__generated__/GetForgottenPasswordByEmailQuery.graphql";
import { RegisterMutation } from "./__generated__/RegisterMutation.graphql";
import { LogInQuery as LogInQueryDocument } from "./LogInQuery";
import { RegisterMutation as RegisterMutationDocument } from "./RegisterMutation";
import { GetForgottenPasswordByEmailQuery as GetForgottenPasswordByEmailQueryDocument } from "./GetForgottenPasswordByEmailQuery";
import { useChangeActiveUserState } from "./useChangeActiveUserState";

const randId = uuid();

export type UserNode = LogInQuery$data["users_connection"]["edges"][0]["node"];

export const useActiveUser = () => {
  const savedUser = localStorage.getItem("user");
  let user: UserNode | null = savedUser && JSON.parse(savedUser);
  const data = useLazyUser({ id: base64ToUuid(user?.id || randId) });

  user = data?.users_connection?.edges[0]?.node as UserNode;
  const { commitLogout, commitLogin } = useChangeActiveUserState(user as any);

  useEffect(() => {
    if (user?.id) {
      commitLogin();
    }
  }, [user]);

  const setActiveUser = (newUser: UserNode) => {
    user = newUser;
  };

  const resetUser = () => {
    commitLogout();
    user = null;
  };

  return {
    user: user ? { ...user, id: base64ToUuid(user.id) } : null,
    mutations: { setActiveUser, resetUser },
  };
};

export interface LoginPreloadedQuery {
  loginQR: PreloadedQuery<LogInQuery, Record<string, unknown>>;
}

export const useLogin = () => {
  const [queryReference, loadQuery] = useQueryLoader<LogInQuery>(
    LogInQueryDocument
  );

  return { queryReference, loadQuery };
};
export const useLoginPreloaded = ({ loginQR }: LoginPreloadedQuery) => {
  const {
    mutations: { setActiveUser },
  } = useActiveUser();
  const data = usePreloadedQuery<LogInQuery>(LogInQueryDocument, loginQR);
  const user = data.users_connection.edges[0].node;
  const { commitLogin } = useChangeActiveUserState(user);

  commitLogin();
  setActiveUser(user);

  return data;
};

export interface GetForgottenPasswordPreloadedQuery {
  forgottenPasswordQR: PreloadedQuery<
    GetForgottenPasswordByEmailQuery,
    Record<string, unknown>
  >;
}

export const useGetForgottenPassword = () => {
  const [queryReference, loadQuery] = useQueryLoader<
    GetForgottenPasswordByEmailQuery
  >(GetForgottenPasswordByEmailQueryDocument);

  return { queryReference, loadQuery };
};

export const useGetForgottenPasswordPreloaded = ({
  forgottenPasswordQR,
}: GetForgottenPasswordPreloadedQuery) => {
  return usePreloadedQuery<GetForgottenPasswordByEmailQuery>(
    GetForgottenPasswordByEmailQueryDocument,
    forgottenPasswordQR
  );
};

export const useRegisterMutation = () => {
  return useMutation<RegisterMutation>(RegisterMutationDocument);
};

export const useRegistration = () => {
  const [registerMutation] = useRegisterMutation();

  const register = (config: UseMutationConfig<RegisterMutation>) =>
    registerMutation({
      ...config,
      onCompleted: (r, p) => {
        config.onCompleted?.(r, p);
      },
    });

  return {
    register,
  };
};
