import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
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
