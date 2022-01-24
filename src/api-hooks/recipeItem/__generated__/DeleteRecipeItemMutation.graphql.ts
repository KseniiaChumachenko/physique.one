/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteRecipeItemMutationVariables = {
    recipe_id: string;
};
export type DeleteRecipeItemMutationResponse = {
    readonly delete_recipe_item: {
        readonly returning: ReadonlyArray<{
            readonly id: string;
        }>;
    } | null;
};
export type DeleteRecipeItemMutation = {
    readonly response: DeleteRecipeItemMutationResponse;
    readonly variables: DeleteRecipeItemMutationVariables;
};



/*
mutation DeleteRecipeItemMutation(
  $recipe_id: uuid!
) {
  delete_recipe_item(where: {recipe_id: {_eq: $recipe_id}}) {
    returning {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "recipe_id"
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
            "variableName": "recipe_id"
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
    "cacheID": "bb08ae7eb596b671c1e9141d3d922bfa",
    "id": null,
    "metadata": {},
    "name": "DeleteRecipeItemMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRecipeItemMutation(\n  $recipe_id: uuid!\n) {\n  delete_recipe_item(where: {recipe_id: {_eq: $recipe_id}}) {\n    returning {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3e586cf96c02c598ae6fba3b9868011d';
export default node;
