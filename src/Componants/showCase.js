import React, { Component } from 'react';
import '../Componants/showCase.css'
//import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {carouselI} from "../Resorces/carouselItems";
import Carousel from "./carousel"
class ShowC extends Component {
    state = {  }
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
                        <Carousel itemList={carouselI}></Carousel>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ShowC;