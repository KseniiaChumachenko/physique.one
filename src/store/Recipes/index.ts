import { action, autorun, makeAutoObservable } from "mobx";
import { api } from "../../api";
import { Recipe } from "../../graphql/generated/graphql";
import { RootStore } from "../RootStore";
import { RECIPES_LISTING_DOCUMENT } from "./RECIPES_LISTING_DOCUMENT";

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
    api.query({ query: RECIPES_LISTING_DOCUMENT }).then(({ data }) => {
      this.setData(data);
      this.rootStore.screenStore.setLoading(false);
    });
  }

  private setData = action((r: { recipe: Recipe[] }) => (this.data = r.recipe));

  // insert_recipe_one
}
