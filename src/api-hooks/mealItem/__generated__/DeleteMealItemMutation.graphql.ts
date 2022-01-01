/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteMealItemMutationVariables = {
    id: string;
};
export type DeleteMealItemMutationResponse = {
    readonly delete_meal_item_by_pk: {
        readonly carbohydrates: number;
        readonly energy_cal: number;
        readonly energy_kj: number;
        readonly fats: number;
        readonly food: string | null;
        readonly id: string;
        readonly meal_id: string;
        readonly proteins: number;
        readonly recipe_id: string | null;
        readonly u_id: string;
        readonly weight: number;
    } | null;
};
export type DeleteMealItemMutation = {
    readonly response: DeleteMealItemMutationResponse;
    readonly variables: DeleteMealItemMutationVariables;
};



/*
mutation DeleteMealItemMutation(
  $id: uuid!
) {
  delete_meal_item_by_pk(id: $id) {
    carbohydrates
    energy_cal
    energy_kj
    fats
    food
    id
    meal_id
    proteins
    recipe_id
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
    "concreteType": "meal_item",
    "kind": "LinkedField",
    "name": "delete_meal_item_by_pk",
    "plural": false,
    "selections": [
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
        "kind": "ScalarField",
        "name": "food",
        "storageKey": null
      },
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
        "name": "meal_id",
        "storageKey": null
      },
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
        "name": "recipe_id",
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
    "name": "DeleteMealItemMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteMealItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b7c565779e3b3250591e6ba0d79d021c",
    "id": null,
    "metadata": {},
    "name": "DeleteMealItemMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteMealItemMutation(\n  $id: uuid!\n) {\n  delete_meal_item_by_pk(id: $id) {\n    carbohydrates\n    energy_cal\n    energy_kj\n    fats\n    food\n    id\n    meal_id\n    proteins\n    recipe_id\n    u_id\n    weight\n  }\n}\n"
  }
};
})();
(node as any).hash = 'deabbda7a04ac73902d87453271a5960';
export default node;
