import React, { Component } from "react";
import { Button } from "antd";

const testHOC = WrappedComponent => {
  return class HOCComponent extends Component {
    render() {
      return (
        <>
          <WrappedComponent />
          <div>这里是高阶组件</div>
        </>
      );
    }
  };
};
@testHOC
class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">测试按钮</Button>
      </div>
    );
  }
}

export default App;
