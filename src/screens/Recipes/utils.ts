interface Food {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly food_brand: {
    readonly name: string;
  } | null;
  readonly carbohydrates: number;
  readonly proteins: number;
  readonly fats: number;
  readonly energy_cal: number;
  readonly energy_kj: number;
  readonly u_id: string | null;
  readonly weight: number | null;
}

export const getValueByPortionCoefficient = (
  value: number,
  portionCoefficient: number
) => Math.round(value * portionCoefficient);

export const getNutrientAccordingToWeight = (
  value: number = 0,
  weight: number = 0,
  portionCoefficient: number = 1
) => Math.round(((value / 100) * weight * portionCoefficient * 100) / 100);

export const getRowValues = (
  food: Food,
  weight: number,
  portionCoefficient: number
) => ({
  weight: getValueByPortionCoefficient(weight, portionCoefficient),
  energy_cal: getNutrientAccordingToWeight(
    food?.energy_cal,
    weight,
    portionCoefficient
  ),
  energy_kj: getNutrientAccordingToWeight(
    food?.energy_kj,
    weight,
    portionCoefficient
  ),
  proteins: getNutrientAccordingToWeight(
    food?.proteins,
    weight,
    portionCoefficient
  ),
  carbohydrates: getNutrientAccordingToWeight(
    food?.carbohydrates,
    weight,
    portionCoefficient
  ),
  fats: getNutrientAccordingToWeight(food?.fats, weight, portionCoefficient),
});

// TODO
export const aggregate = (recipeItems: Array<any>, arg: string) => {
  const map = recipeItems.filter((i) => i).map((i) => i[arg]);
  if (map.length > 0) {
    return map.reduce((acc, i) => acc + i);
  }

  return 0;
};
