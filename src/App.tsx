import React, { Suspense, useEffect } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import moment from "moment";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core"
import { LocalizationProvider } from "@material-ui/pickers";
import MomentAdapter from "@material-ui/pickers/adapter/moment";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useLanguageSetup } from "./hooks/useLanguageSetup";
import { Router } from "./screens/Router";
import { StoreProvider } from "./store";
import { environment } from "./api";

function App() {
  useLanguageSetup();

  useEffect(() => {
    document.title = "Physique";
  }, []);

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense
        fallback={
          <Backdrop open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <I18nProvider i18n={i18n}>
          <LocalizationProvider
            dateLibInstance={moment}
            dateAdapter={MomentAdapter}
          >
            <StoreProvider>
              <Router />
            </StoreProvider>
          </LocalizationProvider>
        </I18nProvider>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
