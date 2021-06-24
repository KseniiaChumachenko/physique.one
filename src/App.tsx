import "regenerator-runtime/runtime";
import React from "react";
import moment from "moment";
import { I18nProvider } from "@lingui/react";
import { ApolloProvider } from "@apollo/client";
import { LocalizationProvider } from "@material-ui/pickers";
import MomentAdapter from "@material-ui/pickers/adapter/moment";
import { useLanguageSetup } from "./hooks/useLanguageSetup";
import { Router } from "./screens/Router";
import { StoreProvider } from "./store";
import { api } from "./api";

function App() {
  const { i18n, locale } = useLanguageSetup();

  return (
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
  );
}

export default App;
