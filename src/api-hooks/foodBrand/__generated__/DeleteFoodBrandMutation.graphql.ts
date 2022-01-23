/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteFoodBrandMutationVariables = {
    id: string;
};
export type DeleteFoodBrandMutationResponse = {
    readonly delete_food_brand_by_pk: {
        readonly id: string;
        readonly name: string;
    } | null;
};
export type DeleteFoodBrandMutation = {
    readonly response: DeleteFoodBrandMutationResponse;
    readonly variables: DeleteFoodBrandMutationVariables;
};



/*
mutation DeleteFoodBrandMutation(
  $id: uuid!
) {
  delete_food_brand_by_pk(id: $id) {
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
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "food_brand",
    "kind": "LinkedField",
    "name": "delete_food_brand_by_pk",
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
    "name": "DeleteFoodBrandMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteFoodBrandMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9cd464dbb6493e6deb338eeb16ae1294",
    "id": null,
    "metadata": {},
    "name": "DeleteFoodBrandMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteFoodBrandMutation(\n  $id: uuid!\n) {\n  delete_food_brand_by_pk(id: $id) {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'af434cf3882b57a26b00e05bb0ccd3e2';
export default node;