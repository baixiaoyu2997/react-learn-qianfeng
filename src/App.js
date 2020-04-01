import React, { Component } from "react";
import { Button,Spin,Pagination,Badge } from "antd";
class App extends Component {
  render() {
    return (
      <div>
        <Button>你好</Button>
        <Spin>
          <div>dfjsdkfjlskdfklfklsjklsdfjsdk</div>
        </Spin>
        <Pagination showQuickJumper showSizeChanger defaultCurrent={2} total={500}></Pagination>
        <Badge count={5}>
          <span>这是徽章</span>>
        </Badge>
      </div>
    );
  }
}

export default App;
