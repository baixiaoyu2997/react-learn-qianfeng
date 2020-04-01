import React, { Component } from 'react';
import { BackButton } from "../../components";
class ArticalDetail extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                文章详情
                <BackButton onClick={this.goHome}>返回首页</BackButton>
            </div>
        );
    }
}

export default ArticalDetail;