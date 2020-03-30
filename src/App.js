import React, { Component } from 'react';
import { Counter,CountBtn} from "./components"
class App extends Component {
  render() {
    return (
      <>
        <CountBtn type="decrement">-</CountBtn>  
        <Counter></Counter>
        <CountBtn type="increment">+</CountBtn>
      </>
    );
  }
}

export default App;