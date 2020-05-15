import "regenerator-runtime/runtime";
import React from "react";
import { I18nProvider } from "@lingui/react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { LocalizationProvider } from "@material-ui/pickers";
import MomentAdapter from "@material-ui/pickers/adapter/moment";
import { useLanguageSetup } from "./hooks/useLanguageSetup";
import { Router } from "./components/Router";
import moment from "moment";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://body-monitor-be.herokuapp.com/v1/graphql",
    headers: {
      "x-hasura-admin-secret": "KsChu1606",
    },
  }),
});

function App() {
  const { i18n, locale, setLocale } = useLanguageSetup();

  return (
    <ApolloProvider client={client}>
      <I18nProvider i18n={i18n} language={locale.language}>
        <LocalizationProvider
          dateLibInstance={moment}
          dateAdapter={MomentAdapter}
        >
          <Router />
        </LocalizationProvider>
      </I18nProvider>
    </ApolloProvider>
  );
}

export default App;
