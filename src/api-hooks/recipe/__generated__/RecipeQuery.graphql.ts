/**
 * @generated SignedSource<<38e821c562b1b7bdde25c7ac00e434bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RecipeQuery$variables = {};
export type RecipeQuery$data = {
  readonly recipe_connection: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string | null;
        readonly description: string | null;
        readonly u_id: string;
        readonly link: string | null;
        readonly portions: number | null;
        readonly isOwner: boolean | null;
        readonly recipe_items: ReadonlyArray<{
          readonly id: string;
          readonly u_id: string;
          readonly isOwner: boolean | null;
          readonly food: {
            readonly id: string;
            readonly name: string;
            readonly food_brand: {
              readonly name: string;
            } | null;
          };
          readonly proteins: number;
          readonly fats: number;
          readonly carbohydrates: number;
          readonly energy_cal: number;
          readonly energy_kj: number;
          readonly weight: number;
        }>;
        readonly recipe_items_aggregate: {
          readonly aggregate: {
            readonly sum: {
              readonly energy_cal: number | null;
              readonly energy_kj: number | null;
              readonly carbohydrates: number | null;
              readonly proteins: number | null;
              readonly fats: number | null;
            } | null;
          } | null;
        };
      };
    }>;
  };
};
export type RecipeQuery = {
  variables: RecipeQuery$variables;
  response: RecipeQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "Literal",
  "name": "order_by",
  "value": {
    "increment": "desc"
  }
},
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
  "name": "description",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "u_id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "link",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "portions",
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
  "name": "fats",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydrates",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_cal",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_kj",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weight",
  "storageKey": null
},
v13 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isOwner",
      "storageKey": null
    }
  ]
},
v14 = {
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
            (v10/*: any*/),
            (v11/*: any*/),
            (v9/*: any*/),
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
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPreviousPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startCursor",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v18 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v19 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 10000
  },
  (v0/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipeQuery",
    "selections": [
      {
        "alias": "recipe_connection",
        "args": [
          (v0/*: any*/)
        ],
        "concreteType": "recipeConnection",
        "kind": "LinkedField",
        "name": "__Listing__recipe_connection_connection",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "recipe_item",
                    "kind": "LinkedField",
                    "name": "recipe_items",
                    "plural": true,
                    "selections": [
                      (v1/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "food",
                        "kind": "LinkedField",
                        "name": "food",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "food_brand",
                            "kind": "LinkedField",
                            "name": "food_brand",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/),
                  (v13/*: any*/),
                  (v15/*: any*/)
                ],
                "storageKey": null
              },
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v17/*: any*/),
          (v18/*: any*/)
        ],
        "storageKey": "__Listing__recipe_connection_connection(order_by:{\"increment\":\"desc\"})"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RecipeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v19/*: any*/),
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "recipe_item",
                    "kind": "LinkedField",
                    "name": "recipe_items",
                    "plural": true,
                    "selections": [
                      (v1/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "food",
                        "kind": "LinkedField",
                        "name": "food",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "food_brand",
                            "kind": "LinkedField",
                            "name": "food_brand",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v1/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/),
                  (v13/*: any*/),
                  (v15/*: any*/)
                ],
                "storageKey": null
              },
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v17/*: any*/),
          (v18/*: any*/)
        ],
        "storageKey": "recipe_connection(last:10000,order_by:{\"increment\":\"desc\"})"
      },
      {
        "alias": null,
        "args": (v19/*: any*/),
        "filters": [
          "order_by"
        ],
        "handle": "connection",
        "key": "Listing__recipe_connection",
        "kind": "LinkedHandle",
        "name": "recipe_connection"
      }
    ]
  },
  "params": {
    "cacheID": "6ad4e5841544881cd7ccf8d5a51cea8e",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "backward",
          "path": [
            "recipe_connection"
          ]
        }
      ]
    },
    "name": "RecipeQuery",
    "operationKind": "query",
    "text": "query RecipeQuery {\n  recipe_connection(order_by: {increment: desc}, last: 10000) {\n    edges {\n      node {\n        id\n        name\n        description\n        u_id\n        link\n        portions\n        recipe_items {\n          id\n          u_id\n          food {\n            id\n            name\n            food_brand {\n              name\n              id\n            }\n          }\n          proteins\n          fats\n          carbohydrates\n          energy_cal\n          energy_kj\n          weight\n        }\n        recipe_items_aggregate {\n          aggregate {\n            sum {\n              energy_cal\n              energy_kj\n              carbohydrates\n              proteins\n              fats\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "25361f41366ffbdbe315f4169a00487d";

export default node;
