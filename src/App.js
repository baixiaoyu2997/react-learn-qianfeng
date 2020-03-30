import React from "react";
import { TodoHeader, TodoInput, TodoList, Like } from "./components";

import { getTodos } from "./services";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "待办事项列表",
      desc: "今日事，今日毕",
      todos: [],
      isLoading: false
    };
  }
  addTodo = todoTitle => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), title: todoTitle, completed: false }
      ]
    });
  };
  onCompeletedChange = id => {
    this.setState({
      todos: this.state.todos.map(x => {
        if (x.id === id) x.completed = !x.completed;
        return x;
      })
    });
  };
  render() {
    return (
      <>
        <TodoHeader desc={this.state.desc}>{this.state.title}</TodoHeader>
        <TodoInput addTodo={this.addTodo}></TodoInput>
        {this.state.isLoading ? (
          <div>loading...</div>
        ) : (
          <TodoList
            todos={this.state.todos}
            onCompeletedChange={this.onCompeletedChange}
          ></TodoList>
        )}
        <Like></Like>
      </>
    );
  }
  getData = () => {
    this.setState({
      isLoading: true
    });
    getTodos()
      .then(respon => {
        console.log(respon.data);
        if (respon.status === 200) {
          this.setState({
            todos: respon.data
          });
        } else {
          // 处理错误
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  };
  componentDidMount() {
    this.getData();
  }
}

export default App;
