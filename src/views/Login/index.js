import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { login } from "../../actions/user";
import { Redirect } from "react-router-dom";
import "./index.less";

const mapState=state=>({
  isLogin:state.user.isLogin,
  isLoading:state.user.isLoading
})
@connect(mapState,{login})
class Login extends Component {
  onFinish = values => {
    this.props.login(values)
  };
  render() {
    const {isLoading,isLogin}=this.props
    return (
      isLogin
      ?
      <Redirect to="/admin"/>
      :
      <Card title="ADMIN登录" className="qf-login-wrapper">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "用户名必填" }]}
          >
            <Input
              disabled={isLoading}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "密码必填!" }]}
          >
            <Input
            disabled={isLoading}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox disabled={isLoading}>记住我</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
export default Login;
