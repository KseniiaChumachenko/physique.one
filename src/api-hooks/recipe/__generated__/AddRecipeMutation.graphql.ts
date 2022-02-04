/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

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
export type recipe_insert_input = {
    description?: string | null | undefined;
    id?: string | null | undefined;
    increment?: number | null | undefined;
    link?: string | null | undefined;
    meal_items?: meal_item_arr_rel_insert_input | null | undefined;
    name?: string | null | undefined;
    portions?: number | null | undefined;
    recipe_items?: recipe_item_arr_rel_insert_input | null | undefined;
    u_id?: string | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
};
export type meal_item_arr_rel_insert_input = {
    data: Array<meal_item_insert_input>;
    on_conflict?: meal_item_on_conflict | null | undefined;
};
export type meal_item_insert_input = {
    carbohydrates?: number | null | undefined;
    energy_cal?: number | null | undefined;
    energy_kj?: number | null | undefined;
    fats?: number | null | undefined;
    food?: string | null | undefined;
    foodDesc?: food_obj_rel_insert_input | null | undefined;
    id?: string | null | undefined;
    meal?: meal_obj_rel_insert_input | null | undefined;
    meal_id?: string | null | undefined;
    proteins?: number | null | undefined;
    recipe?: recipe_obj_rel_insert_input | null | undefined;
    recipe_id?: string | null | undefined;
    u_id?: string | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
    weight?: number | null | undefined;
};
export type food_obj_rel_insert_input = {
    data: food_insert_input;
    on_conflict?: food_on_conflict | null | undefined;
};
export type food_insert_input = {
    A?: number | null | undefined;
    B1?: number | null | undefined;
    B12?: number | null | undefined;
    B2?: number | null | undefined;
    B3?: number | null | undefined;
    B5?: number | null | undefined;
    B6?: number | null | undefined;
    B7?: number | null | undefined;
    B9?: number | null | undefined;
    C?: number | null | undefined;
    D?: number | null | undefined;
    E?: number | null | undefined;
    K?: number | null | undefined;
    brand_id?: string | null | undefined;
    calcium?: number | null | undefined;
    carbohydrates?: number | null | undefined;
    carbohydrates_fiber?: number | null | undefined;
    carbohydrates_starch?: number | null | undefined;
    carbohydrates_sugars?: number | null | undefined;
    copper?: number | null | undefined;
    energy_cal?: number | null | undefined;
    energy_kj?: number | null | undefined;
    fats?: number | null | undefined;
    food_brand?: food_brand_obj_rel_insert_input | null | undefined;
    food_type?: food_type_obj_rel_insert_input | null | undefined;
    id?: string | null | undefined;
    iron?: number | null | undefined;
    magnesium?: number | null | undefined;
    manganese?: number | null | undefined;
    meal_items?: meal_item_arr_rel_insert_input | null | undefined;
    name?: string | null | undefined;
    phosphorus?: number | null | undefined;
    potassium?: number | null | undefined;
    proteins?: number | null | undefined;
    recipe_items?: recipe_item_arr_rel_insert_input | null | undefined;
    selenium?: number | null | undefined;
    sodium?: number | null | undefined;
    type?: string | null | undefined;
    u_id?: string | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
    weight?: number | null | undefined;
    zinc?: number | null | undefined;
};
export type food_brand_obj_rel_insert_input = {
    data: food_brand_insert_input;
    on_conflict?: food_brand_on_conflict | null | undefined;
};
export type food_brand_insert_input = {
    id?: string | null | undefined;
    name?: string | null | undefined;
};
export type food_brand_on_conflict = {
    constraint: food_brand_constraint;
    update_columns: Array<food_brand_update_column>;
    where?: food_brand_bool_exp | null | undefined;
};
export type food_brand_bool_exp = {
    _and?: Array<food_brand_bool_exp | null> | null | undefined;
    _not?: food_brand_bool_exp | null | undefined;
    _or?: Array<food_brand_bool_exp | null> | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    name?: String_comparison_exp | null | undefined;
};
export type uuid_comparison_exp = {
    _eq?: string | null | undefined;
    _gt?: string | null | undefined;
    _gte?: string | null | undefined;
    _in?: Array<string> | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: string | null | undefined;
    _lte?: string | null | undefined;
    _neq?: string | null | undefined;
    _nin?: Array<string> | null | undefined;
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
    brand_id?: uuid_comparison_exp | null | undefined;
    calcium?: numeric_comparison_exp | null | undefined;
    carbohydrates?: numeric_comparison_exp | null | undefined;
    carbohydrates_fiber?: numeric_comparison_exp | null | undefined;
    carbohydrates_starch?: numeric_comparison_exp | null | undefined;
    carbohydrates_sugars?: numeric_comparison_exp | null | undefined;
    copper?: numeric_comparison_exp | null | undefined;
    energy_cal?: numeric_comparison_exp | null | undefined;
    energy_kj?: numeric_comparison_exp | null | undefined;
    fats?: numeric_comparison_exp | null | undefined;
    food_brand?: food_brand_bool_exp | null | undefined;
    food_type?: food_type_bool_exp | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    iron?: numeric_comparison_exp | null | undefined;
    magnesium?: numeric_comparison_exp | null | undefined;
    manganese?: numeric_comparison_exp | null | undefined;
    meal_items?: meal_item_bool_exp | null | undefined;
    name?: String_comparison_exp | null | undefined;
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
export type food_type_bool_exp = {
    _and?: Array<food_type_bool_exp | null> | null | undefined;
    _not?: food_type_bool_exp | null | undefined;
    _or?: Array<food_type_bool_exp | null> | null | undefined;
    decription?: String_comparison_exp | null | undefined;
    food?: food_bool_exp | null | undefined;
    img_url?: String_comparison_exp | null | undefined;
    value?: String_comparison_exp | null | undefined;
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
    _eq?: string | null | undefined;
    _gt?: string | null | undefined;
    _gte?: string | null | undefined;
    _in?: Array<string> | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: string | null | undefined;
    _lte?: string | null | undefined;
    _neq?: string | null | undefined;
    _nin?: Array<string> | null | undefined;
};
export type time_comparison_exp = {
    _eq?: string | null | undefined;
    _gt?: string | null | undefined;
    _gte?: string | null | undefined;
    _in?: Array<string> | null | undefined;
    _is_null?: boolean | null | undefined;
    _lt?: string | null | undefined;
    _lte?: string | null | undefined;
    _neq?: string | null | undefined;
    _nin?: Array<string> | null | undefined;
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
export type food_type_on_conflict = {
    constraint: food_type_constraint;
    update_columns: Array<food_type_update_column>;
    where?: food_type_bool_exp | null | undefined;
};
export type recipe_item_arr_rel_insert_input = {
    data: Array<recipe_item_insert_input>;
    on_conflict?: recipe_item_on_conflict | null | undefined;
};
export type recipe_item_insert_input = {
    carbohydrates?: number | null | undefined;
    energy_cal?: number | null | undefined;
    energy_kj?: number | null | undefined;
    fats?: number | null | undefined;
    food?: food_obj_rel_insert_input | null | undefined;
    food_id?: string | null | undefined;
    id?: string | null | undefined;
    proteins?: number | null | undefined;
    recipe?: recipe_obj_rel_insert_input | null | undefined;
    recipe_id?: string | null | undefined;
    u_id?: string | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
    weight?: number | null | undefined;
};
export type recipe_obj_rel_insert_input = {
    data: recipe_insert_input;
    on_conflict?: recipe_on_conflict | null | undefined;
};
export type recipe_on_conflict = {
    constraint: recipe_constraint;
    update_columns: Array<recipe_update_column>;
    where?: recipe_bool_exp | null | undefined;
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
    id?: string | null | undefined;
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
    date?: string | null | undefined;
    id?: string | null | undefined;
    meal_items?: meal_item_arr_rel_insert_input | null | undefined;
    name?: string | null | undefined;
    time?: string | null | undefined;
    u_id?: string | null | undefined;
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
    id?: string | null | undefined;
    pantry_id?: string | null | undefined;
    user?: users_obj_rel_insert_input | null | undefined;
    user_id?: string | null | undefined;
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
export type meal_item_on_conflict = {
    constraint: meal_item_constraint;
    update_columns: Array<meal_item_update_column>;
    where?: meal_item_bool_exp | null | undefined;
};
export type AddRecipeMutationVariables = {
    objects: Array<recipe_insert_input>;
};
export type AddRecipeMutationResponse = {
    readonly insert_recipe: {
        readonly returning: ReadonlyArray<{
            readonly description: string | null;
            readonly id: string;
            readonly increment: number;
            readonly link: string | null;
            readonly name: string | null;
            readonly portions: number | null;
            readonly u_id: string;
            readonly recipe_items: ReadonlyArray<{
                readonly carbohydrates: number;
                readonly energy_cal: number;
                readonly energy_kj: number;
                readonly fats: number;
                readonly food_id: string;
                readonly id: string;
                readonly proteins: number;
                readonly recipe_id: string;
                readonly u_id: string;
                readonly weight: number;
            }>;
            readonly recipe_items_aggregate: {
                readonly aggregate: {
                    readonly sum: {
                        readonly carbohydrates: number | null;
                        readonly energy_cal: number | null;
                        readonly energy_kj: number | null;
                        readonly fats: number | null;
                        readonly proteins: number | null;
                        readonly weight: number | null;
                    } | null;
                } | null;
            };
        }>;
    } | null;
};
export type AddRecipeMutation = {
    readonly response: AddRecipeMutationResponse;
    readonly variables: AddRecipeMutationVariables;
};



/*
mutation AddRecipeMutation(
  $objects: [recipe_insert_input!]!
) {
  insert_recipe(objects: $objects) {
    returning {
      description
      id
      increment
      link
      name
      portions
      u_id
      recipe_items {
        carbohydrates
        energy_cal
        energy_kj
        fats
        food_id
        id
        proteins
        recipe_id
        u_id
        weight
      }
      recipe_items_aggregate {
        aggregate {
          sum {
            carbohydrates
            energy_cal
            energy_kj
            fats
            proteins
            weight
          }
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "objects"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "u_id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydrates",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_cal",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_kj",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fats",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "proteins",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weight",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "objects",
        "variableName": "objects"
      }
    ],
    "concreteType": "recipe_mutation_response",
    "kind": "LinkedField",
    "name": "insert_recipe",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "recipe",
        "kind": "LinkedField",
        "name": "returning",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "increment",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "link",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "portions",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "recipe_item",
            "kind": "LinkedField",
            "name": "recipe_items",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "food_id",
                "storageKey": null
              },
              (v1/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "recipe_id",
                "storageKey": null
              },
              (v2/*: any*/),
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "recipe_item_aggregate",
            "kind": "LinkedField",
            "name": "recipe_items_aggregate",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "recipe_item_aggregate_fields",
                "kind": "LinkedField",
                "name": "aggregate",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "recipe_item_sum_fields",
                    "kind": "LinkedField",
                    "name": "sum",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
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
    "name": "AddRecipeMutation",
    "selections": (v9/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddRecipeMutation",
    "selections": (v9/*: any*/)
  },
  "params": {
    "cacheID": "0304c1bdf7405169e1d5639f7ab88d6b",
    "id": null,
    "metadata": {},
    "name": "AddRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation AddRecipeMutation(\n  $objects: [recipe_insert_input!]!\n) {\n  insert_recipe(objects: $objects) {\n    returning {\n      description\n      id\n      increment\n      link\n      name\n      portions\n      u_id\n      recipe_items {\n        carbohydrates\n        energy_cal\n        energy_kj\n        fats\n        food_id\n        id\n        proteins\n        recipe_id\n        u_id\n        weight\n      }\n      recipe_items_aggregate {\n        aggregate {\n          sum {\n            carbohydrates\n            energy_cal\n            energy_kj\n            fats\n            proteins\n            weight\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5f26c613e7688b0f8795cfe7284864db';
export default node;
