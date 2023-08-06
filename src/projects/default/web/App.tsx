import React, { useState } from "react";
import { themeList, IThemeName, setTheme } from "@core/theme";
import Routes from "./router";
import { Layout } from "@src/components";
import Header from "@src/template/default/web/components/header";
import Footer from "@src/template/default/web/components/footer";
import "./index.scss";

const config = require("../config");

function App() {
  const [currentTheme, setCurrentTheme] = useState<IThemeName>(config.theme);
  return (
    <>
      <select
        style={{ position: "fixed", zIndex: 101 }}
        value={currentTheme}
        onChange={(e) => {
          const value = e.target.value as IThemeName;
          setCurrentTheme(value);
          setTheme(value);
        }}
      >
        {themeList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <Layout
        className="cms-layout-default"
        Header={<Header />}
        Footer={<Footer />}
        paddingTop="50px"
        mainMinHeight="calc(100vh - 107px)"
      >
        <Routes />
      </Layout>
    </>
  );
}

export default App;
