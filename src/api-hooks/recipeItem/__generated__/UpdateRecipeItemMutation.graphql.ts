/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UpdateRecipeItemMutationVariables = {
    id?: string | null | undefined;
    recipe_id: string;
};
export type UpdateRecipeItemMutationResponse = {
    readonly update_recipe_item_by_pk: {
        readonly recipe: {
            readonly description: string | null;
            readonly id: string;
            readonly increment: number;
            readonly link: string | null;
            readonly name: string | null;
            readonly portions: number | null;
            readonly u_id: string;
            readonly recipe_items_connection: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly carbohydrates: number;
                        readonly energy_cal: number;
                        readonly energy_kj: number;
                        readonly fats: number;
                        readonly food_id: string;
                        readonly id: string;
                        readonly proteins: number;
                        readonly recipe_id: string;
                        readonly u_id: string;
                        readonly weight: number;
                    };
                }>;
            };
        };
    } | null;
};
export type UpdateRecipeItemMutation = {
    readonly response: UpdateRecipeItemMutationResponse;
    readonly variables: UpdateRecipeItemMutationVariables;
};



/*
mutation UpdateRecipeItemMutation(
  $id: uuid = ""
  $recipe_id: uuid!
) {
  update_recipe_item_by_pk(pk_columns: {id: $id}) {
    recipe {
      description
      id
      increment
      link
      name
      portions
      u_id
      recipe_items_connection(where: {recipe_id: {_eq: $recipe_id}}) {
        edges {
          node {
            carbohydrates
            energy_cal
            energy_kj
            fats
            food_id
            id
            proteins
            recipe_id
            u_id
            weight
          }
        }
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "recipe_id"
  }
],
v1 = [
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
  "kind": "ScalarField",
  "name": "u_id",
  "storageKey": null
},
v4 = {
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
    (v3/*: any*/),
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
                  "variableName": "recipe_id"
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
                  "name": "food_id",
                  "storageKey": null
                },
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
                  "name": "recipe_id",
                  "storageKey": null
                },
                (v3/*: any*/),
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
          (v4/*: any*/)
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
          (v4/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6ffe51b74955d54eb55e46d9d9a7e43c",
    "id": null,
    "metadata": {},
    "name": "UpdateRecipeItemMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateRecipeItemMutation(\n  $id: uuid = \"\"\n  $recipe_id: uuid!\n) {\n  update_recipe_item_by_pk(pk_columns: {id: $id}) {\n    recipe {\n      description\n      id\n      increment\n      link\n      name\n      portions\n      u_id\n      recipe_items_connection(where: {recipe_id: {_eq: $recipe_id}}) {\n        edges {\n          node {\n            carbohydrates\n            energy_cal\n            energy_kj\n            fats\n            food_id\n            id\n            proteins\n            recipe_id\n            u_id\n            weight\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '336a524809b35e0cda6cc380b42198f0';
export default node;
