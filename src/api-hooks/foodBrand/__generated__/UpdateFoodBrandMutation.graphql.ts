/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type food_brand_set_input = {
    id?: string | null | undefined;
    name?: string | null | undefined;
};
export type UpdateFoodBrandMutationVariables = {
    _set: food_brand_set_input;
    id: string;
};
export type UpdateFoodBrandMutationResponse = {
    readonly update_food_brand_by_pk: {
        readonly id: string;
        readonly name: string;
    } | null;
};
export type UpdateFoodBrandMutation = {
    readonly response: UpdateFoodBrandMutationResponse;
    readonly variables: UpdateFoodBrandMutationVariables;
};



/*
mutation UpdateFoodBrandMutation(
  $_set: food_brand_set_input!
  $id: uuid!
) {
  update_food_brand_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_set"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_set",
        "variableName": "_set"
      },
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "pk_columns"
      }
    ],
    "concreteType": "food_brand",
    "kind": "LinkedField",
    "name": "update_food_brand_by_pk",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateFoodBrandMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateFoodBrandMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "742d0bd2df1c8356f96d34b5d6e09a1d",
    "id": null,
    "metadata": {},
    "name": "UpdateFoodBrandMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateFoodBrandMutation(\n  $_set: food_brand_set_input!\n  $id: uuid!\n) {\n  update_food_brand_by_pk(pk_columns: {id: $id}, _set: $_set) {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '22b904468c651187ff526ad92369044c';
export default node;
