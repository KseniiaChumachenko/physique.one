export const getValueByPortionCoefficient = (
  value: number = 0,
  portionCoefficient: number = 1
) => Math.round(value * portionCoefficient);

export const getNutrientAccordingToWeight = (
  value: number = 0,
  weight: number = 0,
  portionCoefficient: number = 1
) => Math.round(((value / 100) * weight * portionCoefficient * 100) / 100);

// TODO
export const aggregate = (recipeItems: Array<any>, arg: string) => {
  const map = recipeItems.filter((i) => i).map((i) => i[arg]);
  if (map.length > 0) {
    return map.reduce((acc, i) => acc + i);
  }

  return 0;
};
