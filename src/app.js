import React, { Component } from 'react';
import { Route ,Switch} from 'react-router-dom';
import Nav from "./Componants/navbarComponant/navbar";
import Home from "./pages/mainPage/mainPage";
import Product from "../src/pages/Product/product"
import Footer from './Componants/Footer/footer';
import Shopingcart from './pages/shoppingCart/shoppingCart';
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