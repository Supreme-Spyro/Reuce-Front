import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from './pages/Profile'
import Articles from "./pages/Articles";
import Login from './pages/Login'
import Register from './pages/Register'


import "./styles/App.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
