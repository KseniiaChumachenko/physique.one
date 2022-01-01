import { useLocalObservable } from "mobx-react-lite";
import moment, { Moment } from "moment";
import { v4 } from "uuid";
import { meal_item_insert_input } from "src/api-hooks/mealsByDate";
import { FoodQueryResponse } from "src/api-hooks/food";
import { Meal_Item } from "../../../graphql/generated/graphql";

interface State {
  name?: string | null;
  setName(newName: string): void;

  time?: any;
  setTime(newTime: Moment): void;

  foods: FoodQueryResponse;

  meal_items: meal_item_insert_input[];
  add_meal_item(): void;
  update_meal_item({
    indexOfItem,
    food,
    weight,
  }: {
    indexOfItem?: number;
    food?: Meal_Item;
    weight?: number;
  }): void;
  remove_meal_item(id: string): void;
}

const calculateMacronutrient = (
  nutrientPer100G: number | null | undefined,
  foodWeight: number,
  weight: number
) => ((nutrientPer100G || 0) / foodWeight) * weight;

//TODO Duplicate of logic in MealItemDialog
const standardMealItem = (food: meal_item_insert_input, weight = 100) => ({
  id: v4(),
  food: food.recipe_id ? null : food?.food || food?.id,
  recipe_id: food.recipe_id ?? null,
  weight: weight,
  carbohydrates: calculateMacronutrient(
    food.carbohydrates,
    food.weight || 100,
    weight
  ),
  proteins: calculateMacronutrient(food.proteins, food.weight || 100, weight),
  fats: calculateMacronutrient(food.fats, food.weight || 100, weight),
  energy_cal: calculateMacronutrient(
    food.energy_cal,
    food.weight || 100,
    weight
  ),
  energy_kj: calculateMacronutrient(food.energy_kj, food.weight || 100, weight),
});

export function useStore(
  fetchedFoods: FoodQueryResponse,
  name?: string | null,
  meal_items?: Meal_Item[]
) {
  const store: State = useLocalObservable(() => ({
    name: name,
    setName: (newName) => {
      store.name = newName;
    },

    time: moment(),
    setTime: (newTime) => {
      store.time = newTime;
    },

    foods: fetchedFoods,

    meal_items: meal_items || [
      standardMealItem(fetchedFoods.food_connection.edges[0]?.node),
    ],

    add_meal_item: () => {
      store.meal_items.push(
        standardMealItem(fetchedFoods.food_connection.edges[0]?.node)
      );
    },
    update_meal_item: ({ indexOfItem = 0, food, weight }) => {
      store.meal_items[indexOfItem] = standardMealItem(
        food || (store.meal_items[indexOfItem] as any),
        weight || store.meal_items[indexOfItem].weight || 100
      ) as any;
    },
    //TODO: broken
    remove_meal_item: (id: string) => {
      store.meal_items = store.meal_items.filter((item) => id !== item.id);
    },
  }));

  return store;
}
