import { useState } from "react";
import {
  PreloadedQuery,
  useMutation,
  UseMutationConfig,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { LogInQuery } from "./__generated__/LogInQuery.graphql";
import { GetForgottenPasswordByEmailQuery } from "./__generated__/GetForgottenPasswordByEmailQuery.graphql";
import { RegisterMutation } from "./__generated__/RegisterMutation.graphql";
import { LogInQuery as LogInQueryDocument } from "./LogInQuery";
import { RegisterMutation as RegisterMutationDocument } from "./RegisterMutation";
import { GetForgottenPasswordByEmailQuery as GetForgottenPasswordByEmailQueryDocument } from "./GetForgottenPasswordByEmailQuery";
import { useSetUserToRelayStore } from "./useSetUserToRelayStore";

export interface ActiveUser {
  id: string;
  email: string;
  fb_id?: string | null;
  fb_picture_url?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  full_name?: string | null;
  user_name?: string | null;
}

export const useActiveUser = () => {
  const [user, setUser] = useState<ActiveUser | null>(null);
  const savedUser = localStorage.getItem("user");
  let parsedUser = savedUser && JSON.parse(savedUser);

  useSetUserToRelayStore(parsedUser, user, setUser);

  const setActiveUser = (user: ActiveUser) => {
    parsedUser = user;
  //  setUser(null); // TODO: ????
  };

  const resetUser = () => {
    parsedUser = null;
    setUser(null);
  };

  return { user, mutations: { setActiveUser, resetUser } };
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
  return usePreloadedQuery<LogInQuery>(LogInQueryDocument, loginQR);
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
