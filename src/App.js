import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Profile from './pages/Profile';
import Articles from "./pages/Articles";
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';


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
        <Route path="/searchresult">
          <Search />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/productdetails">
          <ProductDetails />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
