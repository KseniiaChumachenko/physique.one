import { UserStore } from "./user";
import { ScreenStore } from "./Screen";

export class RootStore {
  userStore: UserStore;
  screenStore: ScreenStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.screenStore = new ScreenStore(this);
  }
}
