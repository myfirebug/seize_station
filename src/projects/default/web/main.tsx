import React from "react";
import ReactDom from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { setTheme } from "@core/theme";
import EasyAgentSDK from "@src/core/sdk";
import ErrorBoundary from "@src/components/errorBoundary";
const config = require("../config");

setTheme(config.theme);

new EasyAgentSDK({
  baseUrl: "test",
  appId: "cnode",
  onPageShow: () => {},
  onPageHide: () => {},
  actionTypes: ["login"],
});

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
