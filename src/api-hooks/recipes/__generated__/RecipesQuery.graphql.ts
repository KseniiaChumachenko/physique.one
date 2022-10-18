/**
 * @generated SignedSource<<1d2d7ed0c7606ad68eb03ea0051d8c64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RecipesQuery$variables = {};
export type RecipesQuery$data = {
  readonly recipe_connection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string | null;
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
      };
    }>;
  };
};
export type RecipesQuery = {
  response: RecipesQuery$data;
  variables: RecipesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "last",
        "value": 10000
      },
      {
        "kind": "Literal",
        "name": "order_by",
        "value": {
          "increment": "desc"
        }
      }
    ],
    "concreteType": "recipeConnection",
    "kind": "LinkedField",
    "name": "recipe_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "recipeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "recipe",
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
                "name": "name",
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
                            "name": "energy_kj",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "carbohydrates",
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
                            "name": "fats",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "weight",
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
        ],
        "storageKey": null
      }
    ],
    "storageKey": "recipe_connection(last:10000,order_by:{\"increment\":\"desc\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipesQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RecipesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "742e360cfe23985d46d6a3e060bf51a2",
    "id": null,
    "metadata": {},
    "name": "RecipesQuery",
    "operationKind": "query",
    "text": "query RecipesQuery {\n  recipe_connection(order_by: {increment: desc}, last: 10000) {\n    edges {\n      node {\n        id\n        name\n        recipe_items_aggregate {\n          aggregate {\n            sum {\n              energy_cal\n              energy_kj\n              carbohydrates\n              proteins\n              fats\n              weight\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5c89fb50ff1562c64353dd2bbd4b6633";

export default node;
