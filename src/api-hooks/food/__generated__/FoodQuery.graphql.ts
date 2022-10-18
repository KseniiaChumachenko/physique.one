/**
 * @generated SignedSource<<34e85a2bad567d2241718225dae758ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FoodQuery$variables = {};
export type FoodQuery$data = {
  readonly food_connection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
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
    }>;
  };
};
export type FoodQuery = {
  response: FoodQuery$data;
  variables: FoodQuery$variables;
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
  "name": "type",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydrates",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "proteins",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fats",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_cal",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_kj",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "u_id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weight",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FoodQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "foodConnection",
        "kind": "LinkedField",
        "name": "food_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "foodEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "food",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
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
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FoodQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "foodConnection",
        "kind": "LinkedField",
        "name": "food_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "foodEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "food",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
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
                      (v1/*: any*/),
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
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
    "cacheID": "4aae4ce7da8a78bd0c0d801abd3890dd",
    "id": null,
    "metadata": {},
    "name": "FoodQuery",
    "operationKind": "query",
    "text": "query FoodQuery {\n  food_connection {\n    edges {\n      node {\n        id\n        name\n        type\n        food_brand {\n          name\n          id\n        }\n        carbohydrates\n        proteins\n        fats\n        energy_cal\n        energy_kj\n        u_id\n        weight\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "625533c9bbdb1ef2c3fd74f921bb3f08";

export default node;
