import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  date: any;
  name: any;
  numeric: any;
  time: any;
  uuid: any;
};

/** columns and relationships of "food" */
export type Food = {
  __typename?: "food";
  A?: Maybe<Scalars["numeric"]>;
  B1?: Maybe<Scalars["numeric"]>;
  B12?: Maybe<Scalars["numeric"]>;
  B2?: Maybe<Scalars["numeric"]>;
  B3?: Maybe<Scalars["numeric"]>;
  B5?: Maybe<Scalars["numeric"]>;
  B6?: Maybe<Scalars["numeric"]>;
  B7?: Maybe<Scalars["numeric"]>;
  B9?: Maybe<Scalars["numeric"]>;
  C?: Maybe<Scalars["numeric"]>;
  D?: Maybe<Scalars["numeric"]>;
  E?: Maybe<Scalars["numeric"]>;
  K?: Maybe<Scalars["numeric"]>;
  calcium?: Maybe<Scalars["numeric"]>;
  carbohydrates: Scalars["numeric"];
  carbohydrates_fiber?: Maybe<Scalars["numeric"]>;
  carbohydrates_starch?: Maybe<Scalars["numeric"]>;
  carbohydrates_sugars?: Maybe<Scalars["numeric"]>;
  copper?: Maybe<Scalars["numeric"]>;
  energy_cal: Scalars["numeric"];
  energy_kj: Scalars["numeric"];
  fats: Scalars["numeric"];
  /** An object relationship */
  food_type: Food_Type;
  id: Scalars["uuid"];
  iron?: Maybe<Scalars["numeric"]>;
  magnesium?: Maybe<Scalars["numeric"]>;
  manganese?: Maybe<Scalars["numeric"]>;
  /** An array relationship */
  meal_items: Array<Meal_Item>;
  /** An aggregated array relationship */
  meal_items_aggregate: Meal_Item_Aggregate;
  name: Scalars["bpchar"];
  phosphorus?: Maybe<Scalars["numeric"]>;
  potassium?: Maybe<Scalars["numeric"]>;
  proteins: Scalars["numeric"];
  selenium?: Maybe<Scalars["numeric"]>;
  sodium?: Maybe<Scalars["numeric"]>;
  type: Food_Type_Enum;
  zinc?: Maybe<Scalars["numeric"]>;
};

/** columns and relationships of "food" */
export type FoodMeal_ItemsArgs = {
  distinct_on?: Maybe<Array<Meal_Item_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Item_Order_By>>;
  where?: Maybe<Meal_Item_Bool_Exp>;
};

/** columns and relationships of "food" */
export type FoodMeal_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Meal_Item_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Item_Order_By>>;
  where?: Maybe<Meal_Item_Bool_Exp>;
};

/** aggregated selection of "food" */
export type Food_Aggregate = {
  __typename?: "food_aggregate";
  aggregate?: Maybe<Food_Aggregate_Fields>;
  nodes: Array<Food>;
};

/** aggregate fields of "food" */
export type Food_Aggregate_Fields = {
  __typename?: "food_aggregate_fields";
  avg?: Maybe<Food_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Food_Max_Fields>;
  min?: Maybe<Food_Min_Fields>;
  stddev?: Maybe<Food_Stddev_Fields>;
  stddev_pop?: Maybe<Food_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Food_Stddev_Samp_Fields>;
  sum?: Maybe<Food_Sum_Fields>;
  var_pop?: Maybe<Food_Var_Pop_Fields>;
  var_samp?: Maybe<Food_Var_Samp_Fields>;
  variance?: Maybe<Food_Variance_Fields>;
};

