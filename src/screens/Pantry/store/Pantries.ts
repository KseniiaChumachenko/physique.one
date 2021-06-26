import { makeAutoObservable, action /*runInAction*/ } from "mobx";
import { ApolloError } from "@apollo/client";
import { i18n } from "@lingui/core";
import { NIL } from "uuid";
import { ChangeEvent } from "react";
import { RootStore } from "../../../store/RootStore";
import { api } from "../../../api";
import {
  PANTRIES_LISTING_DOCUMENT,
  ADD_PANTRY_DOCUMENT,
  REMOVE_PANTRY_DOCUMENT,

  /*  ADD_PANTRY_USER_DOCUMENT,
  REMOVE_PANTRY_USER_DOCUMENT,

  UPDATE_PANTRY_NAME_DOCUMENT,
  UPDATE_FOOD_TYPE_DOCUMENT,*/
} from "../gql";
import { Food_Type, Pantry, Users } from "../../../graphql/generated/graphql";

/* Card props: 
* isActive,
  data,
  loading,
  error,
  actions,
  fields,
  onCancel,
  onSubmit,
  * */

interface ItemProps {
  data: Pantry;
  loading: boolean;
  error?: ApolloError;

  isActive: boolean;
  isNewCategory: boolean;

  actions: [];
  fields: [];

  onCancel(): void;
  onSubmit(): void;
}

const EMPTY_PANTRY_ITEM = (user: Users) => ({
  id: NIL,
  name: "",
  pantry_items: [{}],
  pantry_items_aggregate: {
    aggregate: { count: 0 },
  },
  pantry_users: [user],
  pantry_users_aggregate: {
    aggregate: { count: 0 },
  },
});

/*
 * TODO: pantry progress stopped here, all pantry related stuff is commented out
 * */

export class Pantries {
  rootStore: RootStore;
  items: ItemProps[] = [];
  loading = true;
  error?: ApolloError;

  newItem?: any;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;
  }

  // Loading happens in rootStore when userId gets changed
  load = action(() => {
    this.loading = true;
    const { id: u_id } = this.user;

    api
      .query({
        query: PANTRIES_LISTING_DOCUMENT,
        variables: { u_id },
      })
      .then(({ data, loading, error }) => {
        this.loading = loading;
        this.error = error;
        this.items = data?.pantry.map((item: Food_Type) => ({
          data: item,
          loading: false,
          error: undefined,
          initialState: item,
          isActive: false,
          isNewCategory: false,

          fields: this.fields,
          actions: this.actions,
        }));
      });
  });

  // add new category first then addPantry
  addPantry = action(() => {
    api
      .mutate({ mutation: ADD_PANTRY_DOCUMENT, variables: this.newItem })
      .then(({ data, loading, error }: any) => {
        this.loading = loading;
        this.error = error;
        if (data) {
          this.load();
        }
      });
  });

  handleAddNewCategory = action(() => {
    this.items.push(EMPTY_PANTRY_ITEM(this.user) as any); // TODO: ItemProps vs .data
  });

  handleSetActiveCard(id: string) {
    this.items = this.items.map((item) =>
      item.data?.id === id
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
  }

  handleDeletePantry(id: string) {
    api
      .mutate({ mutation: REMOVE_PANTRY_DOCUMENT, variables: { id } })
      .then(/*TODO*/);
  }

  private handlePantryUpdate = action(
    (key: string) => (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      if (this.activeCard) {
        this.activeCard!.data = {
          ...this.activeCard?.data,
          [key]: e.target.value,
        };
      } else {
        this.error = {
          message: `No active card to set data to.`,
        } as ApolloError;
      }
    }
  );

  get activeCard() {
    return this.items.find((item) => item.isActive);
  }

  getItemById(id: string) {
    return this.items.find((item) => item.data.id === id);
  }

  private get user() {
    return this.rootStore.userStore.user;
  }

  private get fields() {
    return [
      {
        textFieldProps: {
          required: true,
          label: i18n.t`Name`,
          onChange: this.handlePantryUpdate("name"),
        },
      },
      {
        autocompleteProps: {
          options: this.rootStore.userStore.users,
          getOptionLabel: (option: Users) => option.user_name,
          onChange: this.handlePantryUpdate("pantry_users"),
        },
        textFieldProps: {
          required: true,
          label: i18n.t`Users`,
        },
      },
    ];
  }

  private get actions() {
    return [
      // {
      //   children: i18n.t`Edit`,
      //   onClick: () => this.handleSetActiveCard(id),
      // },
      // {
      //   children: i18n.t`Delete`,
      //   onClick: this.handleDeletePantry(id),
      //   disabled:
      //     (this.getItemById(id)?.data.pantry_items_aggregate?.aggregate
      //       ?.count || 0) > 0,
      // },
    ];
  }
}
