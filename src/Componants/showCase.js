import React, { Component } from 'react';
import '../Componants/showCase.css'
import '../Componants/form.css'
//import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {LaptopTablet} from "../Resorces/LaptopTablet";
import {AudioSound} from "../Resorces/AudioSound"
import Carousel from "./carousel"
import Ad from "./adComponent";
import ItemGrid from "./itemGrid"
import Footer from "./footer";
class ShowC extends Component {
    state = {  
       adText :"Save your moneys with super promortion,available every sunday in the weekend !",
    }
    render() { 
        return (
            <div id="containor">
                <div className="d-flex justify-content-center showCase-Carousel">
                    <div className="Carousel">
                        <div className="Titel">
                        LAPTOPS & TAPLETS
                        </div>
                        <div className="titelSpacer"/>
                        <div className="divder"/>
                        <Carousel itemList={LaptopTablet}></Carousel>
                    </div>
                </div>
                <div className="d-flex justify-content-center" >
                <div className="Carousel">
                        <div className="Titel">
                        Audio & Sound
                        </div>
                        <div className="titelSpacer"/>
                        <div className="divder"/>
                        <Carousel itemList={AudioSound}></Carousel>
                    </div>
                </div>
                <Ad adText= {this.state.adText} adlink="#"></Ad>
                <div className="d-flex justify-content-center" >
                <div className="Carousel">
                        <div className="Titel">
                        Camera & Lens
                        </div>
                        <div className="titelSpacer"/>
                        <div className="divder"/>
                        <ItemGrid></ItemGrid>
                    </div>
                </div>
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
            </div>
        );
    }
}
export default ShowC;