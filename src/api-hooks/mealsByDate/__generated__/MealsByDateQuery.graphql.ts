/**
 * @generated SignedSource<<84250c52a1bb184dba514a0b40eca060>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MealsByDateQuery$variables = {
  date?: string | null;
  u_id?: string | null;
};
export type MealsByDateQuery$data = {
  readonly meal_connection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly date: string | null;
        readonly id: string;
        readonly meal_items_aggregate: {
          readonly aggregate: {
            readonly sum: {
              readonly carbohydrates: number | null;
              readonly energy_cal: number | null;
              readonly energy_kj: number | null;
              readonly fats: number | null;
              readonly proteins: number | null;
            } | null;
          } | null;
        };
        readonly meal_items_connection: {
          readonly edges: ReadonlyArray<{
            readonly cursor: string;
            readonly node: {
              readonly carbohydrates: number;
              readonly energy_cal: number;
              readonly energy_kj: number;
              readonly fats: number;
              readonly food: string | null;
              readonly foodDesc: {
                readonly carbohydrates: number;
                readonly energy_cal: number;
                readonly energy_kj: number;
                readonly fats: number;
                readonly food_brand: {
                  readonly name: string;
                } | null;
                readonly id: string;
                readonly name: string;
                readonly proteins: number;
              } | null;
              readonly id: string;
              readonly meal_id: string;
              readonly proteins: number;
              readonly recipe: {
                readonly name: string | null;
              } | null;
              readonly recipe_id: string | null;
              readonly u_id: string;
              readonly weight: number;
            };
          }>;
        };
        readonly name: string | null;
        readonly time: string | null;
      };
    }>;
  };
};
export type MealsByDateQuery = {
  response: MealsByDateQuery$data;
  variables: MealsByDateQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
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
  "kind": "Literal",
  "name": "last",
  "value": 1000000000
},
v2 = {
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
v3 = {
  "fields": [
    {
      "kind": "Variable",
      "name": "_eq",
      "variableName": "u_id"
    }
  ],
  "kind": "ObjectValue",
  "name": "u_id"
},
v4 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "order_by",
    "value": {
      "time": "asc_nulls_last"
    }
  },
  {
    "fields": [
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "time",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = [
  (v1/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "u_id",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "meal_id",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "food",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_cal",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_kj",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydrates",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fats",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "proteins",
  "storageKey": null
},
v18 = [
  (v8/*: any*/)
],
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weight",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "recipe_id",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": [
    {
      "fields": [
        {
          "fields": [
            (v2/*: any*/)
          ],
          "kind": "ObjectValue",
          "name": "meal"
        },
        (v3/*: any*/)
      ],
      "kind": "ObjectValue",
      "name": "where"
    }
  ],
  "concreteType": "meal_item_aggregate",
  "kind": "LinkedField",
  "name": "meal_items_aggregate",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "meal_item_aggregate_fields",
      "kind": "LinkedField",
      "name": "aggregate",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "meal_item_sum_fields",
          "kind": "LinkedField",
          "name": "sum",
          "plural": false,
          "selections": [
            (v15/*: any*/),
            (v13/*: any*/),
            (v14/*: any*/),
            (v16/*: any*/),
            (v17/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v23 = [
  (v8/*: any*/),
  (v5/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MealsByDateQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "mealConnection",
        "kind": "LinkedField",
        "name": "meal_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "mealEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "meal",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": (v9/*: any*/),
                    "concreteType": "meal_itemConnection",
                    "kind": "LinkedField",
                    "name": "meal_items_connection",
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
                            "concreteType": "meal_item",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v10/*: any*/),
                              (v11/*: any*/),
                              (v12/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "food",
                                "kind": "LinkedField",
                                "name": "foodDesc",
                                "plural": false,
                                "selections": [
                                  (v5/*: any*/),
                                  (v8/*: any*/),
                                  (v13/*: any*/),
                                  (v14/*: any*/),
                                  (v15/*: any*/),
                                  (v16/*: any*/),
                                  (v17/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "food_brand",
                                    "kind": "LinkedField",
                                    "name": "food_brand",
                                    "plural": false,
                                    "selections": (v18/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v19/*: any*/),
                              (v15/*: any*/),
                              (v17/*: any*/),
                              (v16/*: any*/),
                              (v13/*: any*/),
                              (v14/*: any*/),
                              (v20/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "recipe",
                                "kind": "LinkedField",
                                "name": "recipe",
                                "plural": false,
                                "selections": (v18/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v21/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "meal_items_connection(last:1000000000)"
                  },
                  (v22/*: any*/)
                ],
                "storageKey": null
              },
              (v21/*: any*/)
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
    "name": "MealsByDateQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "mealConnection",
        "kind": "LinkedField",
        "name": "meal_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "mealEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "meal",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": (v9/*: any*/),
                    "concreteType": "meal_itemConnection",
                    "kind": "LinkedField",
                    "name": "meal_items_connection",
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
                            "concreteType": "meal_item",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v10/*: any*/),
                              (v11/*: any*/),
                              (v12/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "food",
                                "kind": "LinkedField",
                                "name": "foodDesc",
                                "plural": false,
                                "selections": [
                                  (v5/*: any*/),
                                  (v8/*: any*/),
                                  (v13/*: any*/),
                                  (v14/*: any*/),
                                  (v15/*: any*/),
                                  (v16/*: any*/),
                                  (v17/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "food_brand",
                                    "kind": "LinkedField",
                                    "name": "food_brand",
                                    "plural": false,
                                    "selections": (v23/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v19/*: any*/),
                              (v15/*: any*/),
                              (v17/*: any*/),
                              (v16/*: any*/),
                              (v13/*: any*/),
                              (v14/*: any*/),
                              (v20/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "recipe",
                                "kind": "LinkedField",
                                "name": "recipe",
                                "plural": false,
                                "selections": (v23/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v21/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "meal_items_connection(last:1000000000)"
                  },
                  (v22/*: any*/)
                ],
                "storageKey": null
              },
              (v21/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1bc0986aec55f22346f5efb52666dc19",
    "id": null,
    "metadata": {},
    "name": "MealsByDateQuery",
    "operationKind": "query",
    "text": "query MealsByDateQuery(\n  $date: date\n  $u_id: uuid\n) {\n  meal_connection(where: {date: {_eq: $date}, u_id: {_eq: $u_id}}, order_by: {time: asc_nulls_last}, last: 1000000000) {\n    edges {\n      node {\n        id\n        date\n        time\n        name\n        meal_items_connection(last: 1000000000) {\n          edges {\n            node {\n              id\n              u_id\n              meal_id\n              food\n              foodDesc {\n                id\n                name\n                energy_cal\n                energy_kj\n                carbohydrates\n                fats\n                proteins\n                food_brand {\n                  name\n                  id\n                }\n              }\n              weight\n              carbohydrates\n              proteins\n              fats\n              energy_cal\n              energy_kj\n              recipe_id\n              recipe {\n                name\n                id\n              }\n            }\n            cursor\n          }\n        }\n        meal_items_aggregate(where: {meal: {date: {_eq: $date}}, u_id: {_eq: $u_id}}) {\n          aggregate {\n            sum {\n              carbohydrates\n              energy_cal\n              energy_kj\n              fats\n              proteins\n            }\n          }\n        }\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7df4983ed555378024880b4ed3c1fcba";

export default node;
