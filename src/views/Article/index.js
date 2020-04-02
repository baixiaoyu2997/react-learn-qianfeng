import React, { Component } from "react";
import { Card, Button, Table, Tag } from "antd";
import { getArticles } from "../../requests";
import moment from "moment";
const titleDisplayMap = {
  id: "id",
  title: "标题",
  author: "作者",
  createAt: "创建时间",
  amount: "阅读量"
};

class Article extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      columns: [],
      total: 0
    };
  }
  componentDidMount() {
    this.getData();
  }
  createColumns = data => {
    return Object.keys(data.list[0]).map(x => {
      if (x === "amount") {
        return {
          title: titleDisplayMap[x],
          render: (text, reccord) => {
            return <Tag color="green">{reccord.amount}</Tag>;
          },
          key: x
        };
      }
      if (x === "createAt") {
        return {
          title: titleDisplayMap[x],
          key: x,
          render: (text, reccord) => {
            const { createAt } = reccord;
            return moment(createAt).format("YYYY年MM月DD日 hh时mm分ss秒");
          }
        };
      }
      return {
        title: titleDisplayMap[x],
        dataIndex: x,
        key: x
      };
    });
  };
  getData = () => {
    getArticles().then(data => {
      const columns = this.createColumns(data);
      this.setState({
        total: data.total,
        dataSource: data.list,
        columns
      });
    });
  };
  render() {
    return (
      <div>
        <Card title="文章列表" bordered={false} extra={<Button>导入</Button>}>
          <Table
            rowKey={record => record.id}
            dataSource={this.state.dataSource}
            columns={this.state.columns}
            pagination={{ total: this.state.total, hideOnSinglePage: true }}
          ></Table>
        </Card>
      </div>
    );
  }
}

export default Article;
