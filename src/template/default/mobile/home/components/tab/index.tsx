import React, { FC, useState } from "react";
import "./index.scss";
import { ITab } from "@src/service";
import { ITopicsParams } from "@src/core/hook";
interface ITabs {
  params: ITopicsParams;
  setParams: React.Dispatch<React.SetStateAction<ITopicsParams>>;
}

const Tabs: FC<ITabs> = ({ params, setParams }) => {
  const [tabs] = useState([
    {
      name: "全部",
      value: "",
    },
    {
      name: "精华",
      value: "good",
    },
    {
      name: "分享",
      value: "share",
    },
    {
      name: "问答",
      value: "ask",
    },
    {
      name: "招聘",
      value: "job",
    },
    {
      name: "客户端测试",
      value: "dev",
    },
  ]);
  return (
    <div className="cms-tab">
      {tabs.map((item) => (
        <span
          className={`cms-tab__item ${
            params.tab === item.value ? "is-active" : ""
          }`}
          onClick={() =>
            setParams((state) => ({
              ...state,
              page: 1,
              tab: item.value as ITab,
              update: new Date().getTime(),
            }))
          }
          key={item.value}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
