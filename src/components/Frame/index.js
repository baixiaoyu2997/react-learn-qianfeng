import React, { Component } from "react";
import { Layout, Menu } from "antd";

import "./index.less";
import { adminRoutes } from "../../routes";
import { withRouter } from "react-router-dom";

const { Header, Content, Sider } = Layout;
@withRouter
class Frame extends Component {
  menus = adminRoutes.filter(route => route.isNav);
  onMenuClick = ({ key }) => {
    this.props.history.push(key);
  };
  render() {
    const selectedKeyArr=this.props.location.pathname.split('/')
    selectedKeyArr.length=3

    return (
      <Layout style={{ minHeight: "100%" }}>
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
              selectedKeys={[selectedKeyArr.join('/')]}
              onClick={this.onMenuClick}
              style={{ height: "100%", borderRight: 0 }}
            >
              {this.menus.map(item => {
                return (
                  <Menu.Item key={item.pathname}>
                    <item.icon />
                    {item.title}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: "16px" }}>
            <Content
              className="site-layout-background"
              style={{
                margin: 0,
                background: "#fff"
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
