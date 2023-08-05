import React, { memo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

interface IHeader {}

const Header = memo((props: IHeader) => {
  const location = useLocation();
  console.log(location, "location");
  const [navs] = useState([
    {
      path: "/home",
      name: "首页",
    },
    {
      path: "/getstart",
      name: "新手入门",
    },
    {
      path: "/api",
      name: "API",
    },
    {
      path: "/about",
      name: "关于",
    },
    {
      path: "/register",
      name: "注册",
    },
    {
      path: "/login",
      name: "登录",
    },
  ]);
  return (
    <header className="cms-header">
      <div className="cms-header__content">
        <div className="cms-header__left">
          <img
            src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
            alt="cnode"
          />
        </div>
        <nav className="cms-header__right">
          {navs.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "is-active" : ""}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
});

export default Header;
