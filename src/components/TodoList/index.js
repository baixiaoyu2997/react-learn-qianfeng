import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        onCompeletedChange:PropTypes.func
      })
    ).isRequired
  };
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return <TodoItem key={todo.id} onCompeletedChange={this.props.onCompeletedChange} {...todo} />;
        })}
      </ul>
    );
  }
}

export default TodoList;
