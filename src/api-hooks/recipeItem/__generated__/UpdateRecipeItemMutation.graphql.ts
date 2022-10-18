/**
 * @generated SignedSource<<d018752cd51707222341f5aeb40c86b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type recipe_item_set_input = {
  carbohydrates?: number | null;
  energy_cal?: number | null;
  energy_kj?: number | null;
  fats?: number | null;
  food_id?: string | null;
  id?: string | null;
  proteins?: number | null;
  recipe_id?: string | null;
  u_id?: string | null;
  weight?: number | null;
};
export type UpdateRecipeItemMutation$variables = {
  id: string;
  set?: recipe_item_set_input | null;
};
export type UpdateRecipeItemMutation$data = {
  readonly update_recipe_item_by_pk: {
    readonly recipe: {
      readonly description: string | null;
      readonly id: string;
      readonly increment: number;
      readonly link: string | null;
      readonly name: string | null;
      readonly portions: number | null;
      readonly u_id: string;
    };
  } | null;
};
export type UpdateRecipeItemMutation = {
  response: UpdateRecipeItemMutation$data;
  variables: UpdateRecipeItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "set"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "_set",
    "variableName": "set"
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
  "concreteType": "recipe",
  "kind": "LinkedField",
  "name": "recipe",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "increment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "link",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "portions",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "u_id",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateRecipeItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "recipe_item",
        "kind": "LinkedField",
        "name": "update_recipe_item_by_pk",
        "plural": false,
        "selections": [
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
    "name": "UpdateRecipeItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "recipe_item",
        "kind": "LinkedField",
        "name": "update_recipe_item_by_pk",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c1f26c7d001d905858e57421bcef4e3f",
    "id": null,
    "metadata": {},
    "name": "UpdateRecipeItemMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateRecipeItemMutation(\n  $id: uuid!\n  $set: recipe_item_set_input\n) {\n  update_recipe_item_by_pk(pk_columns: {id: $id}, _set: $set) {\n    recipe {\n      description\n      id\n      increment\n      link\n      name\n      portions\n      u_id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e7abf367b1f37797cb526583024cc8a0";

export default node;
