import React, { Component } from "react";
import { Card, Button } from "antd";
class Edit extends Component {
  render() {
    return (
      <Card title="编辑文章" bordered={false} extra={<Button>取消</Button>}>
        表单区域
      </Card>
    );
  }
}

export default Edit;
