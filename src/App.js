import React, { useEffect } from "react";
// Router
import { HashRouter as Router } from "react-router-dom";
import RouteBuilder from "components/Router/RouteBuilder";
import { renderRoutes } from "react-router-config";
import { routes } from "routes";
// MUi theme
import { ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { theme } from "theme";
// i18n
import { DEFAULT_LANGUAGE, loadLanguage } from './utils/language';
import { initReactI18next } from "react-i18next";
import en from './translations/en.json';
import de from './translations/de.json';
import i18n from "i18next";
// Redux
import { Provider } from "react-redux";
import { store } from 'reduxToolkit';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de }
    },
    lng: loadLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <Router>
              <RouteBuilder>
                {renderRoutes(routes)}
              </RouteBuilder>
            </Router>
          </StyledEngineProvider>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
