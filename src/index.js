import React from "react";

import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

render(
  <Router>
    <Route component={App} path="/">
    </Route>
  </Router>,
  document.getElementById("root")
);
