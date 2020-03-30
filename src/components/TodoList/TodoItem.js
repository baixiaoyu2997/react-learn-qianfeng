import React, { Component } from "react";

class TodoItem extends Component {
  handleCheckboxChange = () => {
    this.props.onCompeletedChange &&
      this.props.onCompeletedChange(this.props.id);
  };
  render() {
    const { isCompleted, title } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={this.handleCheckboxChange}
        />
        <span>
          {title}
          {isCompleted ? "已完成" : "未完成"}
        </span>
      </li>
    );
  }
}

export default TodoItem;
