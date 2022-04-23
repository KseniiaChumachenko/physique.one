import { useRelayEnvironment } from "react-relay";
import { commitLocalUpdate } from "relay-runtime";
import { Environment } from "relay-runtime/lib/store/RelayStoreTypes";
import { UserNode } from "./index";

export function useChangeActiveUserState(user: UserNode) {
  const environment = useRelayEnvironment();

  const commitLogin = () =>
    commitLocalUpdate(environment as Environment, (store) => {
      const record = store.get(user.id);
      record?.setValue(true, "isActive");
      localStorage.setItem("user", JSON.stringify(user));
    });

  const commitLogout = () =>
    commitLocalUpdate(environment as Environment, (store) => {
      // todo: clean up user data properly
      store.delete(user.id);
      localStorage.removeItem("user");
    });

  return { commitLogin, commitLogout };
}
