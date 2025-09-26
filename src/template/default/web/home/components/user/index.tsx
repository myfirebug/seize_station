import React, { FC } from "react";
import Module from "../../../components/module";
import "./index.scss";

interface IUser {}

const User: FC<IUser> = () => {
  return (
    <Module className="cms-user">
      <div className="button" data-sdk="login">
        登录
      </div>
      <div className="button">注册</div>
    </Module>
  );
};

export default User;
