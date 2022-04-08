import { ScreenStore } from "./Screen";

export class RootStore {
  screenStore: ScreenStore;

  constructor() {
    this.screenStore = new ScreenStore(this);
  }
}
