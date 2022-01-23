/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteFoodMutationVariables = {
    id: string;
};
export type DeleteFoodMutationResponse = {
    readonly delete_food_by_pk: {
        readonly brand_id: string | null;
        readonly carbohydrates: number;
        readonly energy_cal: number;
        readonly energy_kj: number;
        readonly fats: number;
        readonly food_brand: {
            readonly id: string;
            readonly name: string;
        } | null;
        readonly id: string;
        readonly name: string;
        readonly proteins: number;
        readonly type: string;
        readonly u_id: string | null;
        readonly weight: number | null;
    } | null;
};
export type DeleteFoodMutation = {
    readonly response: DeleteFoodMutationResponse;
    readonly variables: DeleteFoodMutationVariables;
};



/*
mutation DeleteFoodMutation(
  $id: uuid!
) {
  delete_food_by_pk(id: $id) {
    brand_id
    carbohydrates
    energy_cal
    energy_kj
    fats
    food_brand {
      id
      name
    }
    id
    name
    proteins
    type
    u_id
    weight
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "food",
    "kind": "LinkedField",
    "name": "delete_food_by_pk",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "brand_id",
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
        "name": "fats",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "food_brand",
        "kind": "LinkedField",
        "name": "food_brand",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      (v1/*: any*/),
      (v2/*: any*/),
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
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "u_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "weight",
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
    "name": "DeleteFoodMutation",
    "selections": (v3/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteFoodMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "004d586f8872233343057d49a4a3a247",
    "id": null,
    "metadata": {},
    "name": "DeleteFoodMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteFoodMutation(\n  $id: uuid!\n) {\n  delete_food_by_pk(id: $id) {\n    brand_id\n    carbohydrates\n    energy_cal\n    energy_kj\n    fats\n    food_brand {\n      id\n      name\n    }\n    id\n    name\n    proteins\n    type\n    u_id\n    weight\n  }\n}\n"
  }
};
})();
(node as any).hash = '3823fd02f9a20dd833c1134190e4752b';
export default node;
