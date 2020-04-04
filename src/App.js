import React from 'react';
import {
  CounterBtn,
  CounterDisplay
} from './components'
function App() {
  return (
    <div className="App">
      <CounterBtn>-</CounterBtn>
      <CounterDisplay count={10}/>
      <CounterBtn>+</CounterBtn>
    </div>
  );
}

export default App;
