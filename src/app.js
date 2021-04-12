import React, { Component } from 'react';
import { Route ,Switch} from 'react-router-dom';
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
            <Nav/>
            <Switch>
            <Route path = "/Products" component = { Product }/>
            <Route path = "/Shoping-cart"  component = { Shopingcart }/>
            <Route path = "/"  component = { Home } /> 
            </Switch>
            <Footer/>
            </React.Fragment>
        );
    }
}

export default App;