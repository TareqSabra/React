import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import React, {Component} from 'react';
import './shoppingCart.css'
class Shopingcart extends Component {
    constructor(props) {
        super(props);
        const {sc} = this.props.location
        this.handleChange = this.handleChange.bind(this);
        this.state.CartItems.push(sc)
        this.state.item.price = sc.item.itemPrice;
        this.state.item.Quantity= Number(sc.amount);
        this.state.item.totalPrice= Number(this.state.item.price)*Number(this.state.item.Quantity)
      }
    
    state = { 
        item:{
            Quantity:0,
            price:0,
            totalPrice:0,
        },
        CartItems :[],
        value:0,
        tax: 5
        }
        handleChange(event){ this.setState({value: this.state.item.Quantity});  }
    render() { 
        const handelIncrement =()=>{
            this.state.item.Quantity =this.state.item.Quantity +1;
            console.log(this.state.item.Quantity)
            this.state.item.totalPrice= Number(this.state.item.price)*Number(this.state.item.Quantity)
                }
        const handelDecrement =()=>{
            if(this.state.item.Quantity <= 0){
                this.state.value=0;
                this.state.item.totalPrice= Number(this.state.item.price)*Number(this.state.item.Quantity)
                console.log(this.state.item.Quantity)
            }
            else{
                this.state.item.Quantity =this.state.item.Quantity-1;
                this.state.item.totalPrice= Number(this.state.item.price)*Number(this.state.item.Quantity)
                console.log(this.state.item.Quantity)
            }
        }
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
                            <RemoveIcon className="icon"/>
                            <input type="textarea" name="textValue" defaultValue={it.amount} onChange={this.handleChange} className="inputS"/>
                            <AddIcon className="icon"></AddIcon>
                            <h5 className="font-weight-bolder mt-2 ml-3">
                                {'$'+this.state.item.totalPrice}
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