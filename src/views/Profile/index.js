import React, { Component } from "react";
import { Card, Upload, Spin } from "antd";
import axios from "axios";
class Profile extends Component {
  state = {
    isUploading: false,
    avatarUrl: "",
  };
  handleUploadAvatar = ({file}) => {
    const data = new FormData();
    data.append(
      "Token",
      "daa1633530031f6cd2fbfb18cd1d94cdcc990bab:uTGIBxVG1jOYzCviy3ylmwvgcjo=:eyJkZWFkbGluZSI6MTU4NTk2NzMzNCwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNzE1MTMwIiwiYWlkIjoiMTY3NzQ5NCIsImZyb20iOiJmaWxlIn0="
    );
    data.append("file", file);
    this.setState({
      isUploading: true,
    });
    axios.post("http://up.imgapi.com/", data).then((res) => {
      console.log(res.data.linkurl);
    });
  };
  render() {
    return (
      <Card title="个人设置" bordered={false}>
        <Upload
          style={{
            border: '1px dashed #dedede',
            width: 80,
            height: 80,
            display: 'block',
          }}
          showUploadList={false}
          customRequest={this.handleUploadAvatar}
        >
          <Spin spinning={this.state.isUploading}>
            {this.state.avatarUrl ? (
              <img src={this.state.avatarUrl} alt="头像" />
            ) : (
              <span>点击上传</span>
            )}
          </Spin>
        </Upload>
      </Card>
    );
  }
}

export default Profile;
