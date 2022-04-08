/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

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
export type food_brand_bool_exp = {
    _and?: Array<food_brand_bool_exp | null> | null | undefined;
    _not?: food_brand_bool_exp | null | undefined;
    _or?: Array<food_brand_bool_exp | null> | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    name?: String_comparison_exp | null | undefined;
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
export type pantry_user_bool_exp = {
    _and?: Array<pantry_user_bool_exp | null> | null | undefined;
    _not?: pantry_user_bool_exp | null | undefined;
    _or?: Array<pantry_user_bool_exp | null> | null | undefined;
    id?: uuid_comparison_exp | null | undefined;
    pantry_id?: uuid_comparison_exp | null | undefined;
    user?: users_bool_exp | null | undefined;
    user_id?: uuid_comparison_exp | null | undefined;
};
export type GetForgottenPasswordByEmailQueryVariables = {
    where?: users_bool_exp | null | undefined;
};
export type GetForgottenPasswordByEmailQueryResponse = {
    readonly users_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly password: string;
            };
        }>;
    };
};
export type GetForgottenPasswordByEmailQuery = {
    readonly response: GetForgottenPasswordByEmailQueryResponse;
    readonly variables: GetForgottenPasswordByEmailQueryVariables;
};



/*
query GetForgottenPasswordByEmailQuery(
  $where: users_bool_exp
) {
  users_connection(where: $where) {
    edges {
      node {
        password
        id
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
    "name": "where"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "password",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetForgottenPasswordByEmailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/)
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
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetForgottenPasswordByEmailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
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
    ]
  },
  "params": {
    "cacheID": "ab990ebdae47181ae46447a183ee82b0",
    "id": null,
    "metadata": {},
    "name": "GetForgottenPasswordByEmailQuery",
    "operationKind": "query",
    "text": "query GetForgottenPasswordByEmailQuery(\n  $where: users_bool_exp\n) {\n  users_connection(where: $where) {\n    edges {\n      node {\n        password\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '305ad579dab5ca50448c7fc8a27de9d3';
export default node;
