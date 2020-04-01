import React from "react";

import { render } from "react-dom";
import { ConfigProvider } from "antd";
import zhCN from 'antd/es/locale/zh_CN';
import App from "./App";

render(
  <ConfigProvider locale={zhCN} prefixCls="fantuan">
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
