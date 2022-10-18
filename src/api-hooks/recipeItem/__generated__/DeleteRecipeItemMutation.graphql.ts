/**
 * @generated SignedSource<<691f7eb4ba51061e7d2c7b90755bc70c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteRecipeItemMutation$variables = {
  id: string;
};
export type DeleteRecipeItemMutation$data = {
  readonly delete_recipe_item: {
    readonly returning: ReadonlyArray<{
      readonly id: string;
    }>;
  } | null;
};
export type DeleteRecipeItemMutation = {
  response: DeleteRecipeItemMutation$data;
  variables: DeleteRecipeItemMutation$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteRecipeItemMutation",
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
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
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
    "name": "DeleteRecipeItemMutation",
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
            "selections": [
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b7001858ff406c21a793f6c9c38b0c1f",
    "id": null,
    "metadata": {},
    "name": "DeleteRecipeItemMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRecipeItemMutation(\n  $id: uuid!\n) {\n  delete_recipe_item(where: {id: {_eq: $id}}) {\n    returning {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "554f2bd9367868eaf61af7cc02d929dc";

export default node;
