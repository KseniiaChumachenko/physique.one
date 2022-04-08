/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UserQueryVariables = {
    id?: string | null | undefined;
};
export type UserQueryResponse = {
    readonly users_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly email: string | null;
                readonly first_name: string | null;
                readonly last_name: string | null;
                readonly user_name: string | null;
                readonly fb_id: string | null;
                readonly fb_picture_url: string | null;
            };
        }>;
    };
};
export type UserQuery = {
    readonly response: UserQueryResponse;
    readonly variables: UserQueryVariables;
};



/*
query UserQuery(
  $id: uuid
) {
  users_connection(where: {id: {_eq: $id}}) {
    edges {
      node {
        id
        email
        first_name
        last_name
        user_name
        fb_id
        fb_picture_url
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
    "concreteType": "usersConnection",
    "kind": "LinkedField",
    "name": "users_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "usersEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "users",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
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
    "name": "UserQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "423550a08d7fabcc895e807c8c1d0f61",
    "id": null,
    "metadata": {},
    "name": "UserQuery",
    "operationKind": "query",
    "text": "query UserQuery(\n  $id: uuid\n) {\n  users_connection(where: {id: {_eq: $id}}) {\n    edges {\n      node {\n        id\n        email\n        first_name\n        last_name\n        user_name\n        fb_id\n        fb_picture_url\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '01ad2b3410dc16da6391bbe4dc57da79';
export default node;
