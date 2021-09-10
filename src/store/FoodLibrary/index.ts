import { makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";

export class FoodLibraryStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;

    this.load();
  }

  private load() {}
}
