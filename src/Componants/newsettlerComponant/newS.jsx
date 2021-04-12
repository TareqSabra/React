import React, { Component } from 'react';
import '../newsettlerComponant/form.css'
class NewS extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="d-flex justify-content-center">
                    <div className="formCont text-center">
                       <form>
                           <div className="formMainText">Newsletter</div>
                           <div className="fromsubText"> 
                           Subscribe to receive coupons and gift cards
                           </div>
                           <br/>
                          <label>
                            <input type="text" placeholder="Email adress" name="Email adress" className="formInput"/>
                            </label>
                            <input type="submit" value="SUBSCRIBE" className="btn  btn-danger formButton"/>
                        </form>
                    </div>
                </div>

         );
    }
}
 
export default NewS;