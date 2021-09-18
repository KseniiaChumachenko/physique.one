import { action, makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";
import { api } from "../../api";
import { Food } from "../../graphql/generated/graphql";
import { FOODS_DOCUMENT } from "./FOODS_DOCUMENT";

export class FoodLibraryStore {
  rootStore: RootStore;
  data: Food[] = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;

    this.load();
  }

  load() {
    this.rootStore.screenStore.setLoading(true);
    api.query({ query: FOODS_DOCUMENT }).then(({ data }) => {
      this.setData(data);
      this.rootStore.screenStore.setLoading(false);
    });
  }

  private setData = action((r: { food: Food[] }) => (this.data = r.food));
}
