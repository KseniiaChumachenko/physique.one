/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type food_set_input = {
    A?: number | null | undefined;
    B1?: number | null | undefined;
    B12?: number | null | undefined;
    B2?: number | null | undefined;
    B3?: number | null | undefined;
    B5?: number | null | undefined;
    B6?: number | null | undefined;
    B7?: number | null | undefined;
    B9?: number | null | undefined;
    C?: number | null | undefined;
    D?: number | null | undefined;
    E?: number | null | undefined;
    K?: number | null | undefined;
    brand_id?: string | null | undefined;
    calcium?: number | null | undefined;
    carbohydrates?: number | null | undefined;
    carbohydrates_fiber?: number | null | undefined;
    carbohydrates_starch?: number | null | undefined;
    carbohydrates_sugars?: number | null | undefined;
    copper?: number | null | undefined;
    energy_cal?: number | null | undefined;
    energy_kj?: number | null | undefined;
    fats?: number | null | undefined;
    id?: string | null | undefined;
    iron?: number | null | undefined;
    magnesium?: number | null | undefined;
    manganese?: number | null | undefined;
    name?: string | null | undefined;
    phosphorus?: number | null | undefined;
    potassium?: number | null | undefined;
    proteins?: number | null | undefined;
    selenium?: number | null | undefined;
    sodium?: number | null | undefined;
    type?: string | null | undefined;
    u_id?: string | null | undefined;
    weight?: number | null | undefined;
    zinc?: number | null | undefined;
};
export type UpdateFoodMutationVariables = {
    _set: food_set_input;
    id: string;
};
export type UpdateFoodMutationResponse = {
    readonly update_food_by_pk: {
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
export type UpdateFoodMutation = {
    readonly response: UpdateFoodMutationResponse;
    readonly variables: UpdateFoodMutationVariables;
};



/*
mutation UpdateFoodMutation(
  $_set: food_set_input!
  $id: uuid!
) {
  update_food_by_pk(pk_columns: {id: $id}, _set: $_set) {
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
    "name": "_set"
  },
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
    "concreteType": "food",
    "kind": "LinkedField",
    "name": "update_food_by_pk",
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
    "name": "UpdateFoodMutation",
    "selections": (v3/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateFoodMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "2ea8a7761fb97222537b3bd52731e6ff",
    "id": null,
    "metadata": {},
    "name": "UpdateFoodMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateFoodMutation(\n  $_set: food_set_input!\n  $id: uuid!\n) {\n  update_food_by_pk(pk_columns: {id: $id}, _set: $_set) {\n    brand_id\n    carbohydrates\n    energy_cal\n    energy_kj\n    fats\n    food_brand {\n      id\n      name\n    }\n    id\n    name\n    proteins\n    type\n    u_id\n    weight\n  }\n}\n"
  }
};
})();
(node as any).hash = '6204bdf37bd0efb96d3f2701912d7a60';
export default node;
