import React, { Component } from 'react';
import ShowC from "../../Componants/ShowCase/showCase"
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <ShowC></ShowC>
            </React.Fragment>
          );
    }
}
 
export default MainPage ;