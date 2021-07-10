import { Food, Recipe_Item } from "../../graphql/generated/graphql";

const getValueByPortionCoefficient = (
  value: number,
  portionCoefficient: number
) => value * portionCoefficient;

export const getNutrientAccordingToWeight = (
  value: number = 0,
  weight: number = 0,
  portionCoefficient: number = 1
) => Math.round((value / 100) * weight * portionCoefficient);

export const getRowValues = (
  food: Food,
  weight: number,
  portionCoefficient: number
) => ({
  weight: getNutrientAccordingToWeight(weight, weight, portionCoefficient),
  energy_cal: getNutrientAccordingToWeight(
    food.energy_cal || 0,
    weight,
    portionCoefficient
  ),
  energy_kj: getNutrientAccordingToWeight(
    food.energy_kj || 0,
    weight,
    portionCoefficient
  ),
  proteins: getNutrientAccordingToWeight(
    food.proteins || 0,
    weight,
    portionCoefficient
  ),
  carbohydrates: getNutrientAccordingToWeight(
    food.carbohydrates || 0,
    weight,
    portionCoefficient
  ),
  fats: getNutrientAccordingToWeight(food.fats, weight, portionCoefficient),
});

export const sumByKey = (array: Recipe_Item[], key: string) =>
  array.map((i) => i[key as any]).reduce((a: number, b: number) => a + b, 0);

export const sumByPortionCoefficient = (
  array: Recipe_Item[],
  key: string,
  portionCoefficient: number
) =>
  Math.round(
    getValueByPortionCoefficient(sumByKey(array, key), portionCoefficient)
  );
