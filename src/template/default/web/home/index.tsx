import React from "react";
import Module from "../components/module";
// 列表
import Topics from "./components/topics";
import "./index.scss";

const Home = () => {
  return (
    <div className="cms-home">
      <div className="cms-home__left">
        <Topics />
      </div>
      <div className="cms-home__right">
        <Module>
          CNode：Node.js专业中文社区
          <br /> 您可以 登录 或 注册, 也可以
        </Module>
        <Module title="无人回复的话题" style={{ marginTop: "15px" }}>
          123
        </Module>
        <Module title="积分榜" style={{ marginTop: "15px" }}>
          123
        </Module>
        <Module title="友情社区" style={{ marginTop: "15px" }}>
          123
        </Module>
        <Module title="客户端二维码" style={{ marginTop: "15px" }}>
          123
        </Module>
      </div>
    </div>
  );
};

export default Home;
