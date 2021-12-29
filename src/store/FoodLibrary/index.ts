import { action, makeAutoObservable } from "mobx";
import { GraphQLError } from "graphql";
import { RootStore } from "../RootStore";
import { api, mutate } from "../../api";
import {
  AddFoodLibraryItemMutationVariables,
  Food,
  UpdateFoodLibraryItemMutationVariables,
} from "../../graphql/generated/graphql";
import {
  FOODS_DOCUMENT,
  ADD_FOOD_LIBRARY_ITEM_DOCUMENT,
  DELETE_FOOD_LIBRARY_ITEM_DOCUMENT,
  UPDATE_FOOD_LIBRARY_ITEM_DOCUMENT,
} from "./gql";

export class FoodLibraryStore {
  rootStore: RootStore;
  data: Food[] = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;

    //  this.load();
  }

  load() {
    this.rootStore.screenStore.setLoading(true);
    api
      .query({ query: FOODS_DOCUMENT })
      .then(({ data }: { data: { food: Food[] } }) => {
        this.setData(data.food);
        this.rootStore.screenStore.setLoading(false);
      });
  }

  private setData = action((food: Food[]) => (this.data = food));

  add = action(
    async (
      variables: AddFoodLibraryItemMutationVariables,
      onCompleted?: () => void,
      onError?: (e?: readonly GraphQLError[]) => void
    ) => {
      await mutate({
        document: ADD_FOOD_LIBRARY_ITEM_DOCUMENT,
        variables,
        onOptimisticUpdate: () => {
          this.setData([variables as Food, ...this.data]);
        },
        onSuccess: onCompleted,
        onError: onError,
      });
    }
  );

  update = action(
    async (
      variables: UpdateFoodLibraryItemMutationVariables,
      onCompleted?: () => void,
      onError?: (e?: readonly GraphQLError[]) => void
    ) => {
      await mutate({
        document: UPDATE_FOOD_LIBRARY_ITEM_DOCUMENT,
        variables,
        onOptimisticUpdate: () => {
          this.setData(
            this.data.map((i) =>
              i.id === variables.id ? ({ ...i, ...variables } as Food) : i
            )
          );
        },
        onSuccess: onCompleted,
        onError: onError,
      });
    }
  );

  remove = action(
    async (
      id: string, // TODO: substitute with generated mutation vars?
      onCompleted?: () => void,
      onError?: (e?: readonly GraphQLError[]) => void
    ) => {
      await mutate({
        document: DELETE_FOOD_LIBRARY_ITEM_DOCUMENT,
        variables: { id },
        onOptimisticUpdate: () => {
          this.setData(this.data.filter((i) => i.id !== id));
        },
        onSuccess: onCompleted,
        onError: onError,
      });
    }
  );
}
