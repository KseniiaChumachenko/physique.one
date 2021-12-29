/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type RecipeQueryVariables = {};
export type RecipeQueryResponse = {
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
                        readonly name: unknown;
                    };
                    readonly proteins: number;
                    readonly fats: number;
                    readonly carbohydrates: number;
                    readonly energy_cal: number;
                    readonly energy_kj: number;
                    readonly weight: number;
                }>;
            };
        }>;
    };
};
export type RecipeQuery = {
    readonly response: RecipeQueryResponse;
    readonly variables: RecipeQueryVariables;
};



/*
query RecipeQuery {
  recipe_connection(order_by: {increment: desc}) {
    edges {
      node {
        id
        name
        description
        u_id
        link
        portions
        recipe_items {
          id
          food {
            id
            name
          }
          proteins
          fats
          carbohydrates
          energy_cal
          energy_kj
          weight
        }
      }
    }
  }
}
*/

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
v2 = [
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
                    "name": "carbohydrates",
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
                    "name": "energy_kj",
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
    "storageKey": "recipe_connection(order_by:{\"increment\":\"desc\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipeQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RecipeQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "bdbe5ffba87a60951d31ed4e8557b8df",
    "id": null,
    "metadata": {},
    "name": "RecipeQuery",
    "operationKind": "query",
    "text": "query RecipeQuery {\n  recipe_connection(order_by: {increment: desc}) {\n    edges {\n      node {\n        id\n        name\n        description\n        u_id\n        link\n        portions\n        recipe_items {\n          id\n          food {\n            id\n            name\n          }\n          proteins\n          fats\n          carbohydrates\n          energy_cal\n          energy_kj\n          weight\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e457c8e56e7bac19dc93ceae05d00c41';
export default node;
