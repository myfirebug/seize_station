import React, { Suspense, FC } from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
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
  return datas.map(({ path, children, modulePath, title, auth, redirect }) => {
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
        {redirect ? (
          <Route path={path} element={<Navigate to={redirect} />}></Route>
        ) : (
          <Route
            path={path}
            element={<Navigate to={children[0].path as string} />}
          ></Route>
        )}
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
    <HashRouter>
      <Suspense>
        <Routes>{routeTree(routes)}</Routes>
      </Suspense>
    </HashRouter>
  );
}

export default RoutesView;
