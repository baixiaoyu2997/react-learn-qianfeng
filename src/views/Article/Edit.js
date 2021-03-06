import React, { Component, createRef } from "react";
import { Card, Button, Form, DatePicker, Input, InputNumber, Spin ,message} from "antd";
import { getArticleById, saveArticle } from "../../requests";
import E from "wangeditor";
import moment from "moment";
import "./edit.less";
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
      formState: { title: "这里是初始值" },
      isSave:false
    };
    this.editorRef = createRef();
    this.formRef = createRef();
  }
  onFinish = values => {
    this.setState({
      isSave:true
    })
    const data = Object.assign({}, values, {
      createAt: values.createAt.valueOf()
    });
    saveArticle(this.props.match.params.id, data).then(data => {
      message.success(data.msg)
      this.props.history.push('/admin/article')
    }).finally(()=>{
      this.setState({
        isSave:false
      })
    });
  };

  onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  initEditor = () => {
    this.editor = new E(this.editorRef.current);
    this.editor.customConfig.onchange = html => {
      this.formRef.current.setFieldsValue({
        content: html
      });
    };
    this.editor.create();
  };
  componentDidMount() {
    this.initEditor();
    getArticleById(this.props.match.params.id).then(data => {
      const { title, author, amount, createAt, content } = data;
      console.log(data);
      this.formRef.current.setFieldsValue({
        title,
        author,
        amount,
        createAt: moment(createAt),
        content
      });
      this.editor.txt.html(content);
    });
  }
  render() {
    return (
      <Card title="编辑文章" bordered={false} extra={<Button onClick={this.props.history.goBack}>取消</Button>}>
        <Spin spinning={this.state.isSave}>
          <Form
            {...layout}
            ref={this.formRef}
            name="basic"
            initialValues={this.state.formState}
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
              name="author"
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
              label="发布时间"
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
              <div className="qf-editor" ref={this.editorRef}></div>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                保存修改
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Card>
    );
  }
}

export default Edit;
