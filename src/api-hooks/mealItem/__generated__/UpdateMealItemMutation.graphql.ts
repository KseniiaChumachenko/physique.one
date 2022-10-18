/**
 * @generated SignedSource<<7f855651538cd4ab2060aa7986d5fb48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type meal_item_set_input = {
  carbohydrates?: number | null;
  energy_cal?: number | null;
  energy_kj?: number | null;
  fats?: number | null;
  food?: string | null;
  id?: string | null;
  meal_id?: string | null;
  proteins?: number | null;
  recipe_id?: string | null;
  u_id?: string | null;
  weight?: number | null;
};
export type UpdateMealItemMutation$variables = {
  _set?: meal_item_set_input | null;
  id: string;
};
export type UpdateMealItemMutation$data = {
  readonly update_meal_item_by_pk: {
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
export type UpdateMealItemMutation = {
  response: UpdateMealItemMutation$data;
  variables: UpdateMealItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": {},
  "kind": "LocalArgument",
  "name": "_set"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
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
    "concreteType": "meal_item",
    "kind": "LinkedField",
    "name": "update_meal_item_by_pk",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateMealItemMutation",
    "selections": (v2/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateMealItemMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "9f8341457a0dd5642bf394262e0d9133",
    "id": null,
    "metadata": {},
    "name": "UpdateMealItemMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateMealItemMutation(\n  $id: uuid!\n  $_set: meal_item_set_input = {}\n) {\n  update_meal_item_by_pk(pk_columns: {id: $id}, _set: $_set) {\n    carbohydrates\n    energy_cal\n    energy_kj\n    fats\n    food\n    id\n    meal_id\n    proteins\n    recipe_id\n    u_id\n    weight\n  }\n}\n"
  }
};
})();

(node as any).hash = "d00706c4f950c4ba8632ae66c25a3479";

export default node;
