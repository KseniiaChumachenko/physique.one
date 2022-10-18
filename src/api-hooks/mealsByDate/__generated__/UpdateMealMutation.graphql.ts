/**
 * @generated SignedSource<<6939d4054bdbd65a1b1506c6615ef15e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type meal_set_input = {
  date?: string | null;
  id?: string | null;
  name?: string | null;
  time?: string | null;
  u_id?: string | null;
};
export type UpdateMealMutation$variables = {
  _set?: meal_set_input | null;
  id: string;
};
export type UpdateMealMutation$data = {
  readonly update_meal_by_pk: {
    readonly date: string | null;
    readonly name: string | null;
    readonly time: string | null;
  } | null;
};
export type UpdateMealMutation = {
  response: UpdateMealMutation$data;
  variables: UpdateMealMutation$variables;
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "time",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateMealMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "meal",
        "kind": "LinkedField",
        "name": "update_meal_by_pk",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
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
    "name": "UpdateMealMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "meal",
        "kind": "LinkedField",
        "name": "update_meal_by_pk",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cf912733fe9eb136ced8ccdc4231e45d",
    "id": null,
    "metadata": {},
    "name": "UpdateMealMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateMealMutation(\n  $id: uuid!\n  $_set: meal_set_input = {}\n) {\n  update_meal_by_pk(pk_columns: {id: $id}, _set: $_set) {\n    date\n    name\n    time\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "164788e7abf377490385f79b92445d84";

export default node;
