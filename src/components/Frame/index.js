import React, { Component } from "react";
import { Layout, Menu, Dropdown, Avatar, Badge } from "antd";

import "./index.less";
import { adminRoutes } from "../../routes";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNotificationsList } from "../../actions/notifications";
import { logout } from "../../actions/user";
const { Header, Content, Sider } = Layout;
const mapState = state => {
  return {
    notificationsCount: state.notifications.list.filter(item => !item.hasRead)
      .length,
    avatar: state.user.avatar,
    displayName: state.user.displayName
  };
};
@connect(mapState, { getNotificationsList, logout })
@withRouter
class Frame extends Component {
  menus = adminRoutes.filter(route => route.isNav);
  onMenuClick = ({ key }) => {
    this.props.history.push(key);
  };
  onDropdownMenuClick = ({ key }) => {
    if (key === "/logout") {
      this.props.logout();
    } else {
      this.props.history.push(key);
    }
  };
  dropdownMenu = () => {
    return (
      <Menu onClick={this.onDropdownMenuClick}>
        <Menu.Item key="/admin/notifications">
          <Badge dot={this.props.notificationsCount !== 0}>通知中心</Badge>
        </Menu.Item>
        <Menu.Item key="/admin/settings">个人设置</Menu.Item>
        <Menu.Item key="/logout">退出登录</Menu.Item>
      </Menu>
    );
  };
  componentDidMount() {
    this.props.getNotificationsList();
  }
  render() {
    const selectedKeyArr = this.props.location.pathname.split("/");
    selectedKeyArr.length = 3;

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
          <Dropdown overlay={this.dropdownMenu}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Badge count={this.props.notificationsCount}>
                <Avatar src={this.props.avatar} />
                <span>欢迎您！{this.props.displayName}</span>
              </Badge>
            </div>
          </Dropdown>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              selectedKeys={[selectedKeyArr.join("/")]}
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
