import React, { Component } from 'react';
import '../ShowCase/showCase.css'
import {LaptopTablet} from "../../Resorces/LaptopTablet";
import {AudioSound} from "../../Resorces/AudioSound";
import Carousel from "../CarouselComponant/carousel"
import Ad from "../adComponant/adComponent";
import ItemGrid from "../GridComponant/itemGrid"
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
            </div>
        );
    }
}
export default ShowC;