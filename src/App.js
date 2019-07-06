import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Product from './components/Product'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import PageNotFound from './components/PageNotFound'
import Modal from './components/Modal' 

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          Home Page
        </Route>
        <Route exact path='/product-list' component={ProductList}/>
        <Route exact path='/cart' component={Cart}/>
        <Route path='/details' component={Details}/>
        <Route path='/product' component={Product}/>
        <Route path='/' component={PageNotFound}/>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
