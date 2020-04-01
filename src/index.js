import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import { mainRouter } from "./routes";
render(
  <Router>
    <Switch>
      <Route
        path="/admin"
        render={routerProps => {
          return <App {...routerProps} />;
        }}
      />
      {mainRouter.map(route => {
        return <Route key={route.pathname} path={route.pathname} component={route.component} />;
      })}
      <Redirect to="/admin" exact from="/"></Redirect>
      <Redirect to="/404"></Redirect>
    </Switch>
  </Router>,
  document.querySelector("#root")
);
