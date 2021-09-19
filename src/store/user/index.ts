import { makeAutoObservable, action } from "mobx";
import { NIL } from "uuid";
import { Users } from "../../graphql/generated/graphql";
import { api } from "../../api";
import { RootStore } from "../RootStore";
import { USERS_LIST_DOCUMENT } from "./USERS_LIST_DOCUMENT";

export const INITIAL_STATE: Users = {
  id: NIL,
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

export class UserStore {
  rootStore: RootStore;
  user: Users = INITIAL_STATE;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      this.setUser(JSON.parse(savedUser));
    }
  }

  setUser = action((data: Users) => {
    this.user = data;
    localStorage.setItem("user", JSON.stringify(data));
  });

  resetUser = action(() => {
    this.user = INITIAL_STATE;
  });

  get users() {
    let fetchedData: Users[] = [];
    api
      .query({ query: USERS_LIST_DOCUMENT })
      .then(({ data, loading, error }) => {
        if (data) {
          fetchedData = data.users;
        }
      });

    return fetchedData;
  }
}
