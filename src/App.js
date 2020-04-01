import React, { Component } from "react";
import { Artical, Home, Users,NotFound } from "./views";
import { Route, Link, Redirect, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/artical">文章</Link>
          </li>
          <li>
            <Link to="/users">用户</Link>
          </li>
        </ul>
        <Switch>
          <Route render={(routeProps)=>{
            return <Home x="1" {...routeProps}></Home>
          }} path="/home" />
          <Route component={Artical} path="/artical" />
          <Route component={Users} path="/users" />
          <Route component={NotFound} path="/404" />
          <Redirect to="/home" from="/" exact></Redirect>
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default App;
