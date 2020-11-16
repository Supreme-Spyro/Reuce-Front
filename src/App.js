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
import NewsLetter from "./pages/NewsLetter";
import Admin from "./pages/Admin/Admin";
import UserAdmin from "./pages/Admin/UserAdmin";
import ProductAdmin from "./pages/Admin/ProductAdmin";
import ArticlesAdmin from "./pages/Admin/ArticlesAdmin";
import AddArticlesAdmin from "./pages/Admin/AddArticlesAdmin";
import EditArticlesAdmin from "./pages/Admin/EditArticlesAdmin";
import AddProduct from "./pages/AddProduct";
import CategoryDetail from "./pages/CategoryDetail";

//component
import NavbarBootstrap from "../src/components/web-elements/NavbarBootstrap";
import NavAdmin from "../src/components/web-elements/NavAdmin";

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
        <Route path="/articles/home">
          <NavbarBootstrap />
          <Articles />
        </Route>
        <Route path="/search/:id">
          <NavbarBootstrap />
          <Search />
        </Route>
        <Route path="/category">
          <NavbarBootstrap />
          <Category />
        </Route>
        <Route path="/categoryDetail/:id">
          <NavbarBootstrap />
          <CategoryDetail />
        </Route>
        <Route path="/product/:id">
          <NavbarBootstrap />
          <ProductDetails />
        </Route>
        <Route path="/shopcart/:id">
          <NavbarBootstrap />
          <ShoppingCart />
        </Route>
        <Route path="/checkout/:id">
        <NavbarBootstrap />
          <Checkout />
        </Route>
        <Route exact path="/myshop/:id">
          <NavbarBootstrap />
          <MyShop />
        </Route>
        <Route path="/addproduct">
          <NavbarBootstrap />
          <AddProduct />
        </Route>
        <Route path="/myshop/:id/edititem">
          <NavbarBootstrap />
          <EditItem />
        </Route>
        <Route path="/articles/:id">
          <NavbarBootstrap />
          <NewsLetter />
        </Route>
        <Route exact path="/admin">
          <NavAdmin />
          <Admin />
        </Route>
        <Route path="/admin/users">
          <NavAdmin />
          <UserAdmin />
        </Route>
        <Route path="/admin/products">
          <NavAdmin />
          <ProductAdmin />
        </Route>
        <Route exact path="/admin/articles">
          <NavAdmin />
          <ArticlesAdmin />
        </Route>
        <Route path="/admin/articles/add">
          <NavAdmin />
          <AddArticlesAdmin />
        </Route>
        <Route path="/admin/articles/edit/:id">
          <NavAdmin />
          <EditArticlesAdmin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
