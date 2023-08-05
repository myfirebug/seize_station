import React, { useState } from "react";
import { themeList, IThemeName, setTheme } from "@core/theme";
import Routes from "./router";
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
      <Routes />
    </>
  );
}

export default App;
