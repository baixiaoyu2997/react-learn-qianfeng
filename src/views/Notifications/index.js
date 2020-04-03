import React, { Component } from "react";
import { Card, Button, List, Avatar, Badge ,Spin} from "antd";
import { connect } from "react-redux";
import { markNotificationAsReadById,markAllNotificatioNsAsRead} from '../../actions/notifications'
const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
];
const mapState=state=>{
  const {list,isLoading}=state.notifications
  return {
    list,
    isLoading
   }
}
@connect(mapState,{markNotificationAsReadById,markAllNotificatioNsAsRead})
class Notifications extends Component {
  render() {
    console.log(this.props.isLoading)
    return (
      <Spin spinning={this.props.isLoading}>
        <Card
        title="通知中心"
        bordered={false}
        
        extra={<Button disabled={this.props.list.every(item=>item.hasRead)} onClick={this.props.markAllNotificatioNsAsRead}>全部标记为已读</Button>}
      >
        <List
          itemLayout="horizontal"
          dataSource={this.props.list}
          renderItem={item => (
            <List.Item extra={item.hasRead?null:<Button onClick={()=>{this.props.markNotificationAsReadById(item.id)}}>标记为已读</Button>}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
            title={<Badge dot={!item.hasRead}>{item.title}</Badge>}
                description={item.desc}
              />
            </List.Item>
          )}
        />
        ,
      </Card>
    
      </Spin>
      );
  }
}

export default Notifications;
