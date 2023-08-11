import React from "react";
import Routes from "./router";
import { Layout } from "@src/components";
import "./index.scss";

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
