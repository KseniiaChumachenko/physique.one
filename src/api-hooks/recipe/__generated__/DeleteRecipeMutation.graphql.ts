/**
 * @generated SignedSource<<a63b973c860ae72836ae06deca62306c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteRecipeMutation$variables = {
  id: string;
};
export type DeleteRecipeMutation$data = {
  readonly delete_recipe_item: {
    readonly returning: ReadonlyArray<{
      readonly id: string;
    }>;
  } | null;
  readonly delete_recipe_by_pk: {
    readonly id: string;
  } | null;
};
export type DeleteRecipeMutation = {
  variables: DeleteRecipeMutation$variables;
  response: DeleteRecipeMutation$data;
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
        "name": "recipe_id"
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
    "name": "DeleteRecipeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "recipe_item_mutation_response",
        "kind": "LinkedField",
        "name": "delete_recipe_item",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "recipe_item",
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
        "concreteType": "recipe",
        "kind": "LinkedField",
        "name": "delete_recipe_by_pk",
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
    "name": "DeleteRecipeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "recipe_item_mutation_response",
        "kind": "LinkedField",
        "name": "delete_recipe_item",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "recipe_item",
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
        "concreteType": "recipe",
        "kind": "LinkedField",
        "name": "delete_recipe_by_pk",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b20dba5912f03a7a6899555af16cb639",
    "id": null,
    "metadata": {},
    "name": "DeleteRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRecipeMutation(\n  $id: uuid!\n) {\n  delete_recipe_item(where: {recipe_id: {_eq: $id}}) {\n    returning {\n      id\n    }\n  }\n  delete_recipe_by_pk(id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8b4ce269b8c8d328fb9c58c8f5e65b1a";

export default node;
