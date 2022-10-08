import { v4 } from "uuid";
import { meal_item_insert_input } from "src/api-hooks/mealsByDate";
import { FoodQuery$data } from "src/api-hooks/food";
import { useReducer } from "react";

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

type UpdateProps = {
  indexOfItem: number;
  food?: meal_item_insert_input;
  weight?: number;
};
type RemoveProps = {
  id: string;
};

const reducer = (
  state: meal_item_insert_input[],
  action: {
    type: "add" | "update" | "remove";
    payload: {
      data: {
        foods: FoodQuery$data;
      };
      updateProps?: UpdateProps;
      removeProps?: RemoveProps;
    };
  }
): meal_item_insert_input[] => {
  const defaultFood = action.payload.data.foods.food_connection.edges[0]?.node;

  const updateIndex = action.payload.updateProps?.indexOfItem || 0;
  const updateFood = action.payload.updateProps?.food || defaultFood;
  const updateWeight = action.payload.updateProps?.weight || 100;

  const removeId = action.payload.removeProps?.id;

  switch (action.type) {
    case "add":
      return [...(state.length ? state : []), standardMealItem(defaultFood)];
    case "update":
      return state.map((i, key) =>
        key === updateIndex ? standardMealItem(updateFood, updateWeight) : i
      );
    case "remove":
      return state.filter((i) => removeId != i.id);
    default:
      throw new Error();
  }
};

export const useStore = (foods: FoodQuery$data) => {
  const [state, dispatch] = useReducer(reducer, [
    standardMealItem(foods.food_connection.edges[0]?.node),
  ]);

  const handleAddItem = () =>
    dispatch({ type: "add", payload: { data: { foods } } });
  const handleUpdateItem = (updateProps: UpdateProps) =>
    dispatch({ type: "update", payload: { data: { foods }, updateProps } });
  const handleRemoveItem = (removeProps: RemoveProps) =>
    dispatch({ type: "remove", payload: { data: { foods }, removeProps } });

  return {
    state,
    handleAddItem,
    handleUpdateItem,
    handleRemoveItem,
  };
};
