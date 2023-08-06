import React, { FC, HtmlHTMLAttributes } from "react";
import "./index.scss";
interface INoData extends HtmlHTMLAttributes<HTMLDivElement> {
  text?: string;
}

const NoData: FC<INoData> = ({ text = "暂无数据", style }) => {
  return (
    <div className="cms-no-data" style={style}>
      {text}
    </div>
  );
};

export default NoData;
