import { PantryStore } from "src/screens/Pantry/store";

export class RootStore {
  pantryStore: PantryStore;

  constructor() {
    this.pantryStore = new PantryStore(this);
  }
}
