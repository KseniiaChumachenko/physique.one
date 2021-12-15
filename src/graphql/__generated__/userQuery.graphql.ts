/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type userQueryVariables = {
    id?: unknown | null | undefined;
};
export type userQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: unknown;
        readonly email: string | null;
        readonly first_name: string | null;
        readonly last_name: string | null;
        readonly user_name: string | null;
        readonly fb_id: string | null;
        readonly fb_picture_url: string | null;
    }>;
};
export type userQuery = {
    readonly response: userQueryResponse;
    readonly variables: userQueryVariables;
};



/*
query userQuery(
  $id: uuid
) {
  users(where: {id: {_eq: $id}}) {
    id
    email
    first_name
    last_name
    user_name
    fb_id
    fb_picture_url
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
            "name": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "users",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "first_name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "last_name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "user_name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fb_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fb_picture_url",
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
    "name": "userQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "userQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0f5812bd99c53d609d5e5e42899818a5",
    "id": null,
    "metadata": {},
    "name": "userQuery",
    "operationKind": "query",
    "text": "query userQuery(\n  $id: uuid\n) {\n  users(where: {id: {_eq: $id}}) {\n    id\n    email\n    first_name\n    last_name\n    user_name\n    fb_id\n    fb_picture_url\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e56561d4bfdce33a8605afff07f4974f';
export default node;
