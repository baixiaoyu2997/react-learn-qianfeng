import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { mainRoutes } from "./routes";
import "./index.less";
import App from "./App";

render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <Switch>
        <Route
          path="/admin"
          render={routerProps => {
            return <App {...routerProps} />;
          }}
        />
        {mainRoutes.map(route => {
          return (
            <Route
              key={route.pathname}
              path={route.pathname}
              component={route.component}
            />
          );
        })}
        <Redirect to="/admin" exact from="/"></Redirect>
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  </ConfigProvider>,
  document.querySelector("#root")
);
