import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import React, {Component} from 'react';
import './shoppingCart.css'
class Shopingcart extends Component {
    constructor(props) {
        super(props);
        const {sc} = this.props.location;
        this.state = { 
            item:{
                Quantity: Number(sc.amount),
                price: sc.item.itemPrice,
                totalPrice: Number(sc.item.price)*Number(sc.item.Quantity) ,
            },
            CartItems :[sc],
            tax: 5
        };
    }
    
    handelIncrement =()=>{
        this.setState({
            ...this.state,
            item: {
                ...this.state.item,
                Quantity: (this.state.item.Quantity + 1),
                totalPrice: Number(this.state.item.price)*Number((this.state.item.Quantity + 1))
            }
        })
    }

    handelDecrement =()=>{
        if(this.state.item.Quantity <= 1){
            this.setState({
                ...this.state,
                item :{
                    ...this.state.item,
                    Quantity: 1,
                    totalPrice: Number(this.state.item.price)*Number((this.state.item.Quantity))
                }
                
            })
        }
        else{
            this.setState({
                ...this.state,
                item :{
                    ...this.state.item,
                    Quantity: (this.state.item.Quantity - 1),
                    totalPrice: Number(this.state.item.price)*Number((this.state.item.Quantity - 1))
                }
                
            })
        }

    }
    render() { 

        return ( 
        <div className="">
            <div className="container text-center">
                <div className="row text-center mt-5">
                    <div className="col-12">
                      <h1>Shopping Cart</h1>
                    </div>
                </div>
                <div className="row  mt-5 ">
                    <div className="col-8 border-top border-bottom d-flex flex-row">
                        <div className="font-weight-bolder">Product Name</div>
                        <div className="d-flex flex-row itemHeader">
                        <div className="mr-5 font-weight-bolder">price</div> 
                        <div className="mr-5 font-weight-bolder">Quantity</div> 
                        <div className="mr-5 font-weight-bolder">total</div> 
                        </div>
                    </div>
                    <div className="col-8 itemBar">
                     {
                       this.state.CartItems.map((it,index)=>{
                      return(
                        <React.Fragment>
                        <div className="d-flex flex-row position-relative border-bottom">
                            <img
                            alt="productImg"
                            src= {it.item.image}
                            width="50"
                            height="50"
                            />
                            <div className="d-flex flex-column mr-5">
                            <h5>{it.item.imagesTitel}</h5> 
                            <h5>{'$'+it.item.itemPrice}</h5> 
                            </div>
                            <div className="amountCont">
                            <h5 className="font-weight-bolder mt-2 ml-3">
                                {'$'+it.item.itemPrice}
                            </h5>
                            <RemoveIcon onClick ={this.handelDecrement} className="icon"></RemoveIcon>
                            <input type="text" name="textValue" value={this.state.item.Quantity}  className="inputS"/>
                            <AddIcon  onClick ={this.handelIncrement} className="icon"></AddIcon>
                            <h5 className="font-weight-bolder mt-2 ml-3">
                                {'$'+this.state.item.totalPrice
                                }
                                {console.log(this.state.item.totalPrice)}
                            </h5>
                            </div>
                            </div>
                        
                     <br/>
                       </React.Fragment>
                       )})}
                  </div>
                    <div className="col-4 SummaryC ">
                        <br/>
                        <span className ="text text-left">Summary</span>
                      
                        <div className="border-bottom"/>
                        <br/>
                        <span  className ="text">Subtotal</span>
                        <br/>
                        <span> {'$'+this.state.item.totalPrice} </span>
                        <div className="border-bottom"/>
                        <br/>
                        <span className ="text">shipping(Flat Rate-Fixed)</span>
                        <br/>
                        <span>{'$'+this.state.tax}</span>
                        <br/>
                        <div className="border-bottom"/>
                        <br/>
                        <span className ="text">Order Toltal</span>
                        <br/>
                        <span>{'$'+(Number(this.state.item.totalPrice)+Number(this.state.tax))}</span>
                        <br/>
                        <button className="btn btn-danger">GO TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Shopingcart;