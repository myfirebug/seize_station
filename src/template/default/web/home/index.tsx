import React from "react";
import Module from "../components/module";
// 列表
import Topics from "./components/topics";
// 用户
import User from "./components/user";
import { NoData } from "@src/components";

const Home = () => {
  return (
    <div className="cms-layout__center">
      <div className="cms-layout__left">
        <Topics />
      </div>
      <div className="cms-layout__right">
        <User />
        <Module title="无人回复的话题" style={{ marginTop: "15px" }}>
          <NoData
            text="接口暂未开放"
            style={{ height: "auto", lineHeight: "50px" }}
          />
        </Module>
        <Module title="积分榜" style={{ marginTop: "15px" }}>
          <NoData
            text="接口未开放"
            style={{ height: "auto", lineHeight: "50px" }}
          />
        </Module>
        <Module title="友情社区" style={{ marginTop: "15px" }}>
          <NoData
            text="接口暂未开放"
            style={{ height: "auto", lineHeight: "50px" }}
          />
        </Module>
        <Module title="客户端二维码" style={{ marginTop: "15px" }}>
          <img
            width="100%"
            src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"
            alt="客户端二维码"
          />
        </Module>
      </div>
    </div>
  );
};

export default Home;
