import React, { Component } from 'react';

class ArticalDetail extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                文章详情
            </div>
        );
    }
}

export default ArticalDetail;