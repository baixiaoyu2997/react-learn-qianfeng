import React, { Component } from "react";
import { Card, Button, Table, Tag, Modal, Typography, Tooltip } from "antd";
import { getArticles, deleteArticle } from "../../requests";
import moment from "moment";
const ButtonGroup = Button.Group;
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
      total: 0,
      isLoading: false
    };
  }
  componentDidMount() {
    this.getData();
  }
  // 删除文章
  deleteArticle = record => {
    console.log(record);
    Modal.confirm({
      title: <Typography>`确定要删除${record.title}吗?`</Typography>,
      content: `此操作不可逆`,
      onOk: () => {
        deleteArticle(record.id).then(data => {
          this.getData();
        });
      }
    });
  };
  // 去编辑页
  toEdit = id => {
    this.props.history.push(`/admin/article/edit/${id}`);
  };
  createColumns = data => {
    const columns = Object.keys(data.list[0]).map(x => {
      if (x === "amount") {
        return {
          title: titleDisplayMap[x],
          render: (text, reccord) => {
            return (
              <Tooltip title={reccord.amount}>
                <Tag color="green">{reccord.amount}</Tag>
              </Tooltip>
            );
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
    columns.push({
      title: "操作",
      key: "action",
      render: (text, record) => {
        return (
          <ButtonGroup>
            <Button
              size="samll"
              type="primary"
              onClick={() => {
                this.toEdit(record.id);
              }}
            >
              编辑
            </Button>
            <Button
              size="samll"
              type="danger"
              onClick={() => this.deleteArticle(record)}
            >
              删除
            </Button>
          </ButtonGroup>
        );
      }
    });
    return columns;
  };
  // 获取文章列表
  getData = () => {
    this.setState({
      isLoading: true
    });
    getArticles()
      .then(data => {
        const columns = this.createColumns(data);
        this.setState({
          total: data.total,
          dataSource: data.list,
          columns
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false
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
            loading={this.state.isLoading}
          ></Table>
        </Card>
      </div>
    );
  }
}

export default Article;
