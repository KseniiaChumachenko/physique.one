/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type FoodTypeQueryVariables = {};
export type FoodTypeQueryResponse = {
    readonly food_type_connection: {
        readonly edges: ReadonlyArray<{
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly decription: string;
                readonly value: string;
                readonly img_url: string;
            };
        }>;
    };
};
export type FoodTypeQuery = {
    readonly response: FoodTypeQueryResponse;
    readonly variables: FoodTypeQueryVariables;
};



/*
query FoodTypeQuery {
  food_type_connection {
    edges {
      cursor
      node {
        id
        decription
        value
        img_url
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
    "concreteType": "food_typeConnection",
    "kind": "LinkedField",
    "name": "food_type_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "food_typeEdge",
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
            "concreteType": "food_type",
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
                "name": "decription",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "img_url",
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
    "name": "FoodTypeQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FoodTypeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "fac940b3d4b596bfcb62b44c248441f6",
    "id": null,
    "metadata": {},
    "name": "FoodTypeQuery",
    "operationKind": "query",
    "text": "query FoodTypeQuery {\n  food_type_connection {\n    edges {\n      cursor\n      node {\n        id\n        decription\n        value\n        img_url\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '786a5ccc9f27ef8c449dc03106e88a3e';
export default node;
