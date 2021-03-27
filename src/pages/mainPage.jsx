import React, { Component } from 'react';
import ShowC from "../Componants/showCase"
import Navbar from "../Componants/navbar"
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <Navbar ></Navbar>
                <ShowC></ShowC>
            </React.Fragment>
          );
    }
}
 
export default MainPage ;