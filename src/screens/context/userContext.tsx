import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { useHistory } from "react-router-dom";
import { Users } from "../../graphql/generated/graphql";

enum ActionTypes {
  UPDATE = "UPDATE",
}

interface Action {
  type: ActionTypes;
  payload: StateType;
}
type StateType = Users | null | undefined;

function reducer(state: StateType, action: Action) {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return action.payload;
    default:
      return;
  }
}

const INITIAL_STATE: StateType = null;

export const UserContext = createContext<{
  state: StateType;
  dispatch: Dispatch<Action>;
}>({
  state: INITIAL_STATE as StateType,
  dispatch: (action: Action) => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const { state, dispatch } = useContext(UserContext);
  const user = state;
  return { user, dispatch };
}

export function useUpdateUser() {
  const { user, dispatch } = useUser();
  const setUser = (newUser: StateType) =>
    dispatch({ type: ActionTypes.UPDATE, payload: newUser });

  return { user, setUser };
}

export function useLogOut() {
  const { push } = useHistory();
  const { user, dispatch } = useUser();
  const logout = () => {
    dispatch({ type: ActionTypes.UPDATE, payload: null });
    push("/auth");
  };

  return { user, logout };
}
