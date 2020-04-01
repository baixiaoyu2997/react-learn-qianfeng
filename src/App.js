import React, { Component } from "react";
import { Button,Spin,Pagination } from "antd";
class App extends Component {
  render() {
    return (
      <div>
        <Button>你好</Button>
        <Spin>
          <div>dfjsdkfjlskdfklfklsjklsdfjsdk</div>
        </Spin>
        <Pagination showQuickJumper showSizeChanger defaultCurrent={2} total={500}></Pagination>
      </div>
    );
  }
}

export default App;
