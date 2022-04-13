/**
 * @generated SignedSource<<90d3afb949eea7f6f56568e4124295e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteMealMutation$variables = {
  id: string;
};
export type DeleteMealMutation$data = {
  readonly delete_meal_item: {
    readonly returning: ReadonlyArray<{
      readonly id: string;
    }>;
  } | null;
  readonly delete_meal_by_pk: {
    readonly id: string;
  } | null;
};
export type DeleteMealMutation = {
  variables: DeleteMealMutation$variables;
  response: DeleteMealMutation$data;
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
        "name": "meal_id"
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
v3 = [
  (v2/*: any*/)
],
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v5 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "filters": null,
    "handle": "deleteRecord",
    "key": "",
    "kind": "ScalarHandle",
    "name": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteMealMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "meal_item_mutation_response",
        "kind": "LinkedField",
        "name": "delete_meal_item",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "meal_item",
            "kind": "LinkedField",
            "name": "returning",
            "plural": true,
            "selections": (v3/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "meal",
        "kind": "LinkedField",
        "name": "delete_meal_by_pk",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ],
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteMealMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "meal_item_mutation_response",
        "kind": "LinkedField",
        "name": "delete_meal_item",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "meal_item",
            "kind": "LinkedField",
            "name": "returning",
            "plural": true,
            "selections": (v5/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "meal",
        "kind": "LinkedField",
        "name": "delete_meal_by_pk",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e792eeec3959ea5b6e184e0074138410",
    "id": null,
    "metadata": {},
    "name": "DeleteMealMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteMealMutation(\n  $id: uuid!\n) {\n  delete_meal_item(where: {meal_id: {_eq: $id}}) {\n    returning {\n      id\n    }\n  }\n  delete_meal_by_pk(id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6975a1492446b7040fcb51146561d064";

export default node;
