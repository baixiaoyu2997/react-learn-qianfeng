import React, { Component } from "react";
import { Card, Button, Form, Icon, Input } from "antd";
const layout = {
  labelCol: {
    span: 8
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
  constructor(){
    super()
    this.state={
      titleValidateStatus:'',
      titleHelp:''
    }
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
            label="Username"
            name="username"
            validateStatus={this.state.titleValidateStatus}
            help={this.state.titleHelp}
            rules={[
              {
                validator:(rule,value,callback)=>{
                 if(value!=='123'){
                   this.setState({
                     titleValidateStatus:'error',
                     titleHelp:'title不正确'
                   })
                 }else{
                   this.setState({
                    titleValidateStatus:'',
                    titleHelp:''
                   })
                 }
                 callback()
                },
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default Edit;
