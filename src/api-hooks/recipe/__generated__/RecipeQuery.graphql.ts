/**
 * @generated SignedSource<<17a10ad4fca8bffbf1daf6485b92802c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RecipeQuery$variables = {
  id: string;
};
export type RecipeQuery$data = {
  readonly recipe_connection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly description: string | null;
        readonly id: string;
        readonly isOwner: boolean | null;
        readonly link: string | null;
        readonly name: string | null;
        readonly portions: number | null;
        readonly recipe_items: ReadonlyArray<{
          readonly carbohydrates: number;
          readonly energy_cal: number;
          readonly energy_kj: number;
          readonly fats: number;
          readonly food: {
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
            readonly type: string;
            readonly u_id: string | null;
            readonly weight: number | null;
          };
          readonly id: string;
          readonly isOwner: boolean | null;
          readonly proteins: number;
          readonly u_id: string;
          readonly weight: number;
        }>;
        readonly u_id: string;
      };
    }>;
  };
};
export type RecipeQuery = {
  response: RecipeQuery$data;
  variables: RecipeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
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
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "u_id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "link",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "portions",
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "order_by",
    "value": {
      "increment": "asc"
    }
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_cal",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_kj",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "proteins",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydrates",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fats",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weight",
  "storageKey": null
},
v16 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": (v8/*: any*/),
                    "concreteType": "recipe_item",
                    "kind": "LinkedField",
                    "name": "recipe_items",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "food",
                        "kind": "LinkedField",
                        "name": "food",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v5/*: any*/),
                          (v15/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "food_brand",
                            "kind": "LinkedField",
                            "name": "food_brand",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v11/*: any*/),
                      (v13/*: any*/),
                      (v12/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/)
                    ],
                    "storageKey": "recipe_items(order_by:{\"increment\":\"asc\"})"
                  },
                  (v16/*: any*/)
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
    "name": "RecipeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": (v8/*: any*/),
                    "concreteType": "recipe_item",
                    "kind": "LinkedField",
                    "name": "recipe_items",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "food",
                        "kind": "LinkedField",
                        "name": "food",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v5/*: any*/),
                          (v15/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "food_brand",
                            "kind": "LinkedField",
                            "name": "food_brand",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v11/*: any*/),
                      (v13/*: any*/),
                      (v12/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/)
                    ],
                    "storageKey": "recipe_items(order_by:{\"increment\":\"asc\"})"
                  },
                  (v16/*: any*/)
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
    "cacheID": "80bb3a69a4ffc09c12424078a78d9f35",
    "id": null,
    "metadata": {},
    "name": "RecipeQuery",
    "operationKind": "query",
    "text": "query RecipeQuery(\n  $id: uuid!\n) {\n  recipe_connection(where: {id: {_eq: $id}}) {\n    edges {\n      node {\n        id\n        name\n        description\n        u_id\n        link\n        portions\n        recipe_items(order_by: {increment: asc}) {\n          id\n          u_id\n          food {\n            id\n            name\n            energy_cal\n            energy_kj\n            proteins\n            carbohydrates\n            fats\n            type\n            u_id\n            weight\n            food_brand {\n              name\n              id\n            }\n          }\n          proteins\n          fats\n          carbohydrates\n          energy_cal\n          energy_kj\n          weight\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b8886b7286398e75374393eab56f9471";

export default node;
