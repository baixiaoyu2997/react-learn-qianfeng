import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
// import App from "./App";

const Counteer = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('更新了')
  })
  return (
    <div>
      <button onClick={()=>{setCount(count-1)}}>-</button>
      <span>{count}</span>
      <button onClick={()=>{setCount(count+1)}}>+</button>
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    {/* <App desc="类组件世纪城React.Component的"/> */}
    <Counteer></Counteer>
  </React.StrictMode>,
  document.getElementById("root")
);
