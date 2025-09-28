import React from "react";
import ReactDom from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { setTheme } from "@core/theme";
import ErrorBoundary from "@src/components/errorBoundary";
const config = require("../config");

setTheme(config.theme);

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </HashRouter>
);
