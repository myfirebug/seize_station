import React, { Suspense, FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes, { IRoute } from "./routes";
import { lazyLoad } from "@src/components";

interface IPrivateRoute {
  children: JSX.Element;
  auth: boolean;
  title: string;
}

const PrivateRoute: FC<IPrivateRoute> = ({ children, auth, title }) => {
  if (title) {
    document.title = title;
  }
  return children;
};

/**
 * 递归路由
 * @param datas 路由数据
 * @returns
 */
const routeTree = (datas: IRoute[]) => {
  return datas.map(({ path, children, modulePath, title, auth }) => {
    return children && children.length ? (
      <Route
        path={path}
        element={
          <PrivateRoute title={title} auth={auth}>
            {lazyLoad(modulePath)}
          </PrivateRoute>
        }
        key={modulePath}
      >
        {routeTree(children)}
      </Route>
    ) : (
      <Route
        path={path}
        element={
          <PrivateRoute title={title} auth={auth}>
            {lazyLoad(modulePath)}
          </PrivateRoute>
        }
        key={modulePath}
      ></Route>
    );
  });
};

function RoutesView() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>{routeTree(routes)}</Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RoutesView;
