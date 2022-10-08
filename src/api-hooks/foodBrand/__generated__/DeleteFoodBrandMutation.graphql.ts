/**
 * @generated SignedSource<<ed91667426de4573dc73aa5c1ad1e8b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteFoodBrandMutation$variables = {
  id: string;
};
export type DeleteFoodBrandMutation$data = {
  readonly delete_food_brand_by_pk: {
    readonly id: string;
    readonly name: string;
  } | null;
};
export type DeleteFoodBrandMutation = {
  variables: DeleteFoodBrandMutation$variables;
  response: DeleteFoodBrandMutation$data;
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
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteFoodBrandMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "food_brand",
        "kind": "LinkedField",
        "name": "delete_food_brand_by_pk",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
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
    "name": "DeleteFoodBrandMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "food_brand",
        "kind": "LinkedField",
        "name": "delete_food_brand_by_pk",
        "plural": false,
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
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
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

(node as any).hash = "3e22c7c20486080cb67227f3b945421f";

export default node;
