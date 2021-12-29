/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type FoodQueryVariables = {};
export type FoodQueryResponse = {
    readonly food_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: unknown;
                readonly type: string;
                readonly carbohydrates: number;
                readonly proteins: number;
                readonly fats: number;
                readonly energy_cal: number;
                readonly energy_kj: number;
                readonly u_id: string | null;
            };
        }>;
    };
};
export type FoodQuery = {
    readonly response: FoodQueryResponse;
    readonly variables: FoodQueryVariables;
};



/*
query FoodQuery {
  food_connection {
    edges {
      node {
        id
        name
        type
        carbohydrates
        proteins
        fats
        energy_cal
        energy_kj
        u_id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
                "kind": "ScalarField",
                "name": "type",
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
                "name": "u_id",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FoodQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FoodQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f2ac27b9363cb503de171ee9254c3f0f",
    "id": null,
    "metadata": {},
    "name": "FoodQuery",
    "operationKind": "query",
    "text": "query FoodQuery {\n  food_connection {\n    edges {\n      node {\n        id\n        name\n        type\n        carbohydrates\n        proteins\n        fats\n        energy_cal\n        energy_kj\n        u_id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'da68ee4ff7cffdb6342f25381f63c275';
export default node;
