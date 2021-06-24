import { makeAutoObservable, action } from "mobx";
import { NIL } from "uuid";
import { gql } from "@apollo/client";
import { Users } from "../graphql/generated/graphql";
import { api } from "../api";
import { RootStore } from "./RootStore";

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

const USERS_LIST_DOCUMENT = gql`
  query Users {
    users {
      id
      first_name
      last_name
      full_name
      user_name
      email
      fb_id
      fb_picture_url
    }
  }
`;

export class UserStore {
  rootStore: RootStore;
  user: Users = INITIAL_STATE;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;
  }

  setUser = action((data: Users) => {
    this.user = data;
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
