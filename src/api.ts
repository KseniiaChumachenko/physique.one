import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import {
  ApolloClient,
  DocumentNode,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const GQL_WS_ENDPOINT = process.env.GQL_WS_ENDPOINT || "";
const GQL_HTTPS_ENDPOINT = process.env.GQL_HTTPS_ENDPOINT || "";

const headers = {
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
  },
};

const wsLink = new WebSocketLink(
  new SubscriptionClient(GQL_WS_ENDPOINT, {
    reconnect: true,
    connectionParams: headers,
  })
);

const httpLink = new HttpLink({
  uri: GQL_HTTPS_ENDPOINT,
  ...headers,
});

const link = split(
  ({ query }) => {
    const defs = getMainDefinition(query);
    return (
      defs.kind === "OperationDefinition" && defs.operation === "subscription"
    );
  },
  wsLink as any,
  httpLink
);

export const api = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export const mutate = async <V = Record<string, unknown>>({
  document,
  variables,
  onOptimisticUpdate,
  onSuccess,
  onError,
}: {
  document: DocumentNode;
  variables?: V;
  onOptimisticUpdate?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  onOptimisticUpdate?.();
  await api
    .mutate({ mutation: document, variables })
    .then(({ data, errors }) => {
      if (data) {
        onSuccess?.();
        return data;
      }
      if (errors) {
        onError?.();
      }
    })
    .catch((error) => error);
};

export const query = async <D, V = Record<string, unknown>>({
  document,
  variables,
  onSuccess,
  onError,
}: {
  document: DocumentNode;
  variables?: V;
  onSuccess?: (data: D) => void;
  onError?: () => void;
}) => {
  await api.query({ query: document, variables }).then(({ data, errors }) => {
    if (data) {
      onSuccess?.(data);
    }
    if (errors) {
      onError?.();
    }
  });
};
