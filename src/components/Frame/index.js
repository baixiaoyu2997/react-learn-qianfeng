import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import "./index.less";
import { adminRoutes } from "../../routes";

const { Header, Content, Sider } = Layout;
class Frame extends Component {
  menus = adminRoutes.filter(route => route.isNav);
  render() {
    return (
      <Layout>
        <Header
          className="header fantuan-header"
          style={{ background: "white" }}
        >
          <div className="logo">
            <img
              src="https://blog-pic.oss-cn-beijing.aliyuncs.com/avatar.webp"
              alt=""
            ></img>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {this.menus.map(item => {
                return <Menu.Item key={item.pathname}>{item.title}</Menu.Item>;
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Frame;
