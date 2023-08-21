import React, { memo } from "react";
import { Theme } from "@src/components";
import "./index.scss";

interface IHeader {}

const Header = memo((props: IHeader) => {
  return (
    <header className="cms-header">
      <div className="cms-header__left">
        <img
          src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
          alt="cnode"
        />
      </div>
      <div className="cms-header__right">
        <Theme />
      </div>
    </header>
  );
});

export default Header;
