import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import MyShop from "./pages/MyShop";
import EditItem from "./pages/EditItem";
import NewsLetter from './pages/NewsLetter';

//component
import NavbarBootstrap from "../src/components/web-elements/NavbarBootstrap";

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
        <Route path="/profile/:id">
          <NavbarBootstrap />
          <Profile />
        </Route>
        <Route path="/articles">
          <NavbarBootstrap />
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
        <Route path="/myshop">
          <NavbarBootstrap />
          <MyShop />
        </Route>
        <Route path="/edititem/:id">
          <NavbarBootstrap />
          <EditItem />
        </Route>
        <Route path="/newsletter">
          <NavbarBootstrap />
          <NewsLetter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
