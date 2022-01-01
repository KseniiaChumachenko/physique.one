/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type MealItemQueryVariables = {
    id?: string | null | undefined;
    u_id?: string | null | undefined;
};
export type MealItemQueryResponse = {
    readonly meal_item_connection: {
        readonly edges: ReadonlyArray<{
            readonly cursor: string;
            readonly node: {
                readonly weight: number;
                readonly u_id: string;
                readonly recipe_id: string | null;
                readonly proteins: number;
                readonly meal_id: string;
                readonly id: string;
                readonly food: string | null;
                readonly fats: number;
                readonly energy_kj: number;
                readonly energy_cal: number;
                readonly carbohydrates: number;
            };
        }>;
    };
};
export type MealItemQuery = {
    readonly response: MealItemQueryResponse;
    readonly variables: MealItemQueryVariables;
};



/*
query MealItemQuery(
  $id: uuid = ""
  $u_id: uuid = ""
) {
  meal_item_connection(where: {id: {_eq: $id}, u_id: {_eq: $u_id}}) {
    edges {
      cursor
      node {
        weight
        u_id
        recipe_id
        proteins
        meal_id
        id
        food
        fats
        energy_kj
        energy_cal
        carbohydrates
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "u_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "id"
              }
            ],
            "kind": "ObjectValue",
            "name": "id"
          },
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "u_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "u_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "meal_itemConnection",
    "kind": "LinkedField",
    "name": "meal_item_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "meal_itemEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "meal_item",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "weight",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "u_id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "recipe_id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "proteins",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "meal_id",
                "storageKey": null
              },
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
                "name": "food",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fats",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "energy_kj",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "energy_cal",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "carbohydrates",
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
    "name": "MealItemQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MealItemQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5f52f3a4146055c8310a1645d564dd79",
    "id": null,
    "metadata": {},
    "name": "MealItemQuery",
    "operationKind": "query",
    "text": "query MealItemQuery(\n  $id: uuid = \"\"\n  $u_id: uuid = \"\"\n) {\n  meal_item_connection(where: {id: {_eq: $id}, u_id: {_eq: $u_id}}) {\n    edges {\n      cursor\n      node {\n        weight\n        u_id\n        recipe_id\n        proteins\n        meal_id\n        id\n        food\n        fats\n        energy_kj\n        energy_cal\n        carbohydrates\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a66e00a39550439f037e9c6782692faa';
export default node;
