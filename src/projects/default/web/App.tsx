import React, { useState } from "react";
import { themeList, IThemeName, setTheme } from "@core/theme";
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
      <h1>default-web1</h1>
    </div>
  );
}

export default App;
