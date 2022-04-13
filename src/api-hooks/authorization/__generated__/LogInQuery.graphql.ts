/**
 * @generated SignedSource<<e5d84d54a7fd9294b67ae35659ffab7b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
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
export type food_brand_bool_exp = {
  _and?: ReadonlyArray<food_brand_bool_exp | null> | null;
  _not?: food_brand_bool_exp | null;
  _or?: ReadonlyArray<food_brand_bool_exp | null> | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
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
export type pantry_user_bool_exp = {
  _and?: ReadonlyArray<pantry_user_bool_exp | null> | null;
  _not?: pantry_user_bool_exp | null;
  _or?: ReadonlyArray<pantry_user_bool_exp | null> | null;
  id?: uuid_comparison_exp | null;
  pantry_id?: uuid_comparison_exp | null;
  user?: users_bool_exp | null;
  user_id?: uuid_comparison_exp | null;
};
export type LogInQuery$variables = {
  where: users_bool_exp;
};
export type LogInQuery$data = {
  readonly users_connection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly email: string | null;
        readonly user_name: string | null;
        readonly first_name: string | null;
        readonly last_name: string | null;
        readonly full_name: string | null;
        readonly fb_id: string | null;
        readonly fb_picture_url: string | null;
      };
    }>;
  };
};
export type LogInQuery = {
  variables: LogInQuery$variables;
  response: LogInQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "where"
      }
    ],
    "concreteType": "usersConnection",
    "kind": "LinkedField",
    "name": "users_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "usersEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "users",
            "kind": "LinkedField",
            "name": "node",
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
                "name": "email",
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
                "name": "first_name",
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
                "name": "full_name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fb_id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fb_picture_url",
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
    "name": "LogInQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LogInQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "eb9a24f64ed01f3b146e54278e1e88c0",
    "id": null,
    "metadata": {},
    "name": "LogInQuery",
    "operationKind": "query",
    "text": "query LogInQuery(\n  $where: users_bool_exp!\n) {\n  users_connection(where: $where) {\n    edges {\n      node {\n        id\n        email\n        user_name\n        first_name\n        last_name\n        full_name\n        fb_id\n        fb_picture_url\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "83f7259afad1b3b86905e73ee9bbbef2";

export default node;
