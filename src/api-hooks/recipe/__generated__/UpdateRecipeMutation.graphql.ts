/**
 * @generated SignedSource<<f9602091378ac93cea257444a1a29b4c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type recipe_set_input = {
  description?: string | null;
  id?: string | null;
  increment?: number | null;
  link?: string | null;
  name?: string | null;
  portions?: number | null;
  u_id?: string | null;
};
export type UpdateRecipeMutation$variables = {
  id: string;
  set?: recipe_set_input | null;
};
export type UpdateRecipeMutation$data = {
  readonly update_recipe_by_pk: {
    readonly description: string | null;
    readonly id: string;
    readonly increment: number;
    readonly isOwner: boolean | null;
    readonly link: string | null;
    readonly name: string | null;
    readonly portions: number | null;
    readonly recipe_items_aggregate: {
      readonly aggregate: {
        readonly sum: {
          readonly carbohydrates: number | null;
          readonly energy_cal: number | null;
          readonly energy_kj: number | null;
          readonly fats: number | null;
          readonly proteins: number | null;
          readonly weight: number | null;
        } | null;
      } | null;
    };
    readonly u_id: string;
  } | null;
};
export type UpdateRecipeMutation = {
  response: UpdateRecipeMutation$data;
  variables: UpdateRecipeMutation$variables;
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
    "alias": null,
    "args": [
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
    "concreteType": "recipe",
    "kind": "LinkedField",
    "name": "update_recipe_by_pk",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
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
        "name": "link",
        "storageKey": null
      },
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "recipe_item_aggregate",
        "kind": "LinkedField",
        "name": "recipe_items_aggregate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "recipe_item_aggregate_fields",
            "kind": "LinkedField",
            "name": "aggregate",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "recipe_item_sum_fields",
                "kind": "LinkedField",
                "name": "sum",
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
                    "name": "proteins",
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isOwner",
            "storageKey": null
          }
        ]
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
    "name": "UpdateRecipeMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateRecipeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7624bbe4cab04aa92149624608651589",
    "id": null,
    "metadata": {},
    "name": "UpdateRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateRecipeMutation(\n  $id: uuid!\n  $set: recipe_set_input\n) {\n  update_recipe_by_pk(pk_columns: {id: $id}, _set: $set) {\n    description\n    id\n    link\n    increment\n    name\n    portions\n    u_id\n    recipe_items_aggregate {\n      aggregate {\n        sum {\n          carbohydrates\n          energy_cal\n          energy_kj\n          fats\n          proteins\n          weight\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6ddb93239b00718a79029fd70c7e983e";

export default node;
