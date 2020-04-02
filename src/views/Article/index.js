import React, { Component } from "react";
import { Card, Button, Table } from "antd";
class Article extends Component {
  dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号"
    }
  ];

  columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address"
    }
  ];
  render() {
    return (
      <div>
        <Card title="文章列表" bordered={false} extra={<Button>导入</Button>}>
          <Table dataSource={this.dataSource} columns={this.columns}></Table>
        </Card>
      </div>
    );
  }
}

export default Article;
