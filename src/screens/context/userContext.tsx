import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { useHistory } from "react-router-dom";
import { Users } from "../../graphql/generated/graphql";
import { useStore } from "../../store";

enum ActionTypes {
  UPDATE = "UPDATE",
}

interface Action {
  type: ActionTypes;
  payload: Users;
}

export const INITIAL_STATE: Users = {
  id: "0",
  meal_items: [],
  meal_items_aggregate: { nodes: [] },
  meals: [],
  meals_aggregate: { nodes: [] },
  password: "",
  recipes: [],
  recipes_aggregate: { nodes: [] },
  recipe_items: [],
  recipe_items_aggregate: { nodes: [] },
  food: [],
  food_aggregate: { nodes: [] },
  pantry: [],
  pantry_aggregate: { nodes: [] },
};

function reducer(state: Users, action: Action) {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return action.payload;
    default:
      return INITIAL_STATE;
  }
}

export const UserContext = createContext<{
  state: Users;
  dispatch: Dispatch<Action>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
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
  const setUser = (newUser: Users) =>
    dispatch({ type: ActionTypes.UPDATE, payload: newUser });

  return { user, setUser };
}

export function useLogOut() {
  const { push } = useHistory();
  const { user, dispatch } = useUser();
  const {
    userStore: { resetUser },
  } = useStore();

  const logout = () => {
    dispatch({ type: ActionTypes.UPDATE, payload: INITIAL_STATE });
    resetUser();
    push("/auth");
  };

  return { user, logout };
}
