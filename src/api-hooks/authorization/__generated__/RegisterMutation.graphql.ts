/**
 * @generated SignedSource<<3c06b9e11167a459bfe625a9c33b370f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type food_brand_constraint = "food_brand_name_key" | "food_brand_pkey" | "%future added value";
export type food_brand_update_column = "id" | "name" | "%future added value";
export type food_constraint = "food_pkey" | "%future added value";
export type food_type_constraint = "food_type_pkey" | "%future added value";
export type food_type_update_column = "decription" | "img_url" | "value" | "%future added value";
export type food_update_column = "A" | "B1" | "B12" | "B2" | "B3" | "B5" | "B6" | "B7" | "B9" | "C" | "D" | "E" | "K" | "brand_id" | "calcium" | "carbohydrates" | "carbohydrates_fiber" | "carbohydrates_starch" | "carbohydrates_sugars" | "copper" | "energy_cal" | "energy_kj" | "fats" | "id" | "iron" | "magnesium" | "manganese" | "name" | "phosphorus" | "potassium" | "proteins" | "selenium" | "sodium" | "type" | "u_id" | "weight" | "zinc" | "%future added value";
export type meal_constraint = "meal_pkey1" | "%future added value";
export type meal_item_constraint = "meal_item_pkey" | "%future added value";
export type meal_item_update_column = "carbohydrates" | "energy_cal" | "energy_kj" | "fats" | "food" | "id" | "meal_id" | "proteins" | "recipe_id" | "u_id" | "weight" | "%future added value";
export type meal_update_column = "date" | "id" | "name" | "time" | "u_id" | "%future added value";
export type pantry_user_constraint = "pantry_user_pkey" | "%future added value";
export type pantry_user_update_column = "id" | "pantry_id" | "user_id" | "%future added value";
export type recipe_constraint = "recipe_increment_key" | "recipe_pkey" | "%future added value";
export type recipe_item_constraint = "recipe_item_pkey" | "%future added value";
export type recipe_item_update_column = "carbohydrates" | "energy_cal" | "energy_kj" | "fats" | "food_id" | "id" | "proteins" | "recipe_id" | "u_id" | "weight" | "%future added value";
export type recipe_update_column = "description" | "id" | "increment" | "link" | "name" | "portions" | "u_id" | "%future added value";
export type users_constraint = "users_email_key" | "users_fb_id_key" | "users_fb_picture_url_key" | "users_password_key" | "users_pkey" | "users_user_name_key" | "%future added value";
export type users_update_column = "email" | "fb_id" | "fb_picture_url" | "first_name" | "full_name" | "id" | "last_name" | "password" | "user_name" | "%future added value";
export type users_insert_input = {
  email?: string | null;
  fb_id?: string | null;
  fb_picture_url?: string | null;
  first_name?: string | null;
  food?: food_arr_rel_insert_input | null;
  full_name?: string | null;
  id?: string | null;
  last_name?: string | null;
  meal_items?: meal_item_arr_rel_insert_input | null;
  meals?: meal_arr_rel_insert_input | null;
  pantry?: pantry_user_arr_rel_insert_input | null;
  password?: string | null;
  recipe_items?: recipe_item_arr_rel_insert_input | null;
  recipes?: recipe_arr_rel_insert_input | null;
  user_name?: string | null;
};
export type food_arr_rel_insert_input = {
  data: ReadonlyArray<food_insert_input>;
  on_conflict?: food_on_conflict | null;
};
export type food_insert_input = {
  A?: number | null;
  B1?: number | null;
  B12?: number | null;
  B2?: number | null;
  B3?: number | null;
  B5?: number | null;
  B6?: number | null;
  B7?: number | null;
  B9?: number | null;
  C?: number | null;
  D?: number | null;
  E?: number | null;
  K?: number | null;
  brand_id?: string | null;
  calcium?: number | null;
  carbohydrates?: number | null;
  carbohydrates_fiber?: number | null;
  carbohydrates_starch?: number | null;
  carbohydrates_sugars?: number | null;
  copper?: number | null;
  energy_cal?: number | null;
  energy_kj?: number | null;
  fats?: number | null;
  food_brand?: food_brand_obj_rel_insert_input | null;
  food_type?: food_type_obj_rel_insert_input | null;
  id?: string | null;
  iron?: number | null;
  magnesium?: number | null;
  manganese?: number | null;
  meal_items?: meal_item_arr_rel_insert_input | null;
  name?: string | null;
  phosphorus?: number | null;
  potassium?: number | null;
  proteins?: number | null;
  recipe_items?: recipe_item_arr_rel_insert_input | null;
  selenium?: number | null;
  sodium?: number | null;
  type?: string | null;
  u_id?: string | null;
  user?: users_obj_rel_insert_input | null;
  weight?: number | null;
  zinc?: number | null;
};
export type food_brand_obj_rel_insert_input = {
  data: food_brand_insert_input;
  on_conflict?: food_brand_on_conflict | null;
};
export type food_brand_insert_input = {
  id?: string | null;
  name?: string | null;
};
export type food_brand_on_conflict = {
  constraint: food_brand_constraint;
  update_columns: ReadonlyArray<food_brand_update_column>;
  where?: food_brand_bool_exp | null;
};
export type food_brand_bool_exp = {
  _and?: ReadonlyArray<food_brand_bool_exp | null> | null;
  _not?: food_brand_bool_exp | null;
  _or?: ReadonlyArray<food_brand_bool_exp | null> | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
};
export type uuid_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _in?: ReadonlyArray<string> | null;
  _is_null?: boolean | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nin?: ReadonlyArray<string> | null;
};
export type String_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: ReadonlyArray<string> | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: ReadonlyArray<string> | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
};
export type food_type_obj_rel_insert_input = {
  data: food_type_insert_input;
  on_conflict?: food_type_on_conflict | null;
};
export type food_type_insert_input = {
  decription?: string | null;
  food?: food_arr_rel_insert_input | null;
  img_url?: string | null;
  value?: string | null;
};
export type food_type_on_conflict = {
  constraint: food_type_constraint;
  update_columns: ReadonlyArray<food_type_update_column>;
  where?: food_type_bool_exp | null;
};
export type food_type_bool_exp = {
  _and?: ReadonlyArray<food_type_bool_exp | null> | null;
  _not?: food_type_bool_exp | null;
  _or?: ReadonlyArray<food_type_bool_exp | null> | null;
  decription?: String_comparison_exp | null;
  food?: food_bool_exp | null;
  img_url?: String_comparison_exp | null;
  value?: String_comparison_exp | null;
};
export type food_bool_exp = {
  A?: numeric_comparison_exp | null;
  B1?: numeric_comparison_exp | null;
  B12?: numeric_comparison_exp | null;
  B2?: numeric_comparison_exp | null;
  B3?: numeric_comparison_exp | null;
  B5?: numeric_comparison_exp | null;
  B6?: numeric_comparison_exp | null;
  B7?: numeric_comparison_exp | null;
  B9?: numeric_comparison_exp | null;
  C?: numeric_comparison_exp | null;
  D?: numeric_comparison_exp | null;
  E?: numeric_comparison_exp | null;
  K?: numeric_comparison_exp | null;
  _and?: ReadonlyArray<food_bool_exp | null> | null;
  _not?: food_bool_exp | null;
  _or?: ReadonlyArray<food_bool_exp | null> | null;
  brand_id?: uuid_comparison_exp | null;
  calcium?: numeric_comparison_exp | null;
  carbohydrates?: numeric_comparison_exp | null;
  carbohydrates_fiber?: numeric_comparison_exp | null;
  carbohydrates_starch?: numeric_comparison_exp | null;
  carbohydrates_sugars?: numeric_comparison_exp | null;
  copper?: numeric_comparison_exp | null;
  energy_cal?: numeric_comparison_exp | null;
  energy_kj?: numeric_comparison_exp | null;
  fats?: numeric_comparison_exp | null;
  food_brand?: food_brand_bool_exp | null;
  food_type?: food_type_bool_exp | null;
  id?: uuid_comparison_exp | null;
  iron?: numeric_comparison_exp | null;
  magnesium?: numeric_comparison_exp | null;
  manganese?: numeric_comparison_exp | null;
  meal_items?: meal_item_bool_exp | null;
  name?: String_comparison_exp | null;
  phosphorus?: numeric_comparison_exp | null;
  potassium?: numeric_comparison_exp | null;
  proteins?: numeric_comparison_exp | null;
  recipe_items?: recipe_item_bool_exp | null;
  selenium?: numeric_comparison_exp | null;
  sodium?: numeric_comparison_exp | null;
  type?: String_comparison_exp | null;
  u_id?: uuid_comparison_exp | null;
  user?: users_bool_exp | null;
  weight?: Int_comparison_exp | null;
  zinc?: numeric_comparison_exp | null;
};
export type numeric_comparison_exp = {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: ReadonlyArray<number> | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: ReadonlyArray<number> | null;
};
export type meal_item_bool_exp = {
  _and?: ReadonlyArray<meal_item_bool_exp | null> | null;
  _not?: meal_item_bool_exp | null;
  _or?: ReadonlyArray<meal_item_bool_exp | null> | null;
  carbohydrates?: numeric_comparison_exp | null;
  energy_cal?: numeric_comparison_exp | null;
  energy_kj?: numeric_comparison_exp | null;
  fats?: numeric_comparison_exp | null;
  food?: uuid_comparison_exp | null;
  foodDesc?: food_bool_exp | null;
  id?: uuid_comparison_exp | null;
  meal?: meal_bool_exp | null;
  meal_id?: uuid_comparison_exp | null;
  proteins?: numeric_comparison_exp | null;
  recipe?: recipe_bool_exp | null;
  recipe_id?: uuid_comparison_exp | null;
  u_id?: uuid_comparison_exp | null;
  user?: users_bool_exp | null;
  weight?: numeric_comparison_exp | null;
};
export type meal_bool_exp = {
  _and?: ReadonlyArray<meal_bool_exp | null> | null;
  _not?: meal_bool_exp | null;
  _or?: ReadonlyArray<meal_bool_exp | null> | null;
  date?: date_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  meal_items?: meal_item_bool_exp | null;
  name?: String_comparison_exp | null;
  time?: time_comparison_exp | null;
  u_id?: uuid_comparison_exp | null;
  user?: users_bool_exp | null;
};
export type date_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _in?: ReadonlyArray<string> | null;
  _is_null?: boolean | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nin?: ReadonlyArray<string> | null;
};
export type time_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _in?: ReadonlyArray<string> | null;
  _is_null?: boolean | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nin?: ReadonlyArray<string> | null;
};
export type users_bool_exp = {
  _and?: ReadonlyArray<users_bool_exp | null> | null;
  _not?: users_bool_exp | null;
  _or?: ReadonlyArray<users_bool_exp | null> | null;
  email?: String_comparison_exp | null;
  fb_id?: String_comparison_exp | null;
  fb_picture_url?: String_comparison_exp | null;
  first_name?: String_comparison_exp | null;
  food?: food_bool_exp | null;
  full_name?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  last_name?: String_comparison_exp | null;
  meal_items?: meal_item_bool_exp | null;
  meals?: meal_bool_exp | null;
  pantry?: pantry_user_bool_exp | null;
  password?: String_comparison_exp | null;
  recipe_items?: recipe_item_bool_exp | null;
  recipes?: recipe_bool_exp | null;
  user_name?: String_comparison_exp | null;
};
export type pantry_user_bool_exp = {
  _and?: ReadonlyArray<pantry_user_bool_exp | null> | null;
  _not?: pantry_user_bool_exp | null;
  _or?: ReadonlyArray<pantry_user_bool_exp | null> | null;
  id?: uuid_comparison_exp | null;
  pantry_id?: uuid_comparison_exp | null;
  user?: users_bool_exp | null;
  user_id?: uuid_comparison_exp | null;
};
export type recipe_item_bool_exp = {
  _and?: ReadonlyArray<recipe_item_bool_exp | null> | null;
  _not?: recipe_item_bool_exp | null;
  _or?: ReadonlyArray<recipe_item_bool_exp | null> | null;
  carbohydrates?: numeric_comparison_exp | null;
  energy_cal?: numeric_comparison_exp | null;
  energy_kj?: numeric_comparison_exp | null;
  fats?: numeric_comparison_exp | null;
  food?: food_bool_exp | null;
  food_id?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  proteins?: numeric_comparison_exp | null;
  recipe?: recipe_bool_exp | null;
  recipe_id?: uuid_comparison_exp | null;
  u_id?: uuid_comparison_exp | null;
  user?: users_bool_exp | null;
  weight?: numeric_comparison_exp | null;
};
export type recipe_bool_exp = {
  _and?: ReadonlyArray<recipe_bool_exp | null> | null;
  _not?: recipe_bool_exp | null;
  _or?: ReadonlyArray<recipe_bool_exp | null> | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  increment?: Int_comparison_exp | null;
  link?: String_comparison_exp | null;
  meal_items?: meal_item_bool_exp | null;
  name?: String_comparison_exp | null;
  portions?: Int_comparison_exp | null;
  recipe_items?: recipe_item_bool_exp | null;
  u_id?: uuid_comparison_exp | null;
  user?: users_bool_exp | null;
};
export type Int_comparison_exp = {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: ReadonlyArray<number> | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: ReadonlyArray<number> | null;
};
export type meal_item_arr_rel_insert_input = {
  data: ReadonlyArray<meal_item_insert_input>;
  on_conflict?: meal_item_on_conflict | null;
};
export type meal_item_insert_input = {
  carbohydrates?: number | null;
  energy_cal?: number | null;
  energy_kj?: number | null;
  fats?: number | null;
  food?: string | null;
  foodDesc?: food_obj_rel_insert_input | null;
  id?: string | null;
  meal?: meal_obj_rel_insert_input | null;
  meal_id?: string | null;
  proteins?: number | null;
  recipe?: recipe_obj_rel_insert_input | null;
  recipe_id?: string | null;
  u_id?: string | null;
  user?: users_obj_rel_insert_input | null;
  weight?: number | null;
};
export type food_obj_rel_insert_input = {
  data: food_insert_input;
  on_conflict?: food_on_conflict | null;
};
export type food_on_conflict = {
  constraint: food_constraint;
  update_columns: ReadonlyArray<food_update_column>;
  where?: food_bool_exp | null;
};
export type meal_obj_rel_insert_input = {
  data: meal_insert_input;
  on_conflict?: meal_on_conflict | null;
};
export type meal_insert_input = {
  date?: string | null;
  id?: string | null;
  meal_items?: meal_item_arr_rel_insert_input | null;
  name?: string | null;
  time?: string | null;
  u_id?: string | null;
  user?: users_obj_rel_insert_input | null;
};
export type users_obj_rel_insert_input = {
  data: users_insert_input;
  on_conflict?: users_on_conflict | null;
};
export type users_on_conflict = {
  constraint: users_constraint;
  update_columns: ReadonlyArray<users_update_column>;
  where?: users_bool_exp | null;
};
export type meal_on_conflict = {
  constraint: meal_constraint;
  update_columns: ReadonlyArray<meal_update_column>;
  where?: meal_bool_exp | null;
};
export type recipe_obj_rel_insert_input = {
  data: recipe_insert_input;
  on_conflict?: recipe_on_conflict | null;
};
export type recipe_insert_input = {
  description?: string | null;
  id?: string | null;
  increment?: number | null;
  link?: string | null;
  meal_items?: meal_item_arr_rel_insert_input | null;
  name?: string | null;
  portions?: number | null;
  recipe_items?: recipe_item_arr_rel_insert_input | null;
  u_id?: string | null;
  user?: users_obj_rel_insert_input | null;
};
export type recipe_item_arr_rel_insert_input = {
  data: ReadonlyArray<recipe_item_insert_input>;
  on_conflict?: recipe_item_on_conflict | null;
};
export type recipe_item_insert_input = {
  carbohydrates?: number | null;
  energy_cal?: number | null;
  energy_kj?: number | null;
  fats?: number | null;
  food?: food_obj_rel_insert_input | null;
  food_id?: string | null;
  id?: string | null;
  proteins?: number | null;
  recipe?: recipe_obj_rel_insert_input | null;
  recipe_id?: string | null;
  u_id?: string | null;
  user?: users_obj_rel_insert_input | null;
  weight?: number | null;
};
export type recipe_item_on_conflict = {
  constraint: recipe_item_constraint;
  update_columns: ReadonlyArray<recipe_item_update_column>;
  where?: recipe_item_bool_exp | null;
};
export type recipe_on_conflict = {
  constraint: recipe_constraint;
  update_columns: ReadonlyArray<recipe_update_column>;
  where?: recipe_bool_exp | null;
};
export type meal_item_on_conflict = {
  constraint: meal_item_constraint;
  update_columns: ReadonlyArray<meal_item_update_column>;
  where?: meal_item_bool_exp | null;
};
export type meal_arr_rel_insert_input = {
  data: ReadonlyArray<meal_insert_input>;
  on_conflict?: meal_on_conflict | null;
};
export type pantry_user_arr_rel_insert_input = {
  data: ReadonlyArray<pantry_user_insert_input>;
  on_conflict?: pantry_user_on_conflict | null;
};
export type pantry_user_insert_input = {
  id?: string | null;
  pantry_id?: string | null;
  user?: users_obj_rel_insert_input | null;
  user_id?: string | null;
};
export type pantry_user_on_conflict = {
  constraint: pantry_user_constraint;
  update_columns: ReadonlyArray<pantry_user_update_column>;
  where?: pantry_user_bool_exp | null;
};
export type recipe_arr_rel_insert_input = {
  data: ReadonlyArray<recipe_insert_input>;
  on_conflict?: recipe_on_conflict | null;
};
export type RegisterMutation$variables = {
  object: users_insert_input;
};
export type RegisterMutation$data = {
  readonly insert_users_one: {
    readonly id: string;
    readonly first_name: string | null;
    readonly full_name: string | null;
    readonly last_name: string | null;
    readonly password: string;
    readonly user_name: string | null;
    readonly email: string | null;
  } | null;
};
export type RegisterMutation = {
  variables: RegisterMutation$variables;
  response: RegisterMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "object"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "object",
        "variableName": "object"
      }
    ],
    "concreteType": "users",
    "kind": "LinkedField",
    "name": "insert_users_one",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "first_name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "full_name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "last_name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "password",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "user_name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1a5e8eda0ea56bfb08a0db53b0a8d391",
    "id": null,
    "metadata": {},
    "name": "RegisterMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterMutation(\n  $object: users_insert_input!\n) {\n  insert_users_one(object: $object) {\n    id\n    first_name\n    full_name\n    last_name\n    password\n    user_name\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "849fe35e9e4b5fe3425a70122b561ad6";

export default node;
