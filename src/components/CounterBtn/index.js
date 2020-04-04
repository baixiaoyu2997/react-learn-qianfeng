import React, { Component } from "react";

class CounterBtn extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.children}</button>
      </div>
    );
  }
}

export default CounterBtn;
