import React, { FC, HtmlHTMLAttributes, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface ILayout extends HtmlHTMLAttributes<HTMLDivElement> {
  paddingTop?: number | string;
  mainMinHeight?: string | number;
  Header?: ReactNode;
  Footer?: ReactNode;
  Sidder?: ReactNode;
}

const Layout: FC<ILayout> = ({
  Header,
  Footer,
  Sidder,
  paddingTop,
  mainMinHeight,
  className,
}) => {
  return (
    <div className="cms-layout" style={{ paddingTop: paddingTop }}>
      {Header}
      <div
        className={`cms-layout__main ${className || ""}`}
        style={{ minHeight: mainMinHeight }}
      >
        {Sidder}
        <Outlet />
      </div>
      {Footer}
    </div>
  );
};

export default Layout;
