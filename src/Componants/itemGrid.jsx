import React from 'react';
import './iteGrid.css'
import {gridItems} from "./griditems"
export default function ItemGrid(){
    return(
        <div className="containorGrid">
           {
           gridItems.map((item,index)=>{
                
               return(
                <div className="gridItemS">
                       <a href= {item.itemUrl}>
                       <img
                       alt=""
                       src={item.itemImg}
                       />
                       <br/>
                       <div className="itemName">{item.itemName}</div>   
                       </a>
                    <div className="font-weight-bold itemPrice" >{item.itemPrice}</div>
                   </div> 
               )
              })
              
           }
        </div>
    )
}