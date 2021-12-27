/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type MealsByDateQueryVariables = {
    date?: unknown | null | undefined;
    u_id?: unknown | null | undefined;
};
export type MealsByDateQueryResponse = {
    readonly meal: ReadonlyArray<{
        readonly id: unknown;
        readonly date: unknown | null;
        readonly time: unknown | null;
        readonly name: string | null;
        readonly meal_items: ReadonlyArray<{
            readonly id: unknown;
            readonly u_id: unknown;
            readonly meal_id: unknown;
            readonly food: unknown | null;
            readonly foodDesc: {
                readonly id: unknown;
                readonly name: unknown;
                readonly energy_cal: unknown;
                readonly energy_kj: unknown;
                readonly carbohydrates: unknown;
                readonly fats: unknown;
                readonly proteins: unknown;
            } | null;
            readonly weight: unknown;
            readonly carbohydrates: unknown;
            readonly proteins: unknown;
            readonly fats: unknown;
            readonly energy_cal: unknown;
            readonly energy_kj: unknown;
            readonly recipe_id: unknown | null;
            readonly recipe: {
                readonly name: string | null;
            } | null;
        }>;
    }>;
};
export type MealsByDateQuery = {
    readonly response: MealsByDateQueryResponse;
    readonly variables: MealsByDateQueryVariables;
};



/*
query MealsByDateQuery(
  $date: date = ""
  $u_id: uuid
) {
  meal(where: {date: {_eq: $date}, u_id: {_eq: $u_id}}, order_by: {time: asc_nulls_last}) {
    id
    date
    time
    name
    meal_items {
      id
      u_id
      meal_id
      food
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
      carbohydrates
      proteins
      fats
      energy_cal
      energy_kj
      recipe_id
      recipe {
        name
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
    "name": "date"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "u_id"
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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_cal",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_kj",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydrates",
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
v8 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "order_by",
        "value": {
          "time": "asc_nulls_last"
        }
      },
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "date"
              }
            ],
            "kind": "ObjectValue",
            "name": "date"
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
    "concreteType": "meal",
    "kind": "LinkedField",
    "name": "meal",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "time",
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "meal_item",
        "kind": "LinkedField",
        "name": "meal_items",
        "plural": true,
        "selections": [
          (v1/*: any*/),
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
            "name": "meal_id",
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
            "concreteType": "food",
            "kind": "LinkedField",
            "name": "foodDesc",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "weight",
            "storageKey": null
          },
          (v5/*: any*/),
          (v7/*: any*/),
          (v6/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
            "concreteType": "recipe",
            "kind": "LinkedField",
            "name": "recipe",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MealsByDateQuery",
    "selections": (v8/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MealsByDateQuery",
    "selections": (v8/*: any*/)
  },
  "params": {
    "cacheID": "f80c56c851b0bcf1b4b9fc8446f3094d",
    "id": null,
    "metadata": {},
    "name": "MealsByDateQuery",
    "operationKind": "query",
    "text": "query MealsByDateQuery(\n  $date: date = \"\"\n  $u_id: uuid\n) {\n  meal(where: {date: {_eq: $date}, u_id: {_eq: $u_id}}, order_by: {time: asc_nulls_last}) {\n    id\n    date\n    time\n    name\n    meal_items {\n      id\n      u_id\n      meal_id\n      food\n      foodDesc {\n        id\n        name\n        energy_cal\n        energy_kj\n        carbohydrates\n        fats\n        proteins\n      }\n      weight\n      carbohydrates\n      proteins\n      fats\n      energy_cal\n      energy_kj\n      recipe_id\n      recipe {\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e4dad08f2917298f73575910d7d01fa6';
export default node;
