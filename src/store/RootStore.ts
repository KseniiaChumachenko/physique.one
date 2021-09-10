// import { NIL } from "uuid";
import { FoodTypes } from "src/screens/Pantry/store/FoodTypes";
import { Pantries } from "src/screens/Pantry/store/Pantries";
// import { autorun } from "mobx";
import { UserStore } from "./user";
import { ScreenStore } from "./Screen";
import { RecipesStore } from "./Recipes";

export class RootStore {
  userStore: UserStore;
  foodTypes: FoodTypes;
  pantries: Pantries;
  screenStore: ScreenStore;
  recipeStore: RecipesStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.foodTypes = new FoodTypes(this);
    this.pantries = new Pantries(this);
    this.screenStore = new ScreenStore(this);
    this.recipeStore = new RecipesStore(this);

    // TODO: this is not elegant, bcz one should remember where loading happens
    // autorun(() => {
    //   if (this.userStore.user.id !== NIL) {
    //     this.pantries.load();
    //   }
    // });
  }
}
