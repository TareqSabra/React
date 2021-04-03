import React, {Component} from 'react';

class Shopingcart extends Component {
    
    state = { 
        itemCountr : 0,
        CartItems :[]
     }
     componentDidMount() {
        const CartItems = localStorage.getItem('cart');
        this.setState({CartItems});
         }

     componentWillUnmount(){
        localStorage.setItem('cart',this.state.CartItems);
     }
     
    render() { 
        
    const {sc} = this.props.location
    this.state.CartItems.push(sc)  
        return ( 
        <div>
            {console.log(this.state.CartItems)}
            <h1>Hey</h1>
            {
                this.state.CartItems.map((it,index)=>{
                    console.log(it);
                    console.log(it.amount)
                    console.log(it.item.imagesTitel)
                    return(
                        <React.Fragment>
                        <h1>{it.amount}</h1>
                        <h1>{it.item.imagesTitel}</h1>
                        </React.Fragment>
                    )                 
                })
            }
        </div>
         );
    }
}
 
export default Shopingcart;