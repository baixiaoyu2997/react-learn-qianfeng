import React, { Component } from "react";
import { CounterBtn, CounterDisplay } from "./components";
import { inject, observer } from "mobx-react";
@inject("counter")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterBtn onClick={this.props.counter.decrement}>-</CounterBtn>
        <CounterDisplay />
        <CounterBtn onClick={this.props.counter.increment}>+</CounterBtn>
      </div>
    );
  }
}

export default App;
