export type Meal_Item = {
  readonly id: string;
  readonly u_id: string;
  readonly meal_id: string;
  readonly food: string | null;
  readonly foodDesc: {
    readonly id: string;
    readonly name: string;
    readonly energy_cal: number;
    readonly energy_kj: number;
    readonly carbohydrates: number;
    readonly fats: number;
    readonly proteins: number;
  } | null;
  readonly weight: number;
  readonly carbohydrates: number;
  readonly proteins: number;
  readonly fats: number;
  readonly energy_cal: number;
  readonly energy_kj: number;
  readonly recipe_id: string | null;
  readonly recipe: {
    readonly name: string | null;
  } | null;
};
// TODO: naming conventions food= food_id and foodDesc === food

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
