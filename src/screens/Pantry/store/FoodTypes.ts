import { ChangeEvent } from "react";
import { makeAutoObservable, runInAction } from "mobx";
import { ApolloError } from "@apollo/client";
import { RootStore } from "../../../store/RootStore";
import {
  ADD_FOOD_TYPE_DOCUMENT,
  DELETE_FOOD_TYPE_DOCUMENT,
  UPDATE_FOOD_TYPE_DOCUMENT,
  FOOD_TYPES_DOCUMENT,
} from "../gql";
import { api } from "../../../api";
import { Food_Type, FoodTypeCardType } from "./model";
import { EMPTY_FOOD_TYPE } from "./constants";

export class FoodTypes {
  rootStore: RootStore;
  categories: FoodTypeCardType[] = [];
  loading = true;
  error?: ApolloError;

  newCategory?: FoodTypeCardType;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this /*{ rootStore: false }*/, {}, { autoBind: true });
    this.rootStore = rootStore;

    this.loadPantry();
  }

  get activeCard() {
    return this.categories.find((item) => item.isActive);
  }

  /* Handlers */

  handleSetActiveCard(value: string) {
    this.categories = this.categories.map((item) =>
      item.data?.value === value
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
  }

  handleResetActiveCards() {
    this.categories = this.categories
      .map((item) => ({
        ...item,
        data: item.initialState,
        isActive: false,
        isNewCategory: false,
      }))
      .filter((i) => i.data?.value);
  }

  handleAddNewCategoryStore() {
    this.categories.push(EMPTY_FOOD_TYPE); // new item is automatically active to fill in the form
  }

  handleFoodTypeUpdate = (key: string) => (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (this.activeCard) {
      runInAction(() => {
        this.activeCard!.data = {
          ...this.activeCard?.data,
          [key]: e.target.value,
        } as Food_Type;
      });
    } else {
      this.error = { message: `No active card to set data to.` } as ApolloError;
    }
  };

  handleFoodTypeSubmit = () => {
    if (this.activeCard) {
      this.activeCard.isNewCategory
        ? this.addFoodType(this.activeCard.data!)
        : this.updateFoodType(this.activeCard.data!);
    } else {
      this.error = { message: `No active card to submit.` } as ApolloError;
    }
  };

  handleDeleteFoodType = (value: string) => () => {
    this.deleteFoodType({ value });
  };

  /* API calls */
  private loadPantry() {
    this.loading = true;
    api
      .query({ query: FOOD_TYPES_DOCUMENT })
      .then(({ data, loading, error }) => {
        runInAction(() => {
          this.loading = loading;
          this.error = error;
          this.categories = data?.food_type.map((item: Food_Type) => ({
            data: item,
            loading: false,
            error: undefined,
            initialState: item,
            isActive: false,
            isNewCategory: false,
          }));
        });
      });
  }

  private addFoodType(variables: Food_Type) {
    api
      .mutate({
        mutation: ADD_FOOD_TYPE_DOCUMENT,
        variables: variables,
      })
      .then(({ data, loading, error }: any) => {
        runInAction(() => {
          if (this.activeCard) {
            this.activeCard.loading = loading;
            this.activeCard.error = error;
          }

          if (data) {
            this.categories.push({
              data: data.insert_food_type_one,
              loading: false,
              error: undefined,
              initialState: data.insert_food_type_one,
              isActive: false,
              isNewCategory: false,
            });

            this.handleResetActiveCards();
          }
        });
      });
  }

  private updateFoodType(variables: Food_Type) {
    api
      .mutate({
        mutation: UPDATE_FOOD_TYPE_DOCUMENT,
        variables,
      })
      .then(({ data, loading, error }: any) => {
        runInAction(() => {
          if (data) {
            this.categories = this.categories.map((item) =>
              item.data?.value === variables.value
                ? {
                    data: data.update_food_type_by_pk,
                    initialState: data.update_food_type_by_pk,
                    isActive: false,
                    isNewCategory: false,
                    loading,
                    error,
                  }
                : { ...item }
            );
          }
        });
      });
  }

  private deleteFoodType(variables: { value: string }) {
    api
      .mutate({
        mutation: DELETE_FOOD_TYPE_DOCUMENT,
        variables,
      })
      .then(({ data, loading, error }: any) => {
        runInAction(() => {
          if (data) {
            this.categories = this.categories.filter(
              (i) => i.data?.value !== variables.value
            );
          } else {
            this.categories = this.categories.map((item) =>
              item.data?.value === variables.value
                ? { ...item, loading, error }
                : { ...item }
            );
          }
        });
      });
  }
}
