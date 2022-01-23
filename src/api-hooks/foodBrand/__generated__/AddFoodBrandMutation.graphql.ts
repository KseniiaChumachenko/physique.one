/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type food_brand_insert_input = {
    id?: string | null | undefined;
    name?: string | null | undefined;
};
export type AddFoodBrandMutationVariables = {
    objects: Array<food_brand_insert_input>;
};
export type AddFoodBrandMutationResponse = {
    readonly insert_food_brand: {
        readonly returning: ReadonlyArray<{
            readonly id: string;
            readonly name: string;
        }>;
    } | null;
};
export type AddFoodBrandMutation = {
    readonly response: AddFoodBrandMutationResponse;
    readonly variables: AddFoodBrandMutationVariables;
};



/*
mutation AddFoodBrandMutation(
  $objects: [food_brand_insert_input!]!
) {
  insert_food_brand(objects: $objects) {
    returning {
      id
      name
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "objects"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "objects",
        "variableName": "objects"
      }
    ],
    "concreteType": "food_brand_mutation_response",
    "kind": "LinkedField",
    "name": "insert_food_brand",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "food_brand",
        "kind": "LinkedField",
        "name": "returning",
        "plural": true,
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddFoodBrandMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddFoodBrandMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0462c39a3f7b9338b00014d25ae59654",
    "id": null,
    "metadata": {},
    "name": "AddFoodBrandMutation",
    "operationKind": "mutation",
    "text": "mutation AddFoodBrandMutation(\n  $objects: [food_brand_insert_input!]!\n) {\n  insert_food_brand(objects: $objects) {\n    returning {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ff6e86715445674a9c3ef53fdb06c827';
export default node;
