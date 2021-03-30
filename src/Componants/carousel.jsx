import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../Componants/carousel.css'
function carousel({itemList}) {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    

   const cItems= itemList.map((item,index)=>{
       return(
           <React.Fragment>
           <a href= {item.itemurl} ><img
           className="itemPicture"
           alt="ProductImg"
           src ={item.image}
           />
           </a>
           <br/>
           <a href= {item.itemurl}>
           <div className="font-weight-bold itemTitle" >{item.imagesTitel}</div>
           </a>
           <br/>
           <div className="font-weight-bold itemPrice" >{item.itemPrice}</div>
           </React.Fragment>
           
       )
    });
    return(
        <AliceCarousel
        mouseTracking
        disableDotsControls ={true}
        items={cItems}
        responsive={responsive}
    />
    )
  }
  export default carousel;