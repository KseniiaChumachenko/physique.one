/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type food_constraint = "food_pkey" | "%future added value";
export type food_type_constraint = "food_type_pkey" | "%future added value";
export type food_type_update_column = "decription" | "img_url" | "value" | "%future added value";
export type food_update_column = "A" | "B1" | "B12" | "B2" | "B3" | "B5" | "B6" | "B7" | "B9" | "C" | "D" | "E" | "K" | "calcium" | "carbohydrates" | "carbohydrates_fiber" | "carbohydrates_starch" | "carbohydrates_sugars" | "copper" | "energy_cal" | "energy_kj" | "fats" | "id" | "iron" | "magnesium" | "manganese" | "name" | "phosphorus" | "potassium" | "proteins" | "selenium" | "sodium" | "type" | "u_id" | "weight" | "zinc" | "%future added value";
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
export type meal_item_insert_input = {
    carbohydrates?: unknown | null | undefined;
    energy_cal?: unknown | null | undefined;
    energy_kj?: unknown | null | undefined;
    fats?: unknown | null | undefined;
    food?: unknown | null | undefined;
    foodDesc?: food_obj_rel_insert_input | null | undefined;
    id?: unknown | null | undefined;
    meal?: meal_obj_rel_insert_input | null | undefined;
    meal_id?: unknown | null | undefined;
    proteins?: unknown | null | undefined;
    recipe?: recipe_obj_rel_insert_input | null | undefined;
    recipe_id?: unknown | null | undefined;
    u_id?: unknown | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
    weight?: unknown | null | undefined;
};
export type food_obj_rel_insert_input = {
    data: food_insert_input;
    on_conflict?: food_on_conflict | null | undefined;
};
export type food_insert_input = {
    A?: unknown | null | undefined;
    B1?: unknown | null | undefined;
    B12?: unknown | null | undefined;
    B2?: unknown | null | undefined;
    B3?: unknown | null | undefined;
    B5?: unknown | null | undefined;
    B6?: unknown | null | undefined;
    B7?: unknown | null | undefined;
    B9?: unknown | null | undefined;
    C?: unknown | null | undefined;
    D?: unknown | null | undefined;
    E?: unknown | null | undefined;
    K?: unknown | null | undefined;
    calcium?: unknown | null | undefined;
    carbohydrates?: unknown | null | undefined;
    carbohydrates_fiber?: unknown | null | undefined;
    carbohydrates_starch?: unknown | null | undefined;
    carbohydrates_sugars?: unknown | null | undefined;
    copper?: unknown | null | undefined;
    energy_cal?: unknown | null | undefined;
    energy_kj?: unknown | null | undefined;
    fats?: unknown | null | undefined;
    food_type?: food_type_obj_rel_insert_input | null | undefined;
    id?: unknown | null | undefined;
    iron?: unknown | null | undefined;
    magnesium?: unknown | null | undefined;
    manganese?: unknown | null | undefined;
    meal_items?: meal_item_arr_rel_insert_input | null | undefined;
    name?: unknown | null | undefined;
    phosphorus?: unknown | null | undefined;
    potassium?: unknown | null | undefined;
    proteins?: unknown | null | undefined;
    recipe_items?: recipe_item_arr_rel_insert_input | null | undefined;
    selenium?: unknown | null | undefined;
    sodium?: unknown | null | undefined;
    type?: string | null | undefined;
    u_id?: unknown | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
    weight?: number | null | undefined;
    zinc?: unknown | null | undefined;
};
export type food_type_obj_rel_insert_input = {
    data: food_type_insert_input;
    on_conflict?: food_type_on_conflict | null | undefined;
};
export type food_type_insert_input = {
    decription?: string | null | undefined;
    food?: food_arr_rel_insert_input | null | undefined;
    img_url?: string | null | undefined;
    value?: string | null | undefined;
};
export type food_arr_rel_insert_input = {
    data: Array<food_insert_input>;
    on_conflict?: food_on_conflict | null | undefined;
};
export type food_on_conflict = {
    constraint: food_constraint;
    update_columns: Array<food_update_column>;
    where?: food_bool_exp | null | undefined;
};
export type food_bool_exp = {
    A?: numeric_comparison_exp | null | undefined;
    B1?: numeric_comparison_exp | null | undefined;
    B12?: numeric_comparison_exp | null | undefined;
    B2?: numeric_comparison_exp | null | undefined;
    B3?: numeric_comparison_exp | null | undefined;
    B5?: numeric_comparison_exp | null | undefined;
    B6?: numeric_comparison_exp | null | undefined;
    B7?: numeric_comparison_exp | null | undefined;
    B9?: numeric_comparison_exp | null | undefined;
    C?: numeric_comparison_exp | null | undefined;
    D?: numeric_comparison_exp | null | undefined;
    E?: numeric_comparison_exp | null | undefined;
    K?: numeric_comparison_exp | null | undefined;
    _and?: Array<food_bool_exp | null> | null | undefined;
    _not?: food_bool_exp | null | undefined;
    _or?: Array<food_bool_exp | null> | null | undefined;
    calcium?: numeric_comparison_exp | null | undefined;
    carbohydrates?: numeric_comparison_exp | null | undefined;
    carbohydrates_fiber?: numeric_comparison_exp | null | undefined;
    carbohydrates_starch?: numeric_comparison_exp | null | undefined;
    carbohydrates_sugars?: numeric_comparison_exp | null | undefined;
    copper?: numeric_comparison_exp | null | undefined;
    energy_cal?: numeric_comparison_exp | null | undefined;
    energy_kj?: numeric_comparison_exp | null | undefined;
    fats?: numeric_comparison_exp | null | undefined;
    food_type?: food_type_bool_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    iron?: numeric_comparison_exp | null | undefined;
    magnesium?: numeric_comparison_exp | null | undefined;
    manganese?: numeric_comparison_exp | null | undefined;
    meal_items?: meal_item_bool_exp | null | undefined;
    name?: bpchar_comparison_exp | null | undefined;
    phosphorus?: numeric_comparison_exp | null | undefined;
    potassium?: numeric_comparison_exp | null | undefined;
    proteins?: numeric_comparison_exp | null | undefined;
    recipe_items?: recipe_item_bool_exp | null | undefined;
    selenium?: numeric_comparison_exp | null | undefined;
    sodium?: numeric_comparison_exp | null | undefined;
    type?: String_comparison_exp | null | undefined;
    u_id?: uuid_comparison_exp | null | undefined;
    user?: users_bool_exp | null | undefined;
    weight?: Int_comparison_exp | null | undefined;
    zinc?: numeric_comparison_exp | null | undefined;
};
export type numeric_comparison_exp = {
    _eq?: unknown | null | undefined;
    _gt?: unknown | null | undefined;
    _gte?: unknown | null | undefined;
    _in?: Array<unknown> | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: unknown | null | undefined;
    _lte?: unknown | null | undefined;
    _neq?: unknown | null | undefined;
    _nin?: Array<unknown> | null | undefined;
};
export type food_type_bool_exp = {
    _and?: Array<food_type_bool_exp | null> | null | undefined;
    _not?: food_type_bool_exp | null | undefined;
    _or?: Array<food_type_bool_exp | null> | null | undefined;
    decription?: String_comparison_exp | null | undefined;
    food?: food_bool_exp | null | undefined;
    img_url?: String_comparison_exp | null | undefined;
    value?: String_comparison_exp | null | undefined;
};
export type String_comparison_exp = {
    _eq?: string | null | undefined;
    _gt?: string | null | undefined;
    _gte?: string | null | undefined;
    _ilike?: string | null | undefined;
    _in?: Array<string> | null | undefined;
    _is_null?: boolean | null | undefined;
    _like?: string | null | undefined;
    _lt?: string | null | undefined;
    _lte?: string | null | undefined;
    _neq?: string | null | undefined;
    _nilike?: string | null | undefined;
    _nin?: Array<string> | null | undefined;
    _nlike?: string | null | undefined;
    _nsimilar?: string | null | undefined;
    _similar?: string | null | undefined;
};
export type uuid_comparison_exp = {
    _eq?: unknown | null | undefined;
    _gt?: unknown | null | undefined;
    _gte?: unknown | null | undefined;
    _in?: Array<unknown> | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: unknown | null | undefined;
    _lte?: unknown | null | undefined;
    _neq?: unknown | null | undefined;
    _nin?: Array<unknown> | null | undefined;
};
export type meal_item_bool_exp = {
    _and?: Array<meal_item_bool_exp | null> | null | undefined;
    _not?: meal_item_bool_exp | null | undefined;
    _or?: Array<meal_item_bool_exp | null> | null | undefined;
    carbohydrates?: numeric_comparison_exp | null | undefined;
    energy_cal?: numeric_comparison_exp | null | undefined;
    energy_kj?: numeric_comparison_exp | null | undefined;
    fats?: numeric_comparison_exp | null | undefined;
    food?: uuid_comparison_exp | null | undefined;
    foodDesc?: food_bool_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    meal?: meal_bool_exp | null | undefined;
    meal_id?: uuid_comparison_exp | null | undefined;
    proteins?: numeric_comparison_exp | null | undefined;
    recipe?: recipe_bool_exp | null | undefined;
    recipe_id?: uuid_comparison_exp | null | undefined;
    u_id?: uuid_comparison_exp | null | undefined;
    user?: users_bool_exp | null | undefined;
    weight?: numeric_comparison_exp | null | undefined;
};
export type meal_bool_exp = {
    _and?: Array<meal_bool_exp | null> | null | undefined;
    _not?: meal_bool_exp | null | undefined;
    _or?: Array<meal_bool_exp | null> | null | undefined;
    date?: date_comparison_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    meal_items?: meal_item_bool_exp | null | undefined;
    name?: String_comparison_exp | null | undefined;
    time?: time_comparison_exp | null | undefined;
    u_id?: uuid_comparison_exp | null | undefined;
    user?: users_bool_exp | null | undefined;
};
export type date_comparison_exp = {
    _eq?: unknown | null | undefined;
    _gt?: unknown | null | undefined;
    _gte?: unknown | null | undefined;
    _in?: Array<unknown> | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: unknown | null | undefined;
    _lte?: unknown | null | undefined;
    _neq?: unknown | null | undefined;
    _nin?: Array<unknown> | null | undefined;
};
export type time_comparison_exp = {
    _eq?: unknown | null | undefined;
    _gt?: unknown | null | undefined;
    _gte?: unknown | null | undefined;
    _in?: Array<unknown> | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: unknown | null | undefined;
    _lte?: unknown | null | undefined;
    _neq?: unknown | null | undefined;
    _nin?: Array<unknown> | null | undefined;
};
export type users_bool_exp = {
    _and?: Array<users_bool_exp | null> | null | undefined;
    _not?: users_bool_exp | null | undefined;
    _or?: Array<users_bool_exp | null> | null | undefined;
    email?: String_comparison_exp | null | undefined;
    fb_id?: String_comparison_exp | null | undefined;
    fb_picture_url?: String_comparison_exp | null | undefined;
    first_name?: String_comparison_exp | null | undefined;
    food?: food_bool_exp | null | undefined;
    full_name?: String_comparison_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    last_name?: String_comparison_exp | null | undefined;
    meal_items?: meal_item_bool_exp | null | undefined;
    meals?: meal_bool_exp | null | undefined;
    pantry?: pantry_user_bool_exp | null | undefined;
    password?: String_comparison_exp | null | undefined;
    recipe_items?: recipe_item_bool_exp | null | undefined;
    recipes?: recipe_bool_exp | null | undefined;
    user_name?: String_comparison_exp | null | undefined;
};
export type pantry_user_bool_exp = {
    _and?: Array<pantry_user_bool_exp | null> | null | undefined;
    _not?: pantry_user_bool_exp | null | undefined;
    _or?: Array<pantry_user_bool_exp | null> | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    pantry_id?: uuid_comparison_exp | null | undefined;
    user?: users_bool_exp | null | undefined;
    user_id?: uuid_comparison_exp | null | undefined;
};
export type recipe_item_bool_exp = {
    _and?: Array<recipe_item_bool_exp | null> | null | undefined;
    _not?: recipe_item_bool_exp | null | undefined;
    _or?: Array<recipe_item_bool_exp | null> | null | undefined;
    carbohydrates?: numeric_comparison_exp | null | undefined;
    energy_cal?: numeric_comparison_exp | null | undefined;
    energy_kj?: numeric_comparison_exp | null | undefined;
    fats?: numeric_comparison_exp | null | undefined;
    food?: food_bool_exp | null | undefined;
    food_id?: uuid_comparison_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    proteins?: numeric_comparison_exp | null | undefined;
    recipe?: recipe_bool_exp | null | undefined;
    recipe_id?: uuid_comparison_exp | null | undefined;
    u_id?: uuid_comparison_exp | null | undefined;
    user?: users_bool_exp | null | undefined;
    weight?: numeric_comparison_exp | null | undefined;
};
export type recipe_bool_exp = {
    _and?: Array<recipe_bool_exp | null> | null | undefined;
    _not?: recipe_bool_exp | null | undefined;
    _or?: Array<recipe_bool_exp | null> | null | undefined;
    description?: String_comparison_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    increment?: Int_comparison_exp | null | undefined;
    link?: String_comparison_exp | null | undefined;
    meal_items?: meal_item_bool_exp | null | undefined;
    name?: String_comparison_exp | null | undefined;
    portions?: Int_comparison_exp | null | undefined;
    recipe_items?: recipe_item_bool_exp | null | undefined;
    u_id?: uuid_comparison_exp | null | undefined;
    user?: users_bool_exp | null | undefined;
};
export type Int_comparison_exp = {
    _eq?: number | null | undefined;
    _gt?: number | null | undefined;
    _gte?: number | null | undefined;
    _in?: Array<number> | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: number | null | undefined;
    _lte?: number | null | undefined;
    _neq?: number | null | undefined;
    _nin?: Array<number> | null | undefined;
};
export type bpchar_comparison_exp = {
    _eq?: unknown | null | undefined;
    _gt?: unknown | null | undefined;
    _gte?: unknown | null | undefined;
    _in?: Array<unknown> | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: unknown | null | undefined;
    _lte?: unknown | null | undefined;
    _neq?: unknown | null | undefined;
    _nin?: Array<unknown> | null | undefined;
};
export type food_type_on_conflict = {
    constraint: food_type_constraint;
    update_columns: Array<food_type_update_column>;
    where?: food_type_bool_exp | null | undefined;
};
export type meal_item_arr_rel_insert_input = {
    data: Array<meal_item_insert_input>;
    on_conflict?: meal_item_on_conflict | null | undefined;
};
export type meal_item_on_conflict = {
    constraint: meal_item_constraint;
    update_columns: Array<meal_item_update_column>;
    where?: meal_item_bool_exp | null | undefined;
};
export type recipe_item_arr_rel_insert_input = {
    data: Array<recipe_item_insert_input>;
    on_conflict?: recipe_item_on_conflict | null | undefined;
};
export type recipe_item_insert_input = {
    carbohydrates?: unknown | null | undefined;
    energy_cal?: unknown | null | undefined;
    energy_kj?: unknown | null | undefined;
    fats?: unknown | null | undefined;
    food?: food_obj_rel_insert_input | null | undefined;
    food_id?: unknown | null | undefined;
    id?: unknown | null | undefined;
    proteins?: unknown | null | undefined;
    recipe?: recipe_obj_rel_insert_input | null | undefined;
    recipe_id?: unknown | null | undefined;
    u_id?: unknown | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
    weight?: unknown | null | undefined;
};
export type recipe_obj_rel_insert_input = {
    data: recipe_insert_input;
    on_conflict?: recipe_on_conflict | null | undefined;
};
export type recipe_insert_input = {
    description?: string | null | undefined;
    id?: unknown | null | undefined;
    increment?: number | null | undefined;
    link?: string | null | undefined;
    meal_items?: meal_item_arr_rel_insert_input | null | undefined;
    name?: string | null | undefined;
    portions?: number | null | undefined;
    recipe_items?: recipe_item_arr_rel_insert_input | null | undefined;
    u_id?: unknown | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
};
export type users_obj_rel_insert_input = {
    data: users_insert_input;
    on_conflict?: users_on_conflict | null | undefined;
};
export type users_insert_input = {
    email?: string | null | undefined;
    fb_id?: string | null | undefined;
    fb_picture_url?: string | null | undefined;
    first_name?: string | null | undefined;
    food?: food_arr_rel_insert_input | null | undefined;
    full_name?: string | null | undefined;
    id?: unknown | null | undefined;
    last_name?: string | null | undefined;
    meal_items?: meal_item_arr_rel_insert_input | null | undefined;
    meals?: meal_arr_rel_insert_input | null | undefined;
    pantry?: pantry_user_arr_rel_insert_input | null | undefined;
    password?: string | null | undefined;
    recipe_items?: recipe_item_arr_rel_insert_input | null | undefined;
    recipes?: recipe_arr_rel_insert_input | null | undefined;
    user_name?: string | null | undefined;
};
export type meal_arr_rel_insert_input = {
    data: Array<meal_insert_input>;
    on_conflict?: meal_on_conflict | null | undefined;
};
export type meal_insert_input = {
    date?: unknown | null | undefined;
    id?: unknown | null | undefined;
    meal_items?: meal_item_arr_rel_insert_input | null | undefined;
    name?: string | null | undefined;
    time?: unknown | null | undefined;
    u_id?: unknown | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
};
export type meal_on_conflict = {
    constraint: meal_constraint;
    update_columns: Array<meal_update_column>;
    where?: meal_bool_exp | null | undefined;
};
export type pantry_user_arr_rel_insert_input = {
    data: Array<pantry_user_insert_input>;
    on_conflict?: pantry_user_on_conflict | null | undefined;
};
export type pantry_user_insert_input = {
    id?: unknown | null | undefined;
    pantry_id?: unknown | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
    user_id?: unknown | null | undefined;
};
export type pantry_user_on_conflict = {
    constraint: pantry_user_constraint;
    update_columns: Array<pantry_user_update_column>;
    where?: pantry_user_bool_exp | null | undefined;
};
export type recipe_arr_rel_insert_input = {
    data: Array<recipe_insert_input>;
    on_conflict?: recipe_on_conflict | null | undefined;
};
export type recipe_on_conflict = {
    constraint: recipe_constraint;
    update_columns: Array<recipe_update_column>;
    where?: recipe_bool_exp | null | undefined;
};
export type users_on_conflict = {
    constraint: users_constraint;
    update_columns: Array<users_update_column>;
    where?: users_bool_exp | null | undefined;
};
export type recipe_item_on_conflict = {
    constraint: recipe_item_constraint;
    update_columns: Array<recipe_item_update_column>;
    where?: recipe_item_bool_exp | null | undefined;
};
export type meal_obj_rel_insert_input = {
    data: meal_insert_input;
    on_conflict?: meal_on_conflict | null | undefined;
};
export type AddMealMutationVariables = {
    id: unknown;
    name?: string | null | undefined;
    date?: unknown | null | undefined;
    time?: unknown | null | undefined;
    data: Array<meal_item_insert_input>;
    u_id: unknown;
};
export type AddMealMutationResponse = {
    readonly insert_meal_one: {
        readonly id: unknown;
        readonly name: string | null;
    } | null;
};
export type AddMealMutation = {
    readonly response: AddMealMutationResponse;
    readonly variables: AddMealMutationVariables;
};



