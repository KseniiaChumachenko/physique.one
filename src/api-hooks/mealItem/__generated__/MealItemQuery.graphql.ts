/**
 * @generated SignedSource<<a10144cc995f5c457ce5a805f4183d28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MealItemQuery$variables = {
  id?: string | null;
  u_id?: string | null;
};
export type MealItemQuery$data = {
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
  variables: MealItemQuery$variables;
  response: MealItemQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
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
    "cacheID": "ab5eeb18c1cbf0e1f01e82ccc05f328c",
    "id": null,
    "metadata": {},
    "name": "MealItemQuery",
    "operationKind": "query",
    "text": "query MealItemQuery(\n  $id: uuid\n  $u_id: uuid\n) {\n  meal_item_connection(where: {id: {_eq: $id}, u_id: {_eq: $u_id}}) {\n    edges {\n      cursor\n      node {\n        weight\n        u_id\n        recipe_id\n        proteins\n        meal_id\n        id\n        food\n        fats\n        energy_kj\n        energy_cal\n        carbohydrates\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4f00ee8c817680685a69c93ac129a03a";

export default node;
