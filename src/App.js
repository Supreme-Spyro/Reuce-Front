import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from './pages/Profile'
import Articles from "./pages/Articles";


import "./styles/App.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
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