/*
mutation AddMealMutation(
  $id: uuid!
  $name: String
  $date: date
  $time: time
  $data: [meal_item_insert_input!]!
  $u_id: uuid!
) {
  insert_meal_one(object: {id: $id, date: $date, time: $time, meal_items: {data: $data}, name: $name, u_id: $u_id}) {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "data"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "date"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "time"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "u_id"
},
v6 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "date",
            "variableName": "date"
          },
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          },
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "data",
                "variableName": "data"
              }
            ],
            "kind": "ObjectValue",
            "name": "meal_items"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "time",
            "variableName": "time"
          },
          {
            "kind": "Variable",
            "name": "u_id",
            "variableName": "u_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "object"
      }
    ],
    "concreteType": "meal",
    "kind": "LinkedField",
    "name": "insert_meal_one",
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
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddMealMutation",
    "selections": (v6/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/),
      (v0/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddMealMutation",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "1fe5a7b7e62c2e397f8b94e5846af367",
    "id": null,
    "metadata": {},
    "name": "AddMealMutation",
    "operationKind": "mutation",
    "text": "mutation AddMealMutation(\n  $id: uuid!\n  $name: String\n  $date: date\n  $time: time\n  $data: [meal_item_insert_input!]!\n  $u_id: uuid!\n) {\n  insert_meal_one(object: {id: $id, date: $date, time: $time, meal_items: {data: $data}, name: $name, u_id: $u_id}) {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '15ec386ecda0c205f6afcecad46f6fbf';
export default node;
