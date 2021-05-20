import omit from "lodash.omit";
import { useLocalObservable } from "mobx-react-lite";
import moment, { Moment } from "moment";
import { v4 } from "uuid";
import {
  Food,
  Meal_Item_Insert_Input,
} from "../../../graphql/generated/graphql";

interface State {
  name?: string | null;
  setName(newName: string): void;

  time?: any;
  setTime(newTime: Moment): void;

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
  remove_meal_item(id: string): void;
}

const calculateMacronutrient = (nutrientPer100G: number, weight: number) =>
  (nutrientPer100G / 100) * weight;

const standardMealItem = (food: Food, weight = 100) => ({
  id: v4(),
  food: food.id,
  weight: weight,
  carbohydrates: calculateMacronutrient(food.carbohydrates, weight),
  proteins: calculateMacronutrient(food.proteins, weight),
  fats: calculateMacronutrient(food.fats, weight),
  energy_cal: calculateMacronutrient(food.energy_cal, weight),
  energy_kj: calculateMacronutrient(food.energy_kj, weight),
});

export function useStore(
  fetchedFoods: Food[],
  name?: string | null,
  date?: any,
  time?: any,
  meal_items?: Meal_Item_Insert_Input[]
) {
  const store: State = useLocalObservable(() => ({
    name: name,
    setName: (newName) => {
      store.name = newName;
    },

    time: moment(time + " " + date).format() || new Date(),
    setTime: (newTime) => {
      store.time = newTime;
    },

    foods: fetchedFoods,

    meal_items: meal_items?.map((item) => omit(item, "__typename")) || [
      standardMealItem(fetchedFoods[0]),
    ],

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
    //TODO: broken
    remove_meal_item: (id: string) => {
      store.meal_items = store.meal_items.filter((item) => id !== item.id);
    },
  }));

  return store;
}
