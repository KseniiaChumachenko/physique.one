/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UpdateRecipeMutationVariables = {
    id: string;
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
        readonly recipe_items_connection: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly weight: number;
                    readonly u_id: string;
                    readonly recipe_id: string;
                    readonly proteins: number;
                    readonly id: string;
                    readonly food_id: string;
                    readonly fats: number;
                    readonly energy_kj: number;
                    readonly energy_cal: number;
                    readonly carbohydrates: number;
                };
            }>;
        };
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
) {
  update_recipe_by_pk(pk_columns: {id: $id}) {
    description
    id
    link
    increment
    name
    portions
    u_id
    recipe_items_connection(where: {recipe_id: {_eq: $id}}) {
      edges {
        node {
          weight
          u_id
          recipe_id
          proteins
          id
          food_id
          fats
          energy_kj
          energy_cal
          carbohydrates
        }
      }
    }
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
  "name": "u_id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weight",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "proteins",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fats",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_kj",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "energy_cal",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "carbohydrates",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": [
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
      (v1/*: any*/),
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
      (v2/*: any*/),
      {
        "alias": null,
        "args": [
          {
            "fields": [
              {
                "fields": [
                  {
                    "kind": "Variable",
                    "name": "_eq",
                    "variableName": "id"
                  }
                ],
                "kind": "ObjectValue",
                "name": "recipe_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "recipe_itemConnection",
        "kind": "LinkedField",
        "name": "recipe_items_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "recipe_itemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "recipe_item",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "recipe_id",
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "food_id",
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/)
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
                  (v8/*: any*/),
                  (v7/*: any*/),
                  (v6/*: any*/),
                  (v5/*: any*/),
                  (v4/*: any*/),
                  (v3/*: any*/)
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
    "selections": (v9/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateRecipeMutation",
    "selections": (v9/*: any*/)
  },
  "params": {
    "cacheID": "b114c91e2ac4237123b01c28b9e7c90b",
    "id": null,
    "metadata": {},
    "name": "UpdateRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateRecipeMutation(\n  $id: uuid!\n) {\n  update_recipe_by_pk(pk_columns: {id: $id}) {\n    description\n    id\n    link\n    increment\n    name\n    portions\n    u_id\n    recipe_items_connection(where: {recipe_id: {_eq: $id}}) {\n      edges {\n        node {\n          weight\n          u_id\n          recipe_id\n          proteins\n          id\n          food_id\n          fats\n          energy_kj\n          energy_cal\n          carbohydrates\n        }\n      }\n    }\n    recipe_items_aggregate {\n      aggregate {\n        sum {\n          carbohydrates\n          energy_cal\n          energy_kj\n          fats\n          proteins\n          weight\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '38e2a53869b8322dce7d9811f9792f08';
export default node;
