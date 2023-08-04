import { NonIndexRouteObject } from "react-router-dom";

export interface IRoute extends NonIndexRouteObject {
  // 页面标题
  title: string;
  // 模块路径在template模块下的路径
  modulePath: string;
  // 是否需要token
  auth: boolean;
  children?: IRoute[];
}

const routerDatas: IRoute[] = [
  {
    path: "/login",
    title: "登录",
    modulePath: "default/web/login",
    auth: false,
  },
  {
    path: "/",
    title: "",
    modulePath: "default/web/layout",
    auth: false,
    children: [
      {
        path: "/home",
        title: "首页",
        modulePath: "default/web/home",
        auth: false,
      },
      {
        path: "/my",
        title: "我的",
        modulePath: "default/web/my",
        auth: true,
      },
    ],
  },
];

export default routerDatas;
