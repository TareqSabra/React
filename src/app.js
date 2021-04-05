import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from "../src/Componants/navbar";
import Home from "../src/pages/mainPage";
import Product from "../src/pages/product"
import Footer from './Componants/footer';
import Shopingcart from './pages/shoppingCart';
class App extends Component {
    state = {}
    render() {
        return ( 
        < React.Fragment >
            <Nav />
            <div >
            <Route path = "/" exact component = { Home } /> 
            <Route path = "/Products" exact component = { Product }/>
            <Route path = "/ShCart" exact component = { Shopingcart }/> 
            </div> <Footer/>
            </React.Fragment>
        );
    }
}

export default App;