import React, { Component } from "react";

class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLike: false
    };
  }
  handleLikedClick = () => {
    this.setState(preState => ({ isLike: !preState.isLike }));
  };
  render() {
    return (
      <div>
        <span onClick={this.handleLikedClick}>
          {this.state.isLike ? "❤️" : "🤍"}
        </span>
      </div>
    );
  }
}

export default Like;
