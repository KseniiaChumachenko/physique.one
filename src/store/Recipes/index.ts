import { action, autorun, makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";
import { mutate, query } from "../../api";
import {
  AddRecipeItemMutationVariables,
  Recipe,
  UpdateRecipeItemByPkMutationVariables,
} from "../../graphql/generated/graphql";
import { RootStore } from "../RootStore";
import { RECIPES_LISTING_DOCUMENT } from "./RECIPES_LISTING_DOCUMENT";
import { DELETE_RECIPE_ITEM_DOCUMENT } from "./RECIPE_ITEMS/DELETE_RECIPE_ITEM_DOCUMENT";
import { UPDATE_RECIPE_ITEM_DOCUMENT } from "./RECIPE_ITEMS/UPDATE_RECIPE_ITEM_DOCUMENT";
import { ADD_RECIPE_ITEM_DOCUMENT } from "./RECIPE_ITEMS/ADD_RECIPE_ITEM_DOCUMENT";
import { ADD_RECIPE_DOCUMENT } from "./RECIPE/ADD_RECIPE_DOCUMENT";
import { DELETE_RECIPE_DOCUMENT } from "./RECIPE/DELETE_RECIPE_DOCUMENT";

export class RecipesStore {
  rootStore: RootStore;
  data: Recipe[] = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;

    autorun(async () => {
      await this.load();
    });
  }

  async load() {
    this.rootStore.screenStore.setLoading(true);
    await query({
      document: RECIPES_LISTING_DOCUMENT,
      onSuccess: (data: { recipe: Recipe[] }) => {
        this.setData(data?.recipe);
        this.rootStore.screenStore.setLoading(false);
      },
    });
  }

  private setData = action((r: Recipe[]) => (this.data = r));

  getItem(id: string) {
    return this.data.find((i) => i.id === id);
  }

  addRecipe = action(async () => {
    const variables: Recipe = {
      id: uuid(),
      name: "New recipe",
      u_id: this.rootStore.userStore.user.id,
      increment: 0,
      meal_items: [],
      meal_items_aggregate: { nodes: [] },
      recipe_items: [],
      recipe_items_aggregate: { nodes: [] },
      user: this.rootStore.userStore.user,
    };
    await mutate({
      document: ADD_RECIPE_DOCUMENT,
      variables,
      onOptimisticUpdate: () => {
        this.setData([variables, ...this.data]);
      },
    });
  });

  /* TODO update action*/

  deleteRecipe = action(async (id: string) => {
    const item = this.getItem(id);
    if (item?.recipe_items) {
      await Promise.all(
        item?.recipe_items.map((i) => this.deleteRecipeItem(i.id))
      );
    }

    await mutate({
      document: DELETE_RECIPE_DOCUMENT,
      variables: { id },
      onOptimisticUpdate: async () => {
        this.setData(this.data.filter((i) => i.id !== id));
      },
      onError: () => this.load(),
    });
  });

  addRecipeItem = action(
    async (
      variables: AddRecipeItemMutationVariables,
      onCompleted?: () => void
    ) => {
      await mutate({
        document: ADD_RECIPE_ITEM_DOCUMENT,
        variables,
        onOptimisticUpdate: () => {
          const optimisticUpdate = this.data.map((r) => ({
            ...r,
            recipe_items: [
              ...r.recipe_items,
              {
                ...variables,
                food: this.rootStore.foodLibraryStore.data.find(
                  ({ id }) => variables.food_id === id
                ),
              },
            ],
          }));
          this.setData(optimisticUpdate as any);
        },
        onSuccess: onCompleted,
        onError: () => this.load(),
      });
    }
  );

  updateRecipeItem = action(
    async (
      variables: UpdateRecipeItemByPkMutationVariables,
      onCompleted?: () => void
    ) =>
      await mutate({
        document: UPDATE_RECIPE_ITEM_DOCUMENT,
        variables,
        onOptimisticUpdate: () => {
          const optimisticUpdate = this.data.map((r) => ({
            ...r,
            recipe_items: r.recipe_items.map((item) =>
              item.id === variables.id ? { ...item, ...variables } : item
            ),
          }));
          this.setData(optimisticUpdate);
        },
        onSuccess: onCompleted,
        onError: () => this.load(),
      })
  );

  deleteRecipeItem = action(
    async (id: string) =>
      await mutate({
        document: DELETE_RECIPE_ITEM_DOCUMENT,
        variables: { id },
        onOptimisticUpdate: () => {
          const optimisticUpdate = this.data.map((r) => ({
            ...r,
            recipe_items: r.recipe_items.filter((r_item) => r_item.id !== id),
          }));
          this.setData(optimisticUpdate);
        },
        onError: () => this.load(),
      })
  );
}
