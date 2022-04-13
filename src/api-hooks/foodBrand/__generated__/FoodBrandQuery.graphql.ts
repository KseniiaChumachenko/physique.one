/**
 * @generated SignedSource<<9ce553682e6bbc39481dd6f36df9f6e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FoodBrandQuery$variables = {};
export type FoodBrandQuery$data = {
  readonly food_brand_connection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    }>;
  };
};
export type FoodBrandQuery = {
  variables: FoodBrandQuery$variables;
  response: FoodBrandQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "order_by",
        "value": {
          "name": "asc"
        }
      }
    ],
    "concreteType": "food_brandConnection",
    "kind": "LinkedField",
    "name": "food_brand_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "food_brandEdge",
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
            "concreteType": "food_brand",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "food_brand_connection(order_by:{\"name\":\"asc\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FoodBrandQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FoodBrandQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "477983d36a4f08f59146e55f51a173b9",
    "id": null,
    "metadata": {},
    "name": "FoodBrandQuery",
    "operationKind": "query",
    "text": "query FoodBrandQuery {\n  food_brand_connection(order_by: {name: asc}) {\n    edges {\n      cursor\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c497b6ea1fbf7c2ac0928818fc50bf29";

export default node;
