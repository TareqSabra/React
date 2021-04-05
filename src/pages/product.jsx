import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Tabs from "../Componants/taps"
import './product.css';


class Product extends Component {
  state={
       value:0
  }
    render() { 
        const { st } = this.props.location
        const handelIncrement =()=>{
            this.setState({ value: this.state.value + 1 })
                }
        const handelDecrement =()=>{
            if(this.state.value <= 0){
                this.state.value=0;
            }
            else{
                this.setState({ value: this.state.value - 1 })
            }
        }
        return (
          <div className="container mt-5 ProductC">
              <div className="row">
                  <div className="col-2">
                      <div className="border border-primary rounded" style={{width:160,height:160}}>
                      <img
                      onClick={()=>{
                        document.getElementById("MainDisplay").src =st.image; 
                      }}
                      alt="productImg"
                      src={st.image}
                      style={{width:150,height:150}}
                      />
                      </div>
                  </div>
                  <div className="col-6">
                      <img
                      id="MainDisplay"
                      alt=""
                      src={"https://picsum.photos/350/350"}
                      style={{width:350,height:350}}
                      />
                      <div>
                          <Tabs item={st}></Tabs>
                           </div>
                  </div>
                  <div className="col-4">
                      <div className="text-center">
                          <div className="linkC">
                          <Link to="/" className="link">
                          Home
                          </Link> /   {st.imagesTitel}
                          </div>
                          <br/>
                      <div className="productTitle">
                      {st.imagesTitel}
                      </div>    
                      </div>
                      <div className="productPrice">
                          <div>{'$'+st.itemPrice}</div>
                      </div>
                      <br/>
                      <div className="productDiscribtion">
                          {st.itemDiscribtion}
                      </div>
                      <div className="amountC">
                      <RemoveIcon className="icon" onClick={handelDecrement}/>
                      <input type="textarea" name="textValue" value={this.state.value} className="inputS"/>
                      <AddIcon className="icon" onClick={handelIncrement}/>
                      </div>
                     <Link to={{ pathname :"/ShCart" ,sc:{item:st,amount:this.state.value}}} ><button className="btn btn-dark ButtonS">ADD TO CART</button></Link> 
                  </div>
              </div>
              <br></br>
          </div>
          );
    }
}
 
export default Product;