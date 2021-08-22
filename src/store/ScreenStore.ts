import { action, makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

export class ScreenStore {
  rootStore: RootStore;

  navigationOpen = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this /*{ rootStore: false }*/, {}, { autoBind: true });
    this.rootStore = rootStore;
  }

  handleToggleNavigation = action(() => {
    this.navigationOpen = !this.navigationOpen;
  });

  handleCloseNavigation = action(() => {
    this.navigationOpen = false;
  });
}
