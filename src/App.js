import React from 'react';
import {
  CounterBtn,
  CounterDisplay
} from './components'
import counterStore from './store' 
function App() {
  return (
    <div className="App">
      <CounterBtn onClick={counterStore.decrement}>-</CounterBtn>
      <CounterDisplay counterStore={counterStore}/>
      <CounterBtn onClick={counterStore.increment}>+</CounterBtn>
    </div>
  );
}

export default App;
