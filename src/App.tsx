import "regenerator-runtime/runtime";
import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";
import moment from "moment";
import { I18nProvider } from "@lingui/react";
import { ApolloProvider } from "@apollo/client";
import { LocalizationProvider } from "@material-ui/pickers";
import MomentAdapter from "@material-ui/pickers/adapter/moment";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useLanguageSetup } from "./hooks/useLanguageSetup";
import { Router } from "./screens/Router";
import { StoreProvider } from "./store";
import { api, GQL_HTTPS_ENDPOINT } from "./api";

// TODO move when apollo client removed
const fetchQuery: FetchFunction = (
  operation,
  variables,
  cacheConfig,
  uploadables
) => {
  return fetch(GQL_HTTPS_ENDPOINT, {
    method: "POST",
    headers: {
      // Add authentication and other headers here
      "content-type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
    } as any,
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
};

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

const environment = new Environment({
  network,
  store,
});

function App() {
  const { i18n, locale } = useLanguageSetup();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense
        fallback={
          <Backdrop open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <ApolloProvider client={api}>
          <I18nProvider i18n={i18n} language={locale.language}>
            <LocalizationProvider
              dateLibInstance={moment}
              dateAdapter={MomentAdapter}
            >
              <StoreProvider>
                <Router />
              </StoreProvider>
            </LocalizationProvider>
          </I18nProvider>
        </ApolloProvider>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
0;
