import React from "react";
import "./App.css";
import { TodoHeader, TodoInput, TodoList,Like} from "./components";
class App extends React.Component {
  constructor(){
    super()
    this.state={
      title:'待办事项列表',
      desc:"今日事，今日毕",
      todos:[{
        id:1,
        title:'吃饭',
        isCompleted:true
      },{
        id:2,
        title:'睡觉',
        isCompleted:false
      }]
    }
  }
  addTodo=(todoTitle)=>{
    this.setState({
      todos:[
        ...this.state.todos,
        {id:Math.random(),title:todoTitle,isCompleted:false},
      ]
    })
  }
  onCompeletedChange=(id)=>{
    this.setState({
      todos:this.state.todos.map(x=>{
        if(x.id===id)x.isCompleted=!x.isCompleted
        return x
      })
    })
  }
  render() {
    return (
     <>
      <TodoHeader desc={this.state.desc}>
        {this.state.title}
      </TodoHeader>
      <TodoInput addTodo={this.addTodo}></TodoInput>
      <TodoList todos={this.state.todos} onCompeletedChange={this.onCompeletedChange}></TodoList>
      <Like></Like>
     </>
    );
  }
}

export default App;
