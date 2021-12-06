import React from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useLocation,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from 'react-redux';



const App = () => {
  const user = false;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route> 
        <Route path="/productList">
          <ProductList/>
        </Route>  
        <Route path="/products/:category">
          <ProductList/>
        </Route>   
        <Route path="/product">
          <Product/>
        </Route>   
        <Route path="/cart">
          <Cart/>
        </Route> 
        <Route path="/success">
          <Success />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route> 
        <Route exact path="/about">
        <About/>
        </Route> 

        {/* If statement to determine if user is logged in */}

    
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
       
        </Switch>
      </Router>
  )
};

export default App;
