import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "routes";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "theme";
import RouteBuilder from "components/Router/RouteBuilder";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <RouteBuilder>
            {renderRoutes(routes)}
          </RouteBuilder>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
