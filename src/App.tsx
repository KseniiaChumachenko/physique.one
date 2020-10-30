import "regenerator-runtime/runtime";
import React from "react";
import moment from "moment";
import { I18nProvider } from "@lingui/react";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "@apollo/link-ws";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { LocalizationProvider } from "@material-ui/pickers";
import MomentAdapter from "@material-ui/pickers/adapter/moment";
import { useLanguageSetup } from "./hooks/useLanguageSetup";
import { Router } from "./screens/Router";
import { UserProvider } from "./screens/context/userContext";

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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const { i18n, locale } = useLanguageSetup();

  return (
    <ApolloProvider client={client}>
      <I18nProvider i18n={i18n} language={locale.language}>
        <LocalizationProvider
          dateLibInstance={moment}
          dateAdapter={MomentAdapter}
        >
          <UserProvider>
            <Router />
          </UserProvider>
        </LocalizationProvider>
      </I18nProvider>
    </ApolloProvider>
  );
}

export default App;
