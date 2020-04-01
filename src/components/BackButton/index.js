import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
class BackButton extends Component {
    goHome=()=>{
        this.props.history.push('/')
    }
    render() {
        console.log(this.props)
        return (
            <button onClick={this.goHome}>
                返回首页
            </button>
        );
    }
}

export default withRouter(BackButton);