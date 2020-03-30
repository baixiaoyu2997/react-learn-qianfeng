import React from "react";
import ReactDOM from "react-dom";
import { CounterProvider } from "./CounterStore";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <App desc="类组件世纪城React.Component的" />
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
