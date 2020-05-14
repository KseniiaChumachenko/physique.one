import { useLocalStore } from "mobx-react-lite";
import {
  Food,
  Meal_Item_Insert_Input,
} from "../../../../graphql/generated/graphql";

interface State {
  name: string;
  setName(newName: string): void;

  time: any;
  setTime(newTime: string): void;

  foods: Food[];

  meal_items: Meal_Item_Insert_Input[];
  add_meal_item(): void;
  update_meal_item({
    indexOfItem,
    foodId,
    weight,
  }: {
    indexOfItem?: number;
    foodId?: string;
    weight?: number;
  }): void;
  remove_meal_item(indexOfItem: number): void;

  aggregated_carbs: any;
  aggregated_proteins: any;
  aggregated_fats: any;
  aggregated_energyKj: any;
  aggregated_energyCal: any;
}
const HARDCODED_U_ID = "7040b96b-0994-4f79-ac7e-6e0299fcad04";

const calculateMacronutrient = (nutrientPer100G: number, weight: number) =>
  (nutrientPer100G / 100) * weight;

const standardMealItem = (food: Food, weight = 100) => ({
  food: food.id,
  weight: weight,
  u_id: HARDCODED_U_ID,
  carbohydrates: calculateMacronutrient(food.carbohydrates, weight),
  proteins: calculateMacronutrient(food.proteins, weight),
  fats: calculateMacronutrient(food.fats, weight),
  energy_cal: calculateMacronutrient(food.energy_cal, weight),
  energy_kj: calculateMacronutrient(food.energy_kj, weight),
});

export function useStore(fetchedFoods: Food[]) {
  const store: State = useLocalStore(() => ({
    name: "",
    setName: (newName) => {
      store.name = newName;
    },

    time: new Date(),
    setTime: (newTime: string) => {
      store.time = newTime;
    },

    foods: fetchedFoods,

    meal_items: [standardMealItem(fetchedFoods[0])],

    add_meal_item: () => {
      store.meal_items.push(standardMealItem(fetchedFoods[0]));
    },
    update_meal_item: ({
      indexOfItem = 0,
      foodId = fetchedFoods[0].id,
      weight = 100,
    }) => {
      const foodById: Food | undefined = fetchedFoods.find(
        (item: Food) => item.id === foodId
      );

      store.meal_items[indexOfItem] = standardMealItem(foodById!, weight);
    },
    remove_meal_item: (indexOfItem: number) => {
      store.meal_items = store.meal_items.filter(
        (item, index) => indexOfItem !== index
      );
    },
    get aggregated_carbs() {
      let initialValue = 0;
      return store.meal_items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.carbohydrates,
        initialValue
      );
    },
    get aggregated_fats() {
      let initialValue = 0;
      return store.meal_items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.fats,
        initialValue
      );
    },
    get aggregated_proteins() {
      let initialValue = 0;
      return store.meal_items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.proteins,
        initialValue
      );
    },
    get aggregated_energyCal() {
      let initialValue = 0;
      return store.meal_items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.energy_cal,
        initialValue
      );
    },
    get aggregated_energyKj() {
      let initialValue = 0;
      return store.meal_items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.energy_kj,
        initialValue
      );
    },
  }));

  return store;
}
