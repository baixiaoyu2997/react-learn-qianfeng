import React, { Component } from "react";

class TodoItem extends Component {
  shouldComponentUpdate(nextProps,nextState){
    return nextProps.completed!==this.props.completed
  }
  handleCheckboxChange = () => {
    this.props.onCompeletedChange &&
      this.props.onCompeletedChange(this.props.id);
  };
  render() {
    const { completed, title } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleCheckboxChange}
        />
        <span>
          {title}
          {completed ? "已完成" : "未完成"}
        </span>
      </li>
    );
  }
}

export default TodoItem;
