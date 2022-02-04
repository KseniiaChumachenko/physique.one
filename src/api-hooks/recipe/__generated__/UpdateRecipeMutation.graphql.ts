/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type recipe_set_input = {
    description?: string | null | undefined;
    id?: string | null | undefined;
    increment?: number | null | undefined;
    link?: string | null | undefined;
    name?: string | null | undefined;
    portions?: number | null | undefined;
    u_id?: string | null | undefined;
};
export type UpdateRecipeMutationVariables = {
    id: string;
    set?: recipe_set_input | null | undefined;
};
export type UpdateRecipeMutationResponse = {
    readonly update_recipe_by_pk: {
        readonly description: string | null;
        readonly id: string;
        readonly link: string | null;
        readonly increment: number;
        readonly name: string | null;
        readonly portions: number | null;
        readonly u_id: string;
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
    } | null;
};
export type UpdateRecipeMutation = {
    readonly response: UpdateRecipeMutationResponse;
    readonly variables: UpdateRecipeMutationVariables;
};



/*
mutation UpdateRecipeMutation(
  $id: uuid!
  $set: recipe_set_input
) {
  update_recipe_by_pk(pk_columns: {id: $id}, _set: $set) {
    description
    id
    link
    increment
    name
    portions
    u_id
    recipe_items_aggregate {
      aggregate {
        sum {
          carbohydrates
          energy_cal
          energy_kj
          fats
          proteins
          weight
        }
      }
    }
  }
}
*/

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
(node as any).hash = '5336a38df25a7660d0e99bd779332787';
export default node;
