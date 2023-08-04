import React, { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface ILayout {
  Header?: ReactNode;
  Footer?: ReactNode;
  Sidder?: ReactNode;
}

const Layout: FC<ILayout> = ({ Header, Footer, Sidder }) => {
  return (
    <div>
      {Header}
      <div>
        {Sidder}
        <Outlet />
      </div>
      {Footer}
    </div>
  );
};

export default Layout;
