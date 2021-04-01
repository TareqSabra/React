import React, { Component } from 'react';
class Product extends Component {
    render() { 
        const { state } = this.props.location
        return (
            <div> 
                   <h1>Hey</h1>
                {
                    alert(state.imagesTitel)
                }
            </div>
          );
    }
}
 
export default Product;