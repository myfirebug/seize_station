import React, { useState } from "react";
import { themeList, IThemeName, setTheme } from "@core/theme";
import Routes from "./router";
import "./index.scss";
const config = require("../config");

function App() {
  const [currentTheme, setCurrentTheme] = useState<IThemeName>(config.theme);
  return (
    <div className="app">
      <select
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
    </div>
  );
}

export default App;
