import { ReactNode } from "react";
import { action, makeAutoObservable } from "mobx";
import { RootStore } from "../RootStore";

type ActionType = { label: ReactNode; onClick: () => void } | null;

/*
 * Store responsible for management of:
 * navigation(drawer)
 * entityName, search/filtering & actions in app-bar TODO
 * entity loading overlay TODO
 * sidebar TODO
 * */
export class ScreenStore {
  rootStore: RootStore;
  loading: boolean = true;

  action: ActionType = null;

  navigationOpen = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;
  }

  setLoading = action((v: boolean) => (this.loading = v));

  setAction = action((p: ActionType) => (this.action = p));

  handleToggleNavigation = action(() => {
    this.navigationOpen = !this.navigationOpen;
  });

  handleCloseNavigation = action(() => {
    this.navigationOpen = false;
  });
}
