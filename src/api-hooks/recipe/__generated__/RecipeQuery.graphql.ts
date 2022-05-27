/**
 * @generated SignedSource<<e2ecda89e42e5880a814a42807933b37>>
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
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string | null;
        readonly description: string | null;
        readonly u_id: string;
        readonly link: string | null;
        readonly portions: number | null;
        readonly recipe_items: ReadonlyArray<{
          readonly id: string;
          readonly food: {
            readonly id: string;
            readonly name: string;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "proteins",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fats",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydrates",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_cal",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_kj",
  "storageKey": null
},
v7 = [
  {
    "alias": null,
    "args": [
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
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
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
                "name": "link",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "portions",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "recipe_item",
                "kind": "LinkedField",
                "name": "recipe_items",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "food",
                    "kind": "LinkedField",
                    "name": "food",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "weight",
                    "storageKey": null
                  }
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
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v4/*: any*/),
                          (v2/*: any*/),
                          (v3/*: any*/)
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
    "storageKey": "recipe_connection(order_by:{\"increment\":\"desc\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipeQuery",
    "selections": (v7/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RecipeQuery",
    "selections": (v7/*: any*/)
  },
  "params": {
    "cacheID": "0659c26e9c53a00cfc880f0c3b804f77",
    "id": null,
    "metadata": {},
    "name": "RecipeQuery",
    "operationKind": "query",
    "text": "query RecipeQuery {\n  recipe_connection(order_by: {increment: desc}) {\n    edges {\n      node {\n        id\n        name\n        description\n        u_id\n        link\n        portions\n        recipe_items {\n          id\n          food {\n            id\n            name\n          }\n          proteins\n          fats\n          carbohydrates\n          energy_cal\n          energy_kj\n          weight\n        }\n        recipe_items_aggregate {\n          aggregate {\n            sum {\n              energy_cal\n              energy_kj\n              carbohydrates\n              proteins\n              fats\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "697f045070b2ba287c95594765c8458e";

export default node;
