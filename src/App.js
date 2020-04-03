import React, { Component } from "react";
import { adminRoutes } from "./routes";
import { Switch, Route, Redirect } from "react-router-dom";
import { Frame } from "./components";
import { connect } from "react-redux";
const mapState = state => ({
  isLogin: state.user.isLogin
});
@connect(mapState)
class App extends Component {
  render() {
    return (
      this.props.isLogin?
      <Frame>
        <Switch>
          {adminRoutes.map(route => {
            return (
              <Route
                key={route.pathname}
                path={route.pathname}
                exact={route.exact}
                render={routerProps => {
                  return <route.component {...routerProps} />;
                }}
              />
            );
          })}
          <Redirect to={adminRoutes[0].pathname} from="/admin" exact></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Frame>
      :
      <Redirect to="/login"/>
    );
  }
}

export default App;
