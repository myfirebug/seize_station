import React from "react";
import Routes from "./router";
import { Layout } from "@src/components";
import Header from "@src/template/default/web/components/header";
import Footer from "@src/template/default/web/components/footer";
import "./index.scss";

function App() {
  return (
    <Layout
      className="cms-layout-default"
      Header={<Header />}
      Footer={<Footer />}
      paddingTop="50px"
      mainMinHeight="calc(100vh - 107px)"
    >
      <Routes />
    </Layout>
  );
}

export default App;
