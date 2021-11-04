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


const App = () => {

  const user = true;
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
      <Route exact path="/">
        <Home/>
      </Route> 
      <Route exact path="/about">
       <About/>
      </Route> 

      {/* If statement to determine if user is logged in */}

    
      <Route path="/login">
        <Login/>
      </Route>  

      
      <Route path="/register">
        <Register/>
      </Route>    
       
      </Switch>
    </Router>
  )
 
    
  
};

export default App;