/** aggregate fields of "food" */
export type Food_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Food_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Food_Avg_Fields = {
  __typename?: "food_avg_fields";
  A?: Maybe<Scalars["Float"]>;
  B1?: Maybe<Scalars["Float"]>;
  B12?: Maybe<Scalars["Float"]>;
  B2?: Maybe<Scalars["Float"]>;
  B3?: Maybe<Scalars["Float"]>;
  B5?: Maybe<Scalars["Float"]>;
  B6?: Maybe<Scalars["Float"]>;
  B7?: Maybe<Scalars["Float"]>;
  B9?: Maybe<Scalars["Float"]>;
  C?: Maybe<Scalars["Float"]>;
  D?: Maybe<Scalars["Float"]>;
  E?: Maybe<Scalars["Float"]>;
  K?: Maybe<Scalars["Float"]>;
  calcium?: Maybe<Scalars["Float"]>;
  carbohydrates?: Maybe<Scalars["Float"]>;
  carbohydrates_fiber?: Maybe<Scalars["Float"]>;
  carbohydrates_starch?: Maybe<Scalars["Float"]>;
  carbohydrates_sugars?: Maybe<Scalars["Float"]>;
  copper?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  iron?: Maybe<Scalars["Float"]>;
  magnesium?: Maybe<Scalars["Float"]>;
  manganese?: Maybe<Scalars["Float"]>;
  phosphorus?: Maybe<Scalars["Float"]>;
  potassium?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  selenium?: Maybe<Scalars["Float"]>;
  sodium?: Maybe<Scalars["Float"]>;
  zinc?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Food_Max_Fields = {
  __typename?: "food_max_fields";
  A?: Maybe<Scalars["numeric"]>;
  B1?: Maybe<Scalars["numeric"]>;
  B12?: Maybe<Scalars["numeric"]>;
  B2?: Maybe<Scalars["numeric"]>;
  B3?: Maybe<Scalars["numeric"]>;
  B5?: Maybe<Scalars["numeric"]>;
  B6?: Maybe<Scalars["numeric"]>;
  B7?: Maybe<Scalars["numeric"]>;
  B9?: Maybe<Scalars["numeric"]>;
  C?: Maybe<Scalars["numeric"]>;
  D?: Maybe<Scalars["numeric"]>;
  E?: Maybe<Scalars["numeric"]>;
  K?: Maybe<Scalars["numeric"]>;
  calcium?: Maybe<Scalars["numeric"]>;
  carbohydrates?: Maybe<Scalars["numeric"]>;
  carbohydrates_fiber?: Maybe<Scalars["numeric"]>;
  carbohydrates_starch?: Maybe<Scalars["numeric"]>;
  carbohydrates_sugars?: Maybe<Scalars["numeric"]>;
  copper?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["uuid"]>;
  iron?: Maybe<Scalars["numeric"]>;
  magnesium?: Maybe<Scalars["numeric"]>;
  manganese?: Maybe<Scalars["numeric"]>;
  phosphorus?: Maybe<Scalars["numeric"]>;
  potassium?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  selenium?: Maybe<Scalars["numeric"]>;
  sodium?: Maybe<Scalars["numeric"]>;
  zinc?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type Food_Min_Fields = {
  __typename?: "food_min_fields";
  A?: Maybe<Scalars["numeric"]>;
  B1?: Maybe<Scalars["numeric"]>;
  B12?: Maybe<Scalars["numeric"]>;
  B2?: Maybe<Scalars["numeric"]>;
  B3?: Maybe<Scalars["numeric"]>;
  B5?: Maybe<Scalars["numeric"]>;
  B6?: Maybe<Scalars["numeric"]>;
  B7?: Maybe<Scalars["numeric"]>;
  B9?: Maybe<Scalars["numeric"]>;
  C?: Maybe<Scalars["numeric"]>;
  D?: Maybe<Scalars["numeric"]>;
  E?: Maybe<Scalars["numeric"]>;
  K?: Maybe<Scalars["numeric"]>;
  calcium?: Maybe<Scalars["numeric"]>;
  carbohydrates?: Maybe<Scalars["numeric"]>;
  carbohydrates_fiber?: Maybe<Scalars["numeric"]>;
  carbohydrates_starch?: Maybe<Scalars["numeric"]>;
  carbohydrates_sugars?: Maybe<Scalars["numeric"]>;
  copper?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["uuid"]>;
  iron?: Maybe<Scalars["numeric"]>;
  magnesium?: Maybe<Scalars["numeric"]>;
  manganese?: Maybe<Scalars["numeric"]>;
  phosphorus?: Maybe<Scalars["numeric"]>;
  potassium?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  selenium?: Maybe<Scalars["numeric"]>;
  sodium?: Maybe<Scalars["numeric"]>;
  zinc?: Maybe<Scalars["numeric"]>;
};

/** response of any mutation on the table "food" */
export type Food_Mutation_Response = {
  __typename?: "food_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Food>;
};

/** aggregate stddev on columns */
export type Food_Stddev_Fields = {
  __typename?: "food_stddev_fields";
  A?: Maybe<Scalars["Float"]>;
  B1?: Maybe<Scalars["Float"]>;
  B12?: Maybe<Scalars["Float"]>;
  B2?: Maybe<Scalars["Float"]>;
  B3?: Maybe<Scalars["Float"]>;
  B5?: Maybe<Scalars["Float"]>;
  B6?: Maybe<Scalars["Float"]>;
  B7?: Maybe<Scalars["Float"]>;
  B9?: Maybe<Scalars["Float"]>;
  C?: Maybe<Scalars["Float"]>;
  D?: Maybe<Scalars["Float"]>;
  E?: Maybe<Scalars["Float"]>;
  K?: Maybe<Scalars["Float"]>;
  calcium?: Maybe<Scalars["Float"]>;
  carbohydrates?: Maybe<Scalars["Float"]>;
  carbohydrates_fiber?: Maybe<Scalars["Float"]>;
  carbohydrates_starch?: Maybe<Scalars["Float"]>;
  carbohydrates_sugars?: Maybe<Scalars["Float"]>;
  copper?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  iron?: Maybe<Scalars["Float"]>;
  magnesium?: Maybe<Scalars["Float"]>;
  manganese?: Maybe<Scalars["Float"]>;
  phosphorus?: Maybe<Scalars["Float"]>;
  potassium?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  selenium?: Maybe<Scalars["Float"]>;
  sodium?: Maybe<Scalars["Float"]>;
  zinc?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Food_Stddev_Pop_Fields = {
  __typename?: "food_stddev_pop_fields";
  A?: Maybe<Scalars["Float"]>;
  B1?: Maybe<Scalars["Float"]>;
  B12?: Maybe<Scalars["Float"]>;
  B2?: Maybe<Scalars["Float"]>;
  B3?: Maybe<Scalars["Float"]>;
  B5?: Maybe<Scalars["Float"]>;
  B6?: Maybe<Scalars["Float"]>;
  B7?: Maybe<Scalars["Float"]>;
  B9?: Maybe<Scalars["Float"]>;
  C?: Maybe<Scalars["Float"]>;
  D?: Maybe<Scalars["Float"]>;
  E?: Maybe<Scalars["Float"]>;
  K?: Maybe<Scalars["Float"]>;
  calcium?: Maybe<Scalars["Float"]>;
  carbohydrates?: Maybe<Scalars["Float"]>;
  carbohydrates_fiber?: Maybe<Scalars["Float"]>;
  carbohydrates_starch?: Maybe<Scalars["Float"]>;
  carbohydrates_sugars?: Maybe<Scalars["Float"]>;
  copper?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  iron?: Maybe<Scalars["Float"]>;
  magnesium?: Maybe<Scalars["Float"]>;
  manganese?: Maybe<Scalars["Float"]>;
  phosphorus?: Maybe<Scalars["Float"]>;
  potassium?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  selenium?: Maybe<Scalars["Float"]>;
  sodium?: Maybe<Scalars["Float"]>;
  zinc?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Food_Stddev_Samp_Fields = {
  __typename?: "food_stddev_samp_fields";
  A?: Maybe<Scalars["Float"]>;
  B1?: Maybe<Scalars["Float"]>;
  B12?: Maybe<Scalars["Float"]>;
  B2?: Maybe<Scalars["Float"]>;
  B3?: Maybe<Scalars["Float"]>;
  B5?: Maybe<Scalars["Float"]>;
  B6?: Maybe<Scalars["Float"]>;
  B7?: Maybe<Scalars["Float"]>;
  B9?: Maybe<Scalars["Float"]>;
  C?: Maybe<Scalars["Float"]>;
  D?: Maybe<Scalars["Float"]>;
  E?: Maybe<Scalars["Float"]>;
  K?: Maybe<Scalars["Float"]>;
  calcium?: Maybe<Scalars["Float"]>;
  carbohydrates?: Maybe<Scalars["Float"]>;
  carbohydrates_fiber?: Maybe<Scalars["Float"]>;
  carbohydrates_starch?: Maybe<Scalars["Float"]>;
  carbohydrates_sugars?: Maybe<Scalars["Float"]>;
  copper?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  iron?: Maybe<Scalars["Float"]>;
  magnesium?: Maybe<Scalars["Float"]>;
  manganese?: Maybe<Scalars["Float"]>;
  phosphorus?: Maybe<Scalars["Float"]>;
  potassium?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  selenium?: Maybe<Scalars["Float"]>;
  sodium?: Maybe<Scalars["Float"]>;
  zinc?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Food_Sum_Fields = {
  __typename?: "food_sum_fields";
  A?: Maybe<Scalars["numeric"]>;
  B1?: Maybe<Scalars["numeric"]>;
  B12?: Maybe<Scalars["numeric"]>;
  B2?: Maybe<Scalars["numeric"]>;
  B3?: Maybe<Scalars["numeric"]>;
  B5?: Maybe<Scalars["numeric"]>;
  B6?: Maybe<Scalars["numeric"]>;
  B7?: Maybe<Scalars["numeric"]>;
  B9?: Maybe<Scalars["numeric"]>;
  C?: Maybe<Scalars["numeric"]>;
  D?: Maybe<Scalars["numeric"]>;
  E?: Maybe<Scalars["numeric"]>;
  K?: Maybe<Scalars["numeric"]>;
  calcium?: Maybe<Scalars["numeric"]>;
  carbohydrates?: Maybe<Scalars["numeric"]>;
  carbohydrates_fiber?: Maybe<Scalars["numeric"]>;
  carbohydrates_starch?: Maybe<Scalars["numeric"]>;
  carbohydrates_sugars?: Maybe<Scalars["numeric"]>;
  copper?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  iron?: Maybe<Scalars["numeric"]>;
  magnesium?: Maybe<Scalars["numeric"]>;
  manganese?: Maybe<Scalars["numeric"]>;
  phosphorus?: Maybe<Scalars["numeric"]>;
  potassium?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  selenium?: Maybe<Scalars["numeric"]>;
  sodium?: Maybe<Scalars["numeric"]>;
  zinc?: Maybe<Scalars["numeric"]>;
};

/** columns and relationships of "food_type" */
export type Food_Type = {
  __typename?: "food_type";
  decription: Scalars["String"];
  /** An array relationship */
  food: Array<Food>;
  /** An aggregated array relationship */
  food_aggregate: Food_Aggregate;
  value: Scalars["String"];
};

/** columns and relationships of "food_type" */
export type Food_TypeFoodArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Food_Order_By>>;
  where?: Maybe<Food_Bool_Exp>;
};

/** columns and relationships of "food_type" */
export type Food_TypeFood_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Food_Order_By>>;
  where?: Maybe<Food_Bool_Exp>;
};

/** aggregated selection of "food_type" */
export type Food_Type_Aggregate = {
  __typename?: "food_type_aggregate";
  aggregate?: Maybe<Food_Type_Aggregate_Fields>;
  nodes: Array<Food_Type>;
};

/** aggregate fields of "food_type" */
export type Food_Type_Aggregate_Fields = {
  __typename?: "food_type_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Food_Type_Max_Fields>;
  min?: Maybe<Food_Type_Min_Fields>;
};

/** aggregate fields of "food_type" */
export type Food_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Food_Type_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type Food_Type_Max_Fields = {
  __typename?: "food_type_max_fields";
  decription?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Food_Type_Min_Fields = {
  __typename?: "food_type_min_fields";
  decription?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "food_type" */
export type Food_Type_Mutation_Response = {
  __typename?: "food_type_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Food_Type>;
};

/** aggregate var_pop on columns */
export type Food_Var_Pop_Fields = {
  __typename?: "food_var_pop_fields";
  A?: Maybe<Scalars["Float"]>;
  B1?: Maybe<Scalars["Float"]>;
  B12?: Maybe<Scalars["Float"]>;
  B2?: Maybe<Scalars["Float"]>;
  B3?: Maybe<Scalars["Float"]>;
  B5?: Maybe<Scalars["Float"]>;
  B6?: Maybe<Scalars["Float"]>;
  B7?: Maybe<Scalars["Float"]>;
  B9?: Maybe<Scalars["Float"]>;
  C?: Maybe<Scalars["Float"]>;
  D?: Maybe<Scalars["Float"]>;
  E?: Maybe<Scalars["Float"]>;
  K?: Maybe<Scalars["Float"]>;
  calcium?: Maybe<Scalars["Float"]>;
  carbohydrates?: Maybe<Scalars["Float"]>;
  carbohydrates_fiber?: Maybe<Scalars["Float"]>;
  carbohydrates_starch?: Maybe<Scalars["Float"]>;
  carbohydrates_sugars?: Maybe<Scalars["Float"]>;
  copper?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  iron?: Maybe<Scalars["Float"]>;
  magnesium?: Maybe<Scalars["Float"]>;
  manganese?: Maybe<Scalars["Float"]>;
  phosphorus?: Maybe<Scalars["Float"]>;
  potassium?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  selenium?: Maybe<Scalars["Float"]>;
  sodium?: Maybe<Scalars["Float"]>;
  zinc?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Food_Var_Samp_Fields = {
  __typename?: "food_var_samp_fields";
  A?: Maybe<Scalars["Float"]>;
  B1?: Maybe<Scalars["Float"]>;
  B12?: Maybe<Scalars["Float"]>;
  B2?: Maybe<Scalars["Float"]>;
  B3?: Maybe<Scalars["Float"]>;
  B5?: Maybe<Scalars["Float"]>;
  B6?: Maybe<Scalars["Float"]>;
  B7?: Maybe<Scalars["Float"]>;
  B9?: Maybe<Scalars["Float"]>;
  C?: Maybe<Scalars["Float"]>;
  D?: Maybe<Scalars["Float"]>;
  E?: Maybe<Scalars["Float"]>;
  K?: Maybe<Scalars["Float"]>;
  calcium?: Maybe<Scalars["Float"]>;
  carbohydrates?: Maybe<Scalars["Float"]>;
  carbohydrates_fiber?: Maybe<Scalars["Float"]>;
  carbohydrates_starch?: Maybe<Scalars["Float"]>;
  carbohydrates_sugars?: Maybe<Scalars["Float"]>;
  copper?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  iron?: Maybe<Scalars["Float"]>;
  magnesium?: Maybe<Scalars["Float"]>;
  manganese?: Maybe<Scalars["Float"]>;
  phosphorus?: Maybe<Scalars["Float"]>;
  potassium?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  selenium?: Maybe<Scalars["Float"]>;
  sodium?: Maybe<Scalars["Float"]>;
  zinc?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Food_Variance_Fields = {
  __typename?: "food_variance_fields";
  A?: Maybe<Scalars["Float"]>;
  B1?: Maybe<Scalars["Float"]>;
  B12?: Maybe<Scalars["Float"]>;
  B2?: Maybe<Scalars["Float"]>;
  B3?: Maybe<Scalars["Float"]>;
  B5?: Maybe<Scalars["Float"]>;
  B6?: Maybe<Scalars["Float"]>;
  B7?: Maybe<Scalars["Float"]>;
  B9?: Maybe<Scalars["Float"]>;
  C?: Maybe<Scalars["Float"]>;
  D?: Maybe<Scalars["Float"]>;
  E?: Maybe<Scalars["Float"]>;
  K?: Maybe<Scalars["Float"]>;
  calcium?: Maybe<Scalars["Float"]>;
  carbohydrates?: Maybe<Scalars["Float"]>;
  carbohydrates_fiber?: Maybe<Scalars["Float"]>;
  carbohydrates_starch?: Maybe<Scalars["Float"]>;
  carbohydrates_sugars?: Maybe<Scalars["Float"]>;
  copper?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  iron?: Maybe<Scalars["Float"]>;
  magnesium?: Maybe<Scalars["Float"]>;
  manganese?: Maybe<Scalars["Float"]>;
  phosphorus?: Maybe<Scalars["Float"]>;
  potassium?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  selenium?: Maybe<Scalars["Float"]>;
  sodium?: Maybe<Scalars["Float"]>;
  zinc?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "meal" */
export type Meal = {
  __typename?: "meal";
  /** Aggregation of a macronutrient according to meal_items */
  carbohydrates: Scalars["numeric"];
  date?: Maybe<Scalars["date"]>;
  /** Aggregation of an energy according to meal_items */
  energy_cal: Scalars["numeric"];
  /** Aggregation of an energy according to meal_items */
  energy_kj: Scalars["numeric"];
  /** Aggregation of a macronutrient according to meal_items */
  fats: Scalars["numeric"];
  id: Scalars["uuid"];
  /** An array relationship */
  meal_items: Array<Meal_Item>;
  /** An aggregated array relationship */
  meal_items_aggregate: Meal_Item_Aggregate;
  name?: Maybe<Scalars["String"]>;
  /** Aggregation of a macronutrient according to meal_items */
  proteins: Scalars["numeric"];
  time?: Maybe<Scalars["time"]>;
  u_id?: Maybe<Scalars["uuid"]>;
  /** An object relationship */
  user?: Maybe<Users>;
};

/** columns and relationships of "meal" */
export type MealMeal_ItemsArgs = {
  distinct_on?: Maybe<Array<Meal_Item_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Item_Order_By>>;
  where?: Maybe<Meal_Item_Bool_Exp>;
};

/** columns and relationships of "meal" */
export type MealMeal_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Meal_Item_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Item_Order_By>>;
  where?: Maybe<Meal_Item_Bool_Exp>;
};

/** aggregated selection of "meal" */
export type Meal_Aggregate = {
  __typename?: "meal_aggregate";
  aggregate?: Maybe<Meal_Aggregate_Fields>;
  nodes: Array<Meal>;
};

/** aggregate fields of "meal" */
export type Meal_Aggregate_Fields = {
  __typename?: "meal_aggregate_fields";
  avg?: Maybe<Meal_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Meal_Max_Fields>;
  min?: Maybe<Meal_Min_Fields>;
  stddev?: Maybe<Meal_Stddev_Fields>;
  stddev_pop?: Maybe<Meal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meal_Stddev_Samp_Fields>;
  sum?: Maybe<Meal_Sum_Fields>;
  var_pop?: Maybe<Meal_Var_Pop_Fields>;
  var_samp?: Maybe<Meal_Var_Samp_Fields>;
  variance?: Maybe<Meal_Variance_Fields>;
};

/** aggregate fields of "meal" */
export type Meal_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Meal_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Meal_Avg_Fields = {
  __typename?: "meal_avg_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "meal_item" */
export type Meal_Item = {
  __typename?: "meal_item";
  /** Calculation of a macronutrient according to weight */
  carbohydrates: Scalars["numeric"];
  /** Calculation of an energy according to weight */
  energy_cal: Scalars["numeric"];
  /** Calculation of a macronutrient according to weight */
  energy_kj: Scalars["numeric"];
  /** Calculation of a macronutrient according to weight */
  fats: Scalars["numeric"];
  food: Scalars["uuid"];
  /** An object relationship */
  foodDesc: Food;
  id: Scalars["uuid"];
  /** An object relationship */
  meal: Meal;
  meal_id: Scalars["uuid"];
  /** Calculation of a macronutrient according to weight */
  proteins: Scalars["numeric"];
  u_id: Scalars["uuid"];
  /** An object relationship */
  user: Users;
  weight: Scalars["numeric"];
};

/** aggregated selection of "meal_item" */
export type Meal_Item_Aggregate = {
  __typename?: "meal_item_aggregate";
  aggregate?: Maybe<Meal_Item_Aggregate_Fields>;
  nodes: Array<Meal_Item>;
};

/** aggregate fields of "meal_item" */
export type Meal_Item_Aggregate_Fields = {
  __typename?: "meal_item_aggregate_fields";
  avg?: Maybe<Meal_Item_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Meal_Item_Max_Fields>;
  min?: Maybe<Meal_Item_Min_Fields>;
  stddev?: Maybe<Meal_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Meal_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meal_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Meal_Item_Sum_Fields>;
  var_pop?: Maybe<Meal_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Meal_Item_Var_Samp_Fields>;
  variance?: Maybe<Meal_Item_Variance_Fields>;
};

/** aggregate fields of "meal_item" */
export type Meal_Item_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Meal_Item_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Meal_Item_Avg_Fields = {
  __typename?: "meal_item_avg_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  weight?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Meal_Item_Max_Fields = {
  __typename?: "meal_item_max_fields";
  carbohydrates?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  food?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  meal_id?: Maybe<Scalars["uuid"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  u_id?: Maybe<Scalars["uuid"]>;
  weight?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type Meal_Item_Min_Fields = {
  __typename?: "meal_item_min_fields";
  carbohydrates?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  food?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  meal_id?: Maybe<Scalars["uuid"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  u_id?: Maybe<Scalars["uuid"]>;
  weight?: Maybe<Scalars["numeric"]>;
};

/** response of any mutation on the table "meal_item" */
export type Meal_Item_Mutation_Response = {
  __typename?: "meal_item_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Meal_Item>;
};

/** aggregate stddev on columns */
export type Meal_Item_Stddev_Fields = {
  __typename?: "meal_item_stddev_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  weight?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Meal_Item_Stddev_Pop_Fields = {
  __typename?: "meal_item_stddev_pop_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  weight?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Meal_Item_Stddev_Samp_Fields = {
  __typename?: "meal_item_stddev_samp_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  weight?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Meal_Item_Sum_Fields = {
  __typename?: "meal_item_sum_fields";
  carbohydrates?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  weight?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Meal_Item_Var_Pop_Fields = {
  __typename?: "meal_item_var_pop_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  weight?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Meal_Item_Var_Samp_Fields = {
  __typename?: "meal_item_var_samp_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  weight?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Meal_Item_Variance_Fields = {
  __typename?: "meal_item_variance_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
  weight?: Maybe<Scalars["Float"]>;
};

/** aggregate max on columns */
export type Meal_Max_Fields = {
  __typename?: "meal_max_fields";
  carbohydrates?: Maybe<Scalars["numeric"]>;
  date?: Maybe<Scalars["date"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  u_id?: Maybe<Scalars["uuid"]>;
};

/** aggregate min on columns */
export type Meal_Min_Fields = {
  __typename?: "meal_min_fields";
  carbohydrates?: Maybe<Scalars["numeric"]>;
  date?: Maybe<Scalars["date"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  u_id?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "meal" */
export type Meal_Mutation_Response = {
  __typename?: "meal_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Meal>;
};

/** aggregate stddev on columns */
export type Meal_Stddev_Fields = {
  __typename?: "meal_stddev_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Meal_Stddev_Pop_Fields = {
  __typename?: "meal_stddev_pop_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Meal_Stddev_Samp_Fields = {
  __typename?: "meal_stddev_samp_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Meal_Sum_Fields = {
  __typename?: "meal_sum_fields";
  carbohydrates?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
};

/** aggregate var_pop on columns */
export type Meal_Var_Pop_Fields = {
  __typename?: "meal_var_pop_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Meal_Var_Samp_Fields = {
  __typename?: "meal_var_samp_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Meal_Variance_Fields = {
  __typename?: "meal_variance_fields";
  carbohydrates?: Maybe<Scalars["Float"]>;
  energy_cal?: Maybe<Scalars["Float"]>;
  energy_kj?: Maybe<Scalars["Float"]>;
  fats?: Maybe<Scalars["Float"]>;
  proteins?: Maybe<Scalars["Float"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "food" */
  delete_food?: Maybe<Food_Mutation_Response>;
  /** delete single row from the table: "food" */
  delete_food_by_pk?: Maybe<Food>;
  /** delete data from the table: "food_type" */
  delete_food_type?: Maybe<Food_Type_Mutation_Response>;
  /** delete single row from the table: "food_type" */
  delete_food_type_by_pk?: Maybe<Food_Type>;
  /** delete data from the table: "meal" */
  delete_meal?: Maybe<Meal_Mutation_Response>;
  /** delete single row from the table: "meal" */
  delete_meal_by_pk?: Maybe<Meal>;
  /** delete data from the table: "meal_item" */
  delete_meal_item?: Maybe<Meal_Item_Mutation_Response>;
  /** delete single row from the table: "meal_item" */
  delete_meal_item_by_pk?: Maybe<Meal_Item>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "food" */
  insert_food?: Maybe<Food_Mutation_Response>;
  /** insert a single row into the table: "food" */
  insert_food_one?: Maybe<Food>;
  /** insert data into the table: "food_type" */
  insert_food_type?: Maybe<Food_Type_Mutation_Response>;
  /** insert a single row into the table: "food_type" */
  insert_food_type_one?: Maybe<Food_Type>;
  /** insert data into the table: "meal" */
  insert_meal?: Maybe<Meal_Mutation_Response>;
  /** insert data into the table: "meal_item" */
  insert_meal_item?: Maybe<Meal_Item_Mutation_Response>;
  /** insert a single row into the table: "meal_item" */
  insert_meal_item_one?: Maybe<Meal_Item>;
  /** insert a single row into the table: "meal" */
  insert_meal_one?: Maybe<Meal>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "food" */
  update_food?: Maybe<Food_Mutation_Response>;
  /** update single row of the table: "food" */
  update_food_by_pk?: Maybe<Food>;
  /** update data of the table: "food_type" */
  update_food_type?: Maybe<Food_Type_Mutation_Response>;
  /** update single row of the table: "food_type" */
  update_food_type_by_pk?: Maybe<Food_Type>;
  /** update data of the table: "meal" */
  update_meal?: Maybe<Meal_Mutation_Response>;
  /** update single row of the table: "meal" */
  update_meal_by_pk?: Maybe<Meal>;
  /** update data of the table: "meal_item" */
  update_meal_item?: Maybe<Meal_Item_Mutation_Response>;
  /** update single row of the table: "meal_item" */
  update_meal_item_by_pk?: Maybe<Meal_Item>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_FoodArgs = {
  where: Food_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Food_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Food_TypeArgs = {
  where: Food_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Food_Type_By_PkArgs = {
  value: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_MealArgs = {
  where: Meal_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Meal_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Meal_ItemArgs = {
  where: Meal_Item_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Meal_Item_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_FoodArgs = {
  objects: Array<Food_Insert_Input>;
  on_conflict?: Maybe<Food_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Food_OneArgs = {
  object: Food_Insert_Input;
  on_conflict?: Maybe<Food_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Food_TypeArgs = {
  objects: Array<Food_Type_Insert_Input>;
  on_conflict?: Maybe<Food_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Food_Type_OneArgs = {
  object: Food_Type_Insert_Input;
  on_conflict?: Maybe<Food_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MealArgs = {
  objects: Array<Meal_Insert_Input>;
  on_conflict?: Maybe<Meal_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Meal_ItemArgs = {
  objects: Array<Meal_Item_Insert_Input>;
  on_conflict?: Maybe<Meal_Item_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Meal_Item_OneArgs = {
  object: Meal_Item_Insert_Input;
  on_conflict?: Maybe<Meal_Item_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Meal_OneArgs = {
  object: Meal_Insert_Input;
  on_conflict?: Maybe<Meal_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_FoodArgs = {
  _inc?: Maybe<Food_Inc_Input>;
  _set?: Maybe<Food_Set_Input>;
  where: Food_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Food_By_PkArgs = {
  _inc?: Maybe<Food_Inc_Input>;
  _set?: Maybe<Food_Set_Input>;
  pk_columns: Food_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Food_TypeArgs = {
  _set?: Maybe<Food_Type_Set_Input>;
  where: Food_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Food_Type_By_PkArgs = {
  _set?: Maybe<Food_Type_Set_Input>;
  pk_columns: Food_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MealArgs = {
  _inc?: Maybe<Meal_Inc_Input>;
  _set?: Maybe<Meal_Set_Input>;
  where: Meal_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Meal_By_PkArgs = {
  _inc?: Maybe<Meal_Inc_Input>;
  _set?: Maybe<Meal_Set_Input>;
  pk_columns: Meal_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Meal_ItemArgs = {
  _inc?: Maybe<Meal_Item_Inc_Input>;
  _set?: Maybe<Meal_Item_Set_Input>;
  where: Meal_Item_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Meal_Item_By_PkArgs = {
  _inc?: Maybe<Meal_Item_Inc_Input>;
  _set?: Maybe<Meal_Item_Set_Input>;
  pk_columns: Meal_Item_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "food" */
  food: Array<Food>;
  /** fetch aggregated fields from the table: "food" */
  food_aggregate: Food_Aggregate;
  /** fetch data from the table: "food" using primary key columns */
  food_by_pk?: Maybe<Food>;
  /** fetch data from the table: "food_type" */
  food_type: Array<Food_Type>;
  /** fetch aggregated fields from the table: "food_type" */
  food_type_aggregate: Food_Type_Aggregate;
  /** fetch data from the table: "food_type" using primary key columns */
  food_type_by_pk?: Maybe<Food_Type>;
  /** fetch data from the table: "meal" */
  meal: Array<Meal>;
  /** fetch aggregated fields from the table: "meal" */
  meal_aggregate: Meal_Aggregate;
  /** fetch data from the table: "meal" using primary key columns */
  meal_by_pk?: Maybe<Meal>;
  /** fetch data from the table: "meal_item" */
  meal_item: Array<Meal_Item>;
  /** fetch aggregated fields from the table: "meal_item" */
  meal_item_aggregate: Meal_Item_Aggregate;
  /** fetch data from the table: "meal_item" using primary key columns */
  meal_item_by_pk?: Maybe<Meal_Item>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** query root */
export type Query_RootFoodArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Food_Order_By>>;
  where?: Maybe<Food_Bool_Exp>;
};

/** query root */
export type Query_RootFood_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Food_Order_By>>;
  where?: Maybe<Food_Bool_Exp>;
};

/** query root */
export type Query_RootFood_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootFood_TypeArgs = {
  distinct_on?: Maybe<Array<Food_Type_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Food_Type_Order_By>>;
  where?: Maybe<Food_Type_Bool_Exp>;
};

/** query root */
export type Query_RootFood_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Type_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Food_Type_Order_By>>;
  where?: Maybe<Food_Type_Bool_Exp>;
};

/** query root */
export type Query_RootFood_Type_By_PkArgs = {
  value: Scalars["String"];
};

/** query root */
export type Query_RootMealArgs = {
  distinct_on?: Maybe<Array<Meal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Order_By>>;
  where?: Maybe<Meal_Bool_Exp>;
};

/** query root */
export type Query_RootMeal_AggregateArgs = {
  distinct_on?: Maybe<Array<Meal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Order_By>>;
  where?: Maybe<Meal_Bool_Exp>;
};

/** query root */
export type Query_RootMeal_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootMeal_ItemArgs = {
  distinct_on?: Maybe<Array<Meal_Item_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Item_Order_By>>;
  where?: Maybe<Meal_Item_Bool_Exp>;
};

/** query root */
export type Query_RootMeal_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Meal_Item_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Item_Order_By>>;
  where?: Maybe<Meal_Item_Bool_Exp>;
};

/** query root */
export type Query_RootMeal_Item_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "food" */
  food: Array<Food>;
  /** fetch aggregated fields from the table: "food" */
  food_aggregate: Food_Aggregate;
  /** fetch data from the table: "food" using primary key columns */
  food_by_pk?: Maybe<Food>;
  /** fetch data from the table: "food_type" */
  food_type: Array<Food_Type>;
  /** fetch aggregated fields from the table: "food_type" */
  food_type_aggregate: Food_Type_Aggregate;
  /** fetch data from the table: "food_type" using primary key columns */
  food_type_by_pk?: Maybe<Food_Type>;
  /** fetch data from the table: "meal" */
  meal: Array<Meal>;
  /** fetch aggregated fields from the table: "meal" */
  meal_aggregate: Meal_Aggregate;
  /** fetch data from the table: "meal" using primary key columns */
  meal_by_pk?: Maybe<Meal>;
  /** fetch data from the table: "meal_item" */
  meal_item: Array<Meal_Item>;
  /** fetch aggregated fields from the table: "meal_item" */
  meal_item_aggregate: Meal_Item_Aggregate;
  /** fetch data from the table: "meal_item" using primary key columns */
  meal_item_by_pk?: Maybe<Meal_Item>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type Subscription_RootFoodArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Food_Order_By>>;
  where?: Maybe<Food_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFood_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Food_Order_By>>;
  where?: Maybe<Food_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFood_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootFood_TypeArgs = {
  distinct_on?: Maybe<Array<Food_Type_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Food_Type_Order_By>>;
  where?: Maybe<Food_Type_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFood_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Type_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Food_Type_Order_By>>;
  where?: Maybe<Food_Type_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFood_Type_By_PkArgs = {
  value: Scalars["String"];
};

/** subscription root */
export type Subscription_RootMealArgs = {
  distinct_on?: Maybe<Array<Meal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Order_By>>;
  where?: Maybe<Meal_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMeal_AggregateArgs = {
  distinct_on?: Maybe<Array<Meal_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Order_By>>;
  where?: Maybe<Meal_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMeal_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootMeal_ItemArgs = {
  distinct_on?: Maybe<Array<Meal_Item_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Item_Order_By>>;
  where?: Maybe<Meal_Item_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMeal_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Meal_Item_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Meal_Item_Order_By>>;
  where?: Maybe<Meal_Item_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMeal_Item_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

/**
 * List of users
 *
 *
 * columns and relationships of \"users\"
 */
export type Users = {
  __typename?: "users";
  first_name?: Maybe<Scalars["name"]>;
  id: Scalars["uuid"];
  last_name?: Maybe<Scalars["name"]>;
  user_name: Scalars["name"];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  id?: Maybe<Scalars["uuid"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  id?: Maybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** unique or primary key constraints on table "food" */
export enum Food_Constraint {
  /** unique or primary key constraint */
  FoodPkey = "food_pkey",
}

/** select columns of table "food" */
export enum Food_Select_Column {
  /** column name */
  A = "A",
  /** column name */
  B1 = "B1",
  /** column name */
  B12 = "B12",
  /** column name */
  B2 = "B2",
  /** column name */
  B3 = "B3",
  /** column name */
  B5 = "B5",
  /** column name */
  B6 = "B6",
  /** column name */
  B7 = "B7",
  /** column name */
  B9 = "B9",
  /** column name */
  C = "C",
  /** column name */
  D = "D",
  /** column name */
  E = "E",
  /** column name */
  K = "K",
  /** column name */
  Calcium = "calcium",
  /** column name */
  Carbohydrates = "carbohydrates",
  /** column name */
  CarbohydratesFiber = "carbohydrates_fiber",
  /** column name */
  CarbohydratesStarch = "carbohydrates_starch",
  /** column name */
  CarbohydratesSugars = "carbohydrates_sugars",
  /** column name */
  Copper = "copper",
  /** column name */
  EnergyCal = "energy_cal",
  /** column name */
  EnergyKj = "energy_kj",
  /** column name */
  Fats = "fats",
  /** column name */
  Id = "id",
  /** column name */
  Iron = "iron",
  /** column name */
  Magnesium = "magnesium",
  /** column name */
  Manganese = "manganese",
  /** column name */
  Name = "name",
  /** column name */
  Phosphorus = "phosphorus",
  /** column name */
  Potassium = "potassium",
  /** column name */
  Proteins = "proteins",
  /** column name */
  Selenium = "selenium",
  /** column name */
  Sodium = "sodium",
  /** column name */
  Type = "type",
  /** column name */
  Zinc = "zinc",
}

/** unique or primary key constraints on table "food_type" */
export enum Food_Type_Constraint {
  /** unique or primary key constraint */
  FoodTypePkey = "food_type_pkey",
}

export enum Food_Type_Enum {
  /** Products added by users */
  Custom = "Custom",
  /** Fish are gill-bearing aquatic craniate animals that lack limbs with digits.  */
  Fish = "Fish",
  /** A fruit is the seed-bearing structure in flowering plants (also known as angiosperms) formed from the ovary after flowering. */
  Fruits = "Fruits",
  /** Meat is animal flesh that is eaten as food. */
  Meat = "Meat",
  /** Plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. */
  Vegetables = "Vegetables",
}

/** select columns of table "food_type" */
export enum Food_Type_Select_Column {
  /** column name */
  Decription = "decription",
  /** column name */
  Value = "value",
}

/** update columns of table "food_type" */
export enum Food_Type_Update_Column {
  /** column name */
  Decription = "decription",
  /** column name */
  Value = "value",
}

/** update columns of table "food" */
export enum Food_Update_Column {
  /** column name */
  A = "A",
  /** column name */
  B1 = "B1",
  /** column name */
  B12 = "B12",
  /** column name */
  B2 = "B2",
  /** column name */
  B3 = "B3",
  /** column name */
  B5 = "B5",
  /** column name */
  B6 = "B6",
  /** column name */
  B7 = "B7",
  /** column name */
  B9 = "B9",
  /** column name */
  C = "C",
  /** column name */
  D = "D",
  /** column name */
  E = "E",
  /** column name */
  K = "K",
  /** column name */
  Calcium = "calcium",
  /** column name */
  Carbohydrates = "carbohydrates",
  /** column name */
  CarbohydratesFiber = "carbohydrates_fiber",
  /** column name */
  CarbohydratesStarch = "carbohydrates_starch",
  /** column name */
  CarbohydratesSugars = "carbohydrates_sugars",
  /** column name */
  Copper = "copper",
  /** column name */
  EnergyCal = "energy_cal",
  /** column name */
  EnergyKj = "energy_kj",
  /** column name */
  Fats = "fats",
  /** column name */
  Id = "id",
  /** column name */
  Iron = "iron",
  /** column name */
  Magnesium = "magnesium",
  /** column name */
  Manganese = "manganese",
  /** column name */
  Name = "name",
  /** column name */
  Phosphorus = "phosphorus",
  /** column name */
  Potassium = "potassium",
  /** column name */
  Proteins = "proteins",
  /** column name */
  Selenium = "selenium",
  /** column name */
  Sodium = "sodium",
  /** column name */
  Type = "type",
  /** column name */
  Zinc = "zinc",
}

/** unique or primary key constraints on table "meal" */
export enum Meal_Constraint {
  /** unique or primary key constraint */
  MealPkey1 = "meal_pkey1",
}

/** unique or primary key constraints on table "meal_item" */
export enum Meal_Item_Constraint {
  /** unique or primary key constraint */
  MealItemPkey = "meal_item_pkey",
}

/** select columns of table "meal_item" */
export enum Meal_Item_Select_Column {
  /** column name */
  Carbohydrates = "carbohydrates",
  /** column name */
  EnergyCal = "energy_cal",
  /** column name */
  EnergyKj = "energy_kj",
  /** column name */
  Fats = "fats",
  /** column name */
  Food = "food",
  /** column name */
  Id = "id",
  /** column name */
  MealId = "meal_id",
  /** column name */
  Proteins = "proteins",
  /** column name */
  UId = "u_id",
  /** column name */
  Weight = "weight",
}

/** update columns of table "meal_item" */
export enum Meal_Item_Update_Column {
  /** column name */
  Carbohydrates = "carbohydrates",
  /** column name */
  EnergyCal = "energy_cal",
  /** column name */
  EnergyKj = "energy_kj",
  /** column name */
  Fats = "fats",
  /** column name */
  Food = "food",
  /** column name */
  Id = "id",
  /** column name */
  MealId = "meal_id",
  /** column name */
  Proteins = "proteins",
  /** column name */
  UId = "u_id",
  /** column name */
  Weight = "weight",
}

/** select columns of table "meal" */
export enum Meal_Select_Column {
  /** column name */
  Carbohydrates = "carbohydrates",
  /** column name */
  Date = "date",
  /** column name */
  EnergyCal = "energy_cal",
  /** column name */
  EnergyKj = "energy_kj",
  /** column name */
  Fats = "fats",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Proteins = "proteins",
  /** column name */
  Time = "time",
  /** column name */
  UId = "u_id",
}

/** update columns of table "meal" */
export enum Meal_Update_Column {
  /** column name */
  Carbohydrates = "carbohydrates",
  /** column name */
  Date = "date",
  /** column name */
  EnergyCal = "energy_cal",
  /** column name */
  EnergyKj = "energy_kj",
  /** column name */
  Fats = "fats",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Proteins = "proteins",
  /** column name */
  Time = "time",
  /** column name */
  UId = "u_id",
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = "users_pkey",
  /** unique or primary key constraint */
  UsersUserNameKey = "users_user_name_key",
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  FirstName = "first_name",
  /** column name */
  Id = "id",
  /** column name */
  LastName = "last_name",
  /** column name */
  UserName = "user_name",
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  FirstName = "first_name",
  /** column name */
  Id = "id",
  /** column name */
  LastName = "last_name",
  /** column name */
  UserName = "user_name",
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** expression to compare columns of type bpchar. All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars["bpchar"]>;
  _gt?: Maybe<Scalars["bpchar"]>;
  _gte?: Maybe<Scalars["bpchar"]>;
  _in?: Maybe<Array<Scalars["bpchar"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["bpchar"]>;
  _lte?: Maybe<Scalars["bpchar"]>;
  _neq?: Maybe<Scalars["bpchar"]>;
  _nin?: Maybe<Array<Scalars["bpchar"]>>;
};

/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars["date"]>;
  _gt?: Maybe<Scalars["date"]>;
  _gte?: Maybe<Scalars["date"]>;
  _in?: Maybe<Array<Scalars["date"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["date"]>;
  _lte?: Maybe<Scalars["date"]>;
  _neq?: Maybe<Scalars["date"]>;
  _nin?: Maybe<Array<Scalars["date"]>>;
};

/** order by aggregate values of table "food" */
export type Food_Aggregate_Order_By = {
  avg?: Maybe<Food_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Food_Max_Order_By>;
  min?: Maybe<Food_Min_Order_By>;
  stddev?: Maybe<Food_Stddev_Order_By>;
  stddev_pop?: Maybe<Food_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Food_Stddev_Samp_Order_By>;
  sum?: Maybe<Food_Sum_Order_By>;
  var_pop?: Maybe<Food_Var_Pop_Order_By>;
  var_samp?: Maybe<Food_Var_Samp_Order_By>;
  variance?: Maybe<Food_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "food" */
export type Food_Arr_Rel_Insert_Input = {
  data: Array<Food_Insert_Input>;
  on_conflict?: Maybe<Food_On_Conflict>;
};

/** order by avg() on columns of table "food" */
export type Food_Avg_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "food". All fields are combined with a logical 'AND'. */
export type Food_Bool_Exp = {
  A?: Maybe<Numeric_Comparison_Exp>;
  B1?: Maybe<Numeric_Comparison_Exp>;
  B12?: Maybe<Numeric_Comparison_Exp>;
  B2?: Maybe<Numeric_Comparison_Exp>;
  B3?: Maybe<Numeric_Comparison_Exp>;
  B5?: Maybe<Numeric_Comparison_Exp>;
  B6?: Maybe<Numeric_Comparison_Exp>;
  B7?: Maybe<Numeric_Comparison_Exp>;
  B9?: Maybe<Numeric_Comparison_Exp>;
  C?: Maybe<Numeric_Comparison_Exp>;
  D?: Maybe<Numeric_Comparison_Exp>;
  E?: Maybe<Numeric_Comparison_Exp>;
  K?: Maybe<Numeric_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Food_Bool_Exp>>>;
  _not?: Maybe<Food_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Food_Bool_Exp>>>;
  calcium?: Maybe<Numeric_Comparison_Exp>;
  carbohydrates?: Maybe<Numeric_Comparison_Exp>;
  carbohydrates_fiber?: Maybe<Numeric_Comparison_Exp>;
  carbohydrates_starch?: Maybe<Numeric_Comparison_Exp>;
  carbohydrates_sugars?: Maybe<Numeric_Comparison_Exp>;
  copper?: Maybe<Numeric_Comparison_Exp>;
  energy_cal?: Maybe<Numeric_Comparison_Exp>;
  energy_kj?: Maybe<Numeric_Comparison_Exp>;
  fats?: Maybe<Numeric_Comparison_Exp>;
  food_type?: Maybe<Food_Type_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  iron?: Maybe<Numeric_Comparison_Exp>;
  magnesium?: Maybe<Numeric_Comparison_Exp>;
  manganese?: Maybe<Numeric_Comparison_Exp>;
  meal_items?: Maybe<Meal_Item_Bool_Exp>;
  name?: Maybe<Bpchar_Comparison_Exp>;
  phosphorus?: Maybe<Numeric_Comparison_Exp>;
  potassium?: Maybe<Numeric_Comparison_Exp>;
  proteins?: Maybe<Numeric_Comparison_Exp>;
  selenium?: Maybe<Numeric_Comparison_Exp>;
  sodium?: Maybe<Numeric_Comparison_Exp>;
  type?: Maybe<Food_Type_Enum_Comparison_Exp>;
  zinc?: Maybe<Numeric_Comparison_Exp>;
};

/** input type for incrementing integer column in table "food" */
export type Food_Inc_Input = {
  A?: Maybe<Scalars["numeric"]>;
  B1?: Maybe<Scalars["numeric"]>;
  B12?: Maybe<Scalars["numeric"]>;
  B2?: Maybe<Scalars["numeric"]>;
  B3?: Maybe<Scalars["numeric"]>;
  B5?: Maybe<Scalars["numeric"]>;
  B6?: Maybe<Scalars["numeric"]>;
  B7?: Maybe<Scalars["numeric"]>;
  B9?: Maybe<Scalars["numeric"]>;
  C?: Maybe<Scalars["numeric"]>;
  D?: Maybe<Scalars["numeric"]>;
  E?: Maybe<Scalars["numeric"]>;
  K?: Maybe<Scalars["numeric"]>;
  calcium?: Maybe<Scalars["numeric"]>;
  carbohydrates?: Maybe<Scalars["numeric"]>;
  carbohydrates_fiber?: Maybe<Scalars["numeric"]>;
  carbohydrates_starch?: Maybe<Scalars["numeric"]>;
  carbohydrates_sugars?: Maybe<Scalars["numeric"]>;
  copper?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  iron?: Maybe<Scalars["numeric"]>;
  magnesium?: Maybe<Scalars["numeric"]>;
  manganese?: Maybe<Scalars["numeric"]>;
  phosphorus?: Maybe<Scalars["numeric"]>;
  potassium?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  selenium?: Maybe<Scalars["numeric"]>;
  sodium?: Maybe<Scalars["numeric"]>;
  zinc?: Maybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "food" */
export type Food_Insert_Input = {
  A?: Maybe<Scalars["numeric"]>;
  B1?: Maybe<Scalars["numeric"]>;
  B12?: Maybe<Scalars["numeric"]>;
  B2?: Maybe<Scalars["numeric"]>;
  B3?: Maybe<Scalars["numeric"]>;
  B5?: Maybe<Scalars["numeric"]>;
  B6?: Maybe<Scalars["numeric"]>;
  B7?: Maybe<Scalars["numeric"]>;
  B9?: Maybe<Scalars["numeric"]>;
  C?: Maybe<Scalars["numeric"]>;
  D?: Maybe<Scalars["numeric"]>;
  E?: Maybe<Scalars["numeric"]>;
  K?: Maybe<Scalars["numeric"]>;
  calcium?: Maybe<Scalars["numeric"]>;
  carbohydrates?: Maybe<Scalars["numeric"]>;
  carbohydrates_fiber?: Maybe<Scalars["numeric"]>;
  carbohydrates_starch?: Maybe<Scalars["numeric"]>;
  carbohydrates_sugars?: Maybe<Scalars["numeric"]>;
  copper?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  food_type?: Maybe<Food_Type_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars["uuid"]>;
  iron?: Maybe<Scalars["numeric"]>;
  magnesium?: Maybe<Scalars["numeric"]>;
  manganese?: Maybe<Scalars["numeric"]>;
  meal_items?: Maybe<Meal_Item_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["bpchar"]>;
  phosphorus?: Maybe<Scalars["numeric"]>;
  potassium?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  selenium?: Maybe<Scalars["numeric"]>;
  sodium?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Food_Type_Enum>;
  zinc?: Maybe<Scalars["numeric"]>;
};

/** order by max() on columns of table "food" */
export type Food_Max_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** order by min() on columns of table "food" */
export type Food_Min_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "food" */
export type Food_Obj_Rel_Insert_Input = {
  data: Food_Insert_Input;
  on_conflict?: Maybe<Food_On_Conflict>;
};

/** on conflict condition type for table "food" */
export type Food_On_Conflict = {
  constraint: Food_Constraint;
  update_columns: Array<Food_Update_Column>;
  where?: Maybe<Food_Bool_Exp>;
};

/** ordering options when selecting data from "food" */
export type Food_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  food_type?: Maybe<Food_Type_Order_By>;
  id?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  meal_items_aggregate?: Maybe<Meal_Item_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** primary key columns input for table: "food" */
export type Food_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** input type for updating data in table "food" */
export type Food_Set_Input = {
  A?: Maybe<Scalars["numeric"]>;
  B1?: Maybe<Scalars["numeric"]>;
  B12?: Maybe<Scalars["numeric"]>;
  B2?: Maybe<Scalars["numeric"]>;
  B3?: Maybe<Scalars["numeric"]>;
  B5?: Maybe<Scalars["numeric"]>;
  B6?: Maybe<Scalars["numeric"]>;
  B7?: Maybe<Scalars["numeric"]>;
  B9?: Maybe<Scalars["numeric"]>;
  C?: Maybe<Scalars["numeric"]>;
  D?: Maybe<Scalars["numeric"]>;
  E?: Maybe<Scalars["numeric"]>;
  K?: Maybe<Scalars["numeric"]>;
  calcium?: Maybe<Scalars["numeric"]>;
  carbohydrates?: Maybe<Scalars["numeric"]>;
  carbohydrates_fiber?: Maybe<Scalars["numeric"]>;
  carbohydrates_starch?: Maybe<Scalars["numeric"]>;
  carbohydrates_sugars?: Maybe<Scalars["numeric"]>;
  copper?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["uuid"]>;
  iron?: Maybe<Scalars["numeric"]>;
  magnesium?: Maybe<Scalars["numeric"]>;
  manganese?: Maybe<Scalars["numeric"]>;
  name?: Maybe<Scalars["bpchar"]>;
  phosphorus?: Maybe<Scalars["numeric"]>;
  potassium?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  selenium?: Maybe<Scalars["numeric"]>;
  sodium?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Food_Type_Enum>;
  zinc?: Maybe<Scalars["numeric"]>;
};

/** order by stddev() on columns of table "food" */
export type Food_Stddev_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "food" */
export type Food_Stddev_Pop_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "food" */
export type Food_Stddev_Samp_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** order by sum() on columns of table "food" */
export type Food_Sum_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** order by aggregate values of table "food_type" */
export type Food_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Food_Type_Max_Order_By>;
  min?: Maybe<Food_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "food_type" */
export type Food_Type_Arr_Rel_Insert_Input = {
  data: Array<Food_Type_Insert_Input>;
  on_conflict?: Maybe<Food_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "food_type". All fields are combined with a logical 'AND'. */
export type Food_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Food_Type_Bool_Exp>>>;
  _not?: Maybe<Food_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Food_Type_Bool_Exp>>>;
  decription?: Maybe<String_Comparison_Exp>;
  food?: Maybe<Food_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** expression to compare columns of type food_type_enum. All fields are combined with logical 'AND'. */
export type Food_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Food_Type_Enum>;
  _in?: Maybe<Array<Food_Type_Enum>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Food_Type_Enum>;
  _nin?: Maybe<Array<Food_Type_Enum>>;
};

/** input type for inserting data into table "food_type" */
export type Food_Type_Insert_Input = {
  decription?: Maybe<Scalars["String"]>;
  food?: Maybe<Food_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "food_type" */
export type Food_Type_Max_Order_By = {
  decription?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** order by min() on columns of table "food_type" */
export type Food_Type_Min_Order_By = {
  decription?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "food_type" */
export type Food_Type_Obj_Rel_Insert_Input = {
  data: Food_Type_Insert_Input;
  on_conflict?: Maybe<Food_Type_On_Conflict>;
};

/** on conflict condition type for table "food_type" */
export type Food_Type_On_Conflict = {
  constraint: Food_Type_Constraint;
  update_columns: Array<Food_Type_Update_Column>;
  where?: Maybe<Food_Type_Bool_Exp>;
};

/** ordering options when selecting data from "food_type" */
export type Food_Type_Order_By = {
  decription?: Maybe<Order_By>;
  food_aggregate?: Maybe<Food_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "food_type" */
export type Food_Type_Pk_Columns_Input = {
  value: Scalars["String"];
};

/** input type for updating data in table "food_type" */
export type Food_Type_Set_Input = {
  decription?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by var_pop() on columns of table "food" */
export type Food_Var_Pop_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "food" */
export type Food_Var_Samp_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** order by variance() on columns of table "food" */
export type Food_Variance_Order_By = {
  A?: Maybe<Order_By>;
  B1?: Maybe<Order_By>;
  B12?: Maybe<Order_By>;
  B2?: Maybe<Order_By>;
  B3?: Maybe<Order_By>;
  B5?: Maybe<Order_By>;
  B6?: Maybe<Order_By>;
  B7?: Maybe<Order_By>;
  B9?: Maybe<Order_By>;
  C?: Maybe<Order_By>;
  D?: Maybe<Order_By>;
  E?: Maybe<Order_By>;
  K?: Maybe<Order_By>;
  calcium?: Maybe<Order_By>;
  carbohydrates?: Maybe<Order_By>;
  carbohydrates_fiber?: Maybe<Order_By>;
  carbohydrates_starch?: Maybe<Order_By>;
  carbohydrates_sugars?: Maybe<Order_By>;
  copper?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  iron?: Maybe<Order_By>;
  magnesium?: Maybe<Order_By>;
  manganese?: Maybe<Order_By>;
  phosphorus?: Maybe<Order_By>;
  potassium?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  selenium?: Maybe<Order_By>;
  sodium?: Maybe<Order_By>;
  zinc?: Maybe<Order_By>;
};

/** order by aggregate values of table "meal" */
export type Meal_Aggregate_Order_By = {
  avg?: Maybe<Meal_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Meal_Max_Order_By>;
  min?: Maybe<Meal_Min_Order_By>;
  stddev?: Maybe<Meal_Stddev_Order_By>;
  stddev_pop?: Maybe<Meal_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Meal_Stddev_Samp_Order_By>;
  sum?: Maybe<Meal_Sum_Order_By>;
  var_pop?: Maybe<Meal_Var_Pop_Order_By>;
  var_samp?: Maybe<Meal_Var_Samp_Order_By>;
  variance?: Maybe<Meal_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "meal" */
export type Meal_Arr_Rel_Insert_Input = {
  data: Array<Meal_Insert_Input>;
  on_conflict?: Maybe<Meal_On_Conflict>;
};

/** order by avg() on columns of table "meal" */
export type Meal_Avg_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "meal". All fields are combined with a logical 'AND'. */
export type Meal_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Meal_Bool_Exp>>>;
  _not?: Maybe<Meal_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Meal_Bool_Exp>>>;
  carbohydrates?: Maybe<Numeric_Comparison_Exp>;
  date?: Maybe<Date_Comparison_Exp>;
  energy_cal?: Maybe<Numeric_Comparison_Exp>;
  energy_kj?: Maybe<Numeric_Comparison_Exp>;
  fats?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meal_items?: Maybe<Meal_Item_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  proteins?: Maybe<Numeric_Comparison_Exp>;
  time?: Maybe<Time_Comparison_Exp>;
  u_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** input type for incrementing integer column in table "meal" */
export type Meal_Inc_Input = {
  carbohydrates?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "meal" */
export type Meal_Insert_Input = {
  carbohydrates?: Maybe<Scalars["numeric"]>;
  date?: Maybe<Scalars["date"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["uuid"]>;
  meal_items?: Maybe<Meal_Item_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars["String"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  time?: Maybe<Scalars["time"]>;
  u_id?: Maybe<Scalars["uuid"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** order by aggregate values of table "meal_item" */
export type Meal_Item_Aggregate_Order_By = {
  avg?: Maybe<Meal_Item_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Meal_Item_Max_Order_By>;
  min?: Maybe<Meal_Item_Min_Order_By>;
  stddev?: Maybe<Meal_Item_Stddev_Order_By>;
  stddev_pop?: Maybe<Meal_Item_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Meal_Item_Stddev_Samp_Order_By>;
  sum?: Maybe<Meal_Item_Sum_Order_By>;
  var_pop?: Maybe<Meal_Item_Var_Pop_Order_By>;
  var_samp?: Maybe<Meal_Item_Var_Samp_Order_By>;
  variance?: Maybe<Meal_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "meal_item" */
export type Meal_Item_Arr_Rel_Insert_Input = {
  data: Array<Meal_Item_Insert_Input>;
  on_conflict?: Maybe<Meal_Item_On_Conflict>;
};

/** order by avg() on columns of table "meal_item" */
export type Meal_Item_Avg_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "meal_item". All fields are combined with a logical 'AND'. */
export type Meal_Item_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Meal_Item_Bool_Exp>>>;
  _not?: Maybe<Meal_Item_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Meal_Item_Bool_Exp>>>;
  carbohydrates?: Maybe<Numeric_Comparison_Exp>;
  energy_cal?: Maybe<Numeric_Comparison_Exp>;
  energy_kj?: Maybe<Numeric_Comparison_Exp>;
  fats?: Maybe<Numeric_Comparison_Exp>;
  food?: Maybe<Uuid_Comparison_Exp>;
  foodDesc?: Maybe<Food_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meal?: Maybe<Meal_Bool_Exp>;
  meal_id?: Maybe<Uuid_Comparison_Exp>;
  proteins?: Maybe<Numeric_Comparison_Exp>;
  u_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  weight?: Maybe<Numeric_Comparison_Exp>;
};

/** input type for incrementing integer column in table "meal_item" */
export type Meal_Item_Inc_Input = {
  carbohydrates?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  weight?: Maybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "meal_item" */
export type Meal_Item_Insert_Input = {
  carbohydrates?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  food?: Maybe<Scalars["uuid"]>;
  foodDesc?: Maybe<Food_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars["uuid"]>;
  meal?: Maybe<Meal_Obj_Rel_Insert_Input>;
  meal_id?: Maybe<Scalars["uuid"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  u_id?: Maybe<Scalars["uuid"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  weight?: Maybe<Scalars["numeric"]>;
};

/** order by max() on columns of table "meal_item" */
export type Meal_Item_Max_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  food?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meal_id?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  u_id?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** order by min() on columns of table "meal_item" */
export type Meal_Item_Min_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  food?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meal_id?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  u_id?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "meal_item" */
export type Meal_Item_Obj_Rel_Insert_Input = {
  data: Meal_Item_Insert_Input;
  on_conflict?: Maybe<Meal_Item_On_Conflict>;
};

/** on conflict condition type for table "meal_item" */
export type Meal_Item_On_Conflict = {
  constraint: Meal_Item_Constraint;
  update_columns: Array<Meal_Item_Update_Column>;
  where?: Maybe<Meal_Item_Bool_Exp>;
};

/** ordering options when selecting data from "meal_item" */
export type Meal_Item_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  food?: Maybe<Order_By>;
  foodDesc?: Maybe<Food_Order_By>;
  id?: Maybe<Order_By>;
  meal?: Maybe<Meal_Order_By>;
  meal_id?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  u_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  weight?: Maybe<Order_By>;
};

/** primary key columns input for table: "meal_item" */
export type Meal_Item_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** input type for updating data in table "meal_item" */
export type Meal_Item_Set_Input = {
  carbohydrates?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  food?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  meal_id?: Maybe<Scalars["uuid"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  u_id?: Maybe<Scalars["uuid"]>;
  weight?: Maybe<Scalars["numeric"]>;
};

/** order by stddev() on columns of table "meal_item" */
export type Meal_Item_Stddev_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "meal_item" */
export type Meal_Item_Stddev_Pop_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "meal_item" */
export type Meal_Item_Stddev_Samp_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** order by sum() on columns of table "meal_item" */
export type Meal_Item_Sum_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "meal_item" */
export type Meal_Item_Var_Pop_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "meal_item" */
export type Meal_Item_Var_Samp_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** order by variance() on columns of table "meal_item" */
export type Meal_Item_Variance_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** order by max() on columns of table "meal" */
export type Meal_Max_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  u_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "meal" */
export type Meal_Min_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  u_id?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "meal" */
export type Meal_Obj_Rel_Insert_Input = {
  data: Meal_Insert_Input;
  on_conflict?: Maybe<Meal_On_Conflict>;
};

/** on conflict condition type for table "meal" */
export type Meal_On_Conflict = {
  constraint: Meal_Constraint;
  update_columns: Array<Meal_Update_Column>;
  where?: Maybe<Meal_Bool_Exp>;
};

/** ordering options when selecting data from "meal" */
export type Meal_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meal_items_aggregate?: Maybe<Meal_Item_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
  u_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "meal" */
export type Meal_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** input type for updating data in table "meal" */
export type Meal_Set_Input = {
  carbohydrates?: Maybe<Scalars["numeric"]>;
  date?: Maybe<Scalars["date"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  time?: Maybe<Scalars["time"]>;
  u_id?: Maybe<Scalars["uuid"]>;
};

/** order by stddev() on columns of table "meal" */
export type Meal_Stddev_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
};

/** order by stddev_pop() on columns of table "meal" */
export type Meal_Stddev_Pop_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
};

/** order by stddev_samp() on columns of table "meal" */
export type Meal_Stddev_Samp_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
};

/** order by sum() on columns of table "meal" */
export type Meal_Sum_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
};

/** order by var_pop() on columns of table "meal" */
export type Meal_Var_Pop_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
};

/** order by var_samp() on columns of table "meal" */
export type Meal_Var_Samp_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
};

/** order by variance() on columns of table "meal" */
export type Meal_Variance_Order_By = {
  carbohydrates?: Maybe<Order_By>;
  energy_cal?: Maybe<Order_By>;
  energy_kj?: Maybe<Order_By>;
  fats?: Maybe<Order_By>;
  proteins?: Maybe<Order_By>;
};

/** expression to compare columns of type name. All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: Maybe<Scalars["name"]>;
  _gt?: Maybe<Scalars["name"]>;
  _gte?: Maybe<Scalars["name"]>;
  _in?: Maybe<Array<Scalars["name"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["name"]>;
  _lte?: Maybe<Scalars["name"]>;
  _neq?: Maybe<Scalars["name"]>;
  _nin?: Maybe<Array<Scalars["name"]>>;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars["numeric"]>;
  _gt?: Maybe<Scalars["numeric"]>;
  _gte?: Maybe<Scalars["numeric"]>;
  _in?: Maybe<Array<Scalars["numeric"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["numeric"]>;
  _lte?: Maybe<Scalars["numeric"]>;
  _neq?: Maybe<Scalars["numeric"]>;
  _nin?: Maybe<Array<Scalars["numeric"]>>;
};

/** expression to compare columns of type time. All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: Maybe<Scalars["time"]>;
  _gt?: Maybe<Scalars["time"]>;
  _gte?: Maybe<Scalars["time"]>;
  _in?: Maybe<Array<Scalars["time"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["time"]>;
  _lte?: Maybe<Scalars["time"]>;
  _neq?: Maybe<Scalars["time"]>;
  _nin?: Maybe<Array<Scalars["time"]>>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  first_name?: Maybe<Name_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<Name_Comparison_Exp>;
  user_name?: Maybe<Name_Comparison_Exp>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  first_name?: Maybe<Scalars["name"]>;
  id?: Maybe<Scalars["uuid"]>;
  last_name?: Maybe<Scalars["name"]>;
  user_name?: Maybe<Scalars["name"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  id?: Maybe<Order_By>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  id?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  user_name?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  first_name?: Maybe<Scalars["name"]>;
  id?: Maybe<Scalars["uuid"]>;
  last_name?: Maybe<Scalars["name"]>;
  user_name?: Maybe<Scalars["name"]>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type AddMealMutationVariables = {
  name?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  time?: Maybe<Scalars["time"]>;
  data: Array<Meal_Item_Insert_Input>;
  u_id: Scalars["uuid"];
  carbs?: Maybe<Scalars["numeric"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
};

export type AddMealMutation = { __typename?: "mutation_root" } & {
  insert_meal_one?: Maybe<{ __typename?: "meal" } & Pick<Meal, "name">>;
};

export type DeleteMealByIdMutationVariables = {
  id: Scalars["uuid"];
};

export type DeleteMealByIdMutation = { __typename?: "mutation_root" } & {
  delete_meal_item?: Maybe<
    { __typename?: "meal_item_mutation_response" } & {
      returning: Array<{ __typename?: "meal_item" } & Pick<Meal_Item, "u_id">>;
    }
  >;
  delete_meal_by_pk?: Maybe<{ __typename?: "meal" } & Pick<Meal, "u_id">>;
};

export type AddFoodMutationVariables = {
  name?: Maybe<Scalars["bpchar"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  carbohydrates?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Food_Type_Enum>;
};

export type AddFoodMutation = { __typename?: "mutation_root" } & {
  insert_food?: Maybe<
    { __typename?: "food_mutation_response" } & Pick<
      Food_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type UpdateFoodMutationVariables = {
  id: Scalars["uuid"];
  name?: Maybe<Scalars["bpchar"]>;
  proteins?: Maybe<Scalars["numeric"]>;
  fats?: Maybe<Scalars["numeric"]>;
  energy_kj?: Maybe<Scalars["numeric"]>;
  energy_cal?: Maybe<Scalars["numeric"]>;
  carbohydrates?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Food_Type_Enum>;
};

export type UpdateFoodMutation = { __typename?: "mutation_root" } & {
  update_food_by_pk?: Maybe<{ __typename?: "food" } & Pick<Food, "id">>;
};

export type DeleteFoodMutationVariables = {
  id: Scalars["uuid"];
};

export type DeleteFoodMutation = { __typename?: "mutation_root" } & {
  delete_food_by_pk?: Maybe<{ __typename?: "food" } & Pick<Food, "id">>;
};

export type MealsListingQueryVariables = {};

export type MealsListingQuery = { __typename?: "query_root" } & {
  meal: Array<
    { __typename?: "meal" } & Pick<Meal, "id" | "time" | "name"> & {
        meal_items: Array<
          { __typename?: "meal_item" } & Pick<Meal_Item, "id" | "weight"> & {
              foodDesc: { __typename?: "food" } & Pick<
                Food,
                | "id"
                | "name"
                | "energy_cal"
                | "energy_kj"
                | "carbohydrates"
                | "fats"
                | "proteins"
              >;
            }
        >;
      }
  >;
};

export type MealsByDateQueryVariables = {
  _eq?: Maybe<Scalars["date"]>;
};

export type MealsByDateQuery = { __typename?: "query_root" } & {
  meal_aggregate: { __typename?: "meal_aggregate" } & {
    aggregate?: Maybe<
      { __typename?: "meal_aggregate_fields" } & {
        sum?: Maybe<
          { __typename?: "meal_sum_fields" } & Pick<
            Meal_Sum_Fields,
            "energy_cal" | "energy_kj" | "carbohydrates" | "proteins" | "fats"
          >
        >;
      }
    >;
    nodes: Array<
      { __typename?: "meal" } & Pick<Meal, "id" | "date" | "time" | "name"> & {
          meal_items_aggregate: { __typename?: "meal_item_aggregate" } & {
            aggregate?: Maybe<
              { __typename?: "meal_item_aggregate_fields" } & {
                sum?: Maybe<
                  { __typename?: "meal_item_sum_fields" } & Pick<
                    Meal_Item_Sum_Fields,
                    | "energy_cal"
                    | "energy_kj"
                    | "carbohydrates"
                    | "proteins"
                    | "fats"
                  >
                >;
              }
            >;
            nodes: Array<
              { __typename?: "meal_item" } & Pick<
                Meal_Item,
                "id" | "weight"
              > & {
                  foodDesc: { __typename?: "food" } & Pick<
                    Food,
                    | "id"
                    | "name"
                    | "energy_cal"
                    | "energy_kj"
                    | "carbohydrates"
                    | "fats"
                    | "proteins"
                  >;
                }
            >;
          };
        }
    >;
  };
};

export type MealByIdQueryVariables = {
  id: Scalars["uuid"];
};

export type MealByIdQuery = { __typename?: "query_root" } & {
  meal_by_pk?: Maybe<
    { __typename?: "meal" } & Pick<Meal, "time" | "name" | "date"> & {
        meal_items: Array<
          { __typename?: "meal_item" } & Pick<
            Meal_Item,
            | "carbohydrates"
            | "energy_cal"
            | "energy_kj"
            | "fats"
            | "food"
            | "id"
            | "meal_id"
            | "proteins"
            | "weight"
          >
        >;
      }
  >;
};

export type FoodSelectFieldListingQueryVariables = {};

export type FoodSelectFieldListingQuery = { __typename?: "query_root" } & {
  food: Array<
    { __typename?: "food" } & Pick<
      Food,
      | "id"
      | "name"
      | "type"
      | "carbohydrates"
      | "proteins"
      | "fats"
      | "energy_cal"
      | "energy_kj"
    >
  >;
};

export const AddMealDocument = gql`
  mutation AddMeal(
    $name: String
    $date: date
    $time: time
    $data: [meal_item_insert_input!]!
    $u_id: uuid!
    $carbs: numeric
    $proteins: numeric
    $fats: numeric
    $energy_cal: numeric
    $energy_kj: numeric
  ) {
    insert_meal_one(
      object: {
        date: $date
        time: $time
        meal_items: { data: $data }
        name: $name
        u_id: $u_id
        carbohydrates: $carbs
        proteins: $proteins
        fats: $fats
        energy_cal: $energy_cal
        energy_kj: $energy_kj
      }
    ) {
      name
    }
  }
`;
export function useAddMealMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddMealMutation,
    AddMealMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddMealMutation,
    AddMealMutationVariables
  >(AddMealDocument, baseOptions);
}
export type AddMealMutationHookResult = ReturnType<typeof useAddMealMutation>;
export type AddMealMutationResult = ApolloReactCommon.MutationResult<
  AddMealMutation
>;
export type AddMealMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddMealMutation,
  AddMealMutationVariables
>;
export const DeleteMealByIdDocument = gql`
  mutation DeleteMealById($id: uuid!) {
    delete_meal_item(where: { meal_id: { _eq: $id } }) {
      returning {
        u_id
      }
    }
    delete_meal_by_pk(id: $id) {
      u_id
    }
  }
`;
export function useDeleteMealByIdMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteMealByIdMutation,
    DeleteMealByIdMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteMealByIdMutation,
    DeleteMealByIdMutationVariables
  >(DeleteMealByIdDocument, baseOptions);
}
export type DeleteMealByIdMutationHookResult = ReturnType<
  typeof useDeleteMealByIdMutation
>;
export type DeleteMealByIdMutationResult = ApolloReactCommon.MutationResult<
  DeleteMealByIdMutation
>;
export type DeleteMealByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteMealByIdMutation,
  DeleteMealByIdMutationVariables
>;
export const AddFoodDocument = gql`
  mutation AddFood(
    $name: bpchar
    $proteins: numeric
    $fats: numeric
    $energy_kj: numeric
    $energy_cal: numeric
    $carbohydrates: numeric
    $type: food_type_enum
  ) {
    insert_food(
      objects: {
        name: $name
        type: $type
        energy_cal: $energy_cal
        energy_kj: $energy_kj
        proteins: $proteins
        carbohydrates: $carbohydrates
        fats: $fats
      }
    ) {
      affected_rows
    }
  }
`;
export function useAddFoodMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddFoodMutation,
    AddFoodMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddFoodMutation,
    AddFoodMutationVariables
  >(AddFoodDocument, baseOptions);
}
export type AddFoodMutationHookResult = ReturnType<typeof useAddFoodMutation>;
export type AddFoodMutationResult = ApolloReactCommon.MutationResult<
  AddFoodMutation
>;
export type AddFoodMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddFoodMutation,
  AddFoodMutationVariables
>;
export const UpdateFoodDocument = gql`
  mutation UpdateFood(
    $id: uuid!
    $name: bpchar
    $proteins: numeric
    $fats: numeric
    $energy_kj: numeric
    $energy_cal: numeric
    $carbohydrates: numeric
    $type: food_type_enum
  ) {
    update_food_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        energy_cal: $energy_cal
        energy_kj: $energy_kj
        proteins: $proteins
        type: $type
        fats: $fats
        carbohydrates: $carbohydrates
      }
    ) {
      id
    }
  }
`;
export function useUpdateFoodMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateFoodMutation,
    UpdateFoodMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateFoodMutation,
    UpdateFoodMutationVariables
  >(UpdateFoodDocument, baseOptions);
}
export type UpdateFoodMutationHookResult = ReturnType<
  typeof useUpdateFoodMutation
>;
export type UpdateFoodMutationResult = ApolloReactCommon.MutationResult<
  UpdateFoodMutation
>;
export type UpdateFoodMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateFoodMutation,
  UpdateFoodMutationVariables
>;
export const DeleteFoodDocument = gql`
  mutation DeleteFood($id: uuid!) {
    delete_food_by_pk(id: $id) {
      id
    }
  }
`;
export function useDeleteFoodMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteFoodMutation,
    DeleteFoodMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteFoodMutation,
    DeleteFoodMutationVariables
  >(DeleteFoodDocument, baseOptions);
}
export type DeleteFoodMutationHookResult = ReturnType<
  typeof useDeleteFoodMutation
>;
export type DeleteFoodMutationResult = ApolloReactCommon.MutationResult<
  DeleteFoodMutation
>;
export type DeleteFoodMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteFoodMutation,
  DeleteFoodMutationVariables
>;
export const MealsListingDocument = gql`
  query MealsListing {
    meal {
      id
      time
      name
      meal_items {
        id
        foodDesc {
          id
          name
          energy_cal
          energy_kj
          carbohydrates
          fats
          proteins
        }
        weight
      }
    }
  }
`;
export function useMealsListingQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MealsListingQuery,
    MealsListingQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    MealsListingQuery,
    MealsListingQueryVariables
  >(MealsListingDocument, baseOptions);
}
export function useMealsListingLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MealsListingQuery,
    MealsListingQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    MealsListingQuery,
    MealsListingQueryVariables
  >(MealsListingDocument, baseOptions);
}
export type MealsListingQueryHookResult = ReturnType<
  typeof useMealsListingQuery
>;
export type MealsListingLazyQueryHookResult = ReturnType<
  typeof useMealsListingLazyQuery
>;
export type MealsListingQueryResult = ApolloReactCommon.QueryResult<
  MealsListingQuery,
  MealsListingQueryVariables
>;
export const MealsByDateDocument = gql`
  query MealsByDate($_eq: date = "") {
    meal_aggregate(where: { date: { _eq: $_eq } }) {
      aggregate {
        sum {
          energy_cal
          energy_kj
          carbohydrates
          proteins
          fats
        }
      }
      nodes {
        id
        date
        time
        name
        meal_items_aggregate {
          aggregate {
            sum {
              energy_cal
              energy_kj
              carbohydrates
              proteins
              fats
            }
          }
          nodes {
            id
            foodDesc {
              id
              name
              energy_cal
              energy_kj
              carbohydrates
              fats
              proteins
            }
            weight
          }
        }
      }
    }
  }
`;
export function useMealsByDateQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MealsByDateQuery,
    MealsByDateQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<MealsByDateQuery, MealsByDateQueryVariables>(
    MealsByDateDocument,
    baseOptions
  );
}
export function useMealsByDateLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MealsByDateQuery,
    MealsByDateQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    MealsByDateQuery,
    MealsByDateQueryVariables
  >(MealsByDateDocument, baseOptions);
}
export type MealsByDateQueryHookResult = ReturnType<typeof useMealsByDateQuery>;
export type MealsByDateLazyQueryHookResult = ReturnType<
  typeof useMealsByDateLazyQuery
>;
export type MealsByDateQueryResult = ApolloReactCommon.QueryResult<
  MealsByDateQuery,
  MealsByDateQueryVariables
>;
export const MealByIdDocument = gql`
  query MealById($id: uuid!) {
    meal_by_pk(id: $id) {
      time
      name
      date
      meal_items {
        carbohydrates
        energy_cal
        energy_kj
        fats
        food
        id
        meal_id
        proteins
        weight
      }
    }
  }
`;
export function useMealByIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    MealByIdQuery,
    MealByIdQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<MealByIdQuery, MealByIdQueryVariables>(
    MealByIdDocument,
    baseOptions
  );
}
export function useMealByIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MealByIdQuery,
    MealByIdQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<MealByIdQuery, MealByIdQueryVariables>(
    MealByIdDocument,
    baseOptions
  );
}
export type MealByIdQueryHookResult = ReturnType<typeof useMealByIdQuery>;
export type MealByIdLazyQueryHookResult = ReturnType<
  typeof useMealByIdLazyQuery
>;
export type MealByIdQueryResult = ApolloReactCommon.QueryResult<
  MealByIdQuery,
  MealByIdQueryVariables
>;
export const FoodSelectFieldListingDocument = gql`
  query FoodSelectFieldListing {
    food {
      id
      name
      type
      carbohydrates
      proteins
      fats
      energy_cal
      energy_kj
    }
  }
`;
export function useFoodSelectFieldListingQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FoodSelectFieldListingQuery,
    FoodSelectFieldListingQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    FoodSelectFieldListingQuery,
    FoodSelectFieldListingQueryVariables
  >(FoodSelectFieldListingDocument, baseOptions);
}
export function useFoodSelectFieldListingLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FoodSelectFieldListingQuery,
    FoodSelectFieldListingQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    FoodSelectFieldListingQuery,
    FoodSelectFieldListingQueryVariables
  >(FoodSelectFieldListingDocument, baseOptions);
}
export type FoodSelectFieldListingQueryHookResult = ReturnType<
  typeof useFoodSelectFieldListingQuery
>;
export type FoodSelectFieldListingLazyQueryHookResult = ReturnType<
  typeof useFoodSelectFieldListingLazyQuery
>;
export type FoodSelectFieldListingQueryResult = ApolloReactCommon.QueryResult<
  FoodSelectFieldListingQuery,
  FoodSelectFieldListingQueryVariables
>;
