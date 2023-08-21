import React from "react";
import Routes from "./router";
import { Layout } from "@src/components";
import "./index.scss";
import Header from "@src/template/default/mobile/components/header";

function App() {
  return (
    <Layout Header={<Header />}>
      <Routes />
    </Layout>
  );
}

export default App;
