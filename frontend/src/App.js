import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/layout/Navigation";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div class="container">
          <div class="row">
            <div class="col col-xs-1 col-sm-1 col-md-1 col-lg-3 col-xl-3"></div>
            <div
              class="col col-xs-10 col-sm-10 col-md-10 col-lg-6 col-xl-6"
              className="justify-content-center"
            >
              <Navigation className="navbar-center" />
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route exact path="/profile">
                  <Profile></Profile>
                </Route>
                <Route exact path="/register">
                  <Register></Register>
                </Route>
              </Switch>
            </div>
            <div class="col col-xs-1 col-sm-1 col-md-1 col-lg-3 col-xl-3"></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
