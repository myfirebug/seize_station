import React, { ReactNode, memo, HtmlHTMLAttributes } from "react";
import "./index.scss";
interface IModule extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode | string;
  children: ReactNode;
}

const Module = memo((props: IModule) => {
  const { title, children, style, className } = props;
  return (
    <div className={`cms-module ${className || ""}`} style={style}>
      {title && <div className="cms-module__header">{title}</div>}
      <div className="cms-module__body">{children}</div>
    </div>
  );
});

export default Module;
