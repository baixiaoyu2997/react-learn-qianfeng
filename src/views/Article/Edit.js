import React, { Component } from "react";
import { Card, Button, Form, DatePicker, Input, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};
class Edit extends Component {
  constructor() {
    super();
    this.state = {
      titleValidateStatus: "",
      titleHelp: ""
    };
  }
  onFinish = values => {
    console.log("Success:", values);
  };

  onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <Card title="编辑文章" bordered={false} extra={<Button>取消</Button>}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "标题是必须的" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="作者"
            name="auther"
            rules={[
              {
                required: true,
                message: "作者是必填的"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="阅读量"
            name="amount"
            rules={[
              {
                required: true,
                message: "阅读量是必填的"
              }
            ]}
          >
            <InputNumber></InputNumber>
          </Form.Item>
          <Form.Item
            label="创建时间"
            name="createAt"
            rules={[
              {
                required: true,
                message: "创建时间是必填的"
              }
            ]}
          >
            <DatePicker showTime placeholder="选择时间"></DatePicker>
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[
              {
                required: true,
                message: "内容是必填的"
              }
            ]}
          >
            <div>这里是内容</div>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              保存修改
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default Edit;
