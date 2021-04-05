import React,{useState} from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
function AmountC({items}) {
    const [Quantity, setQuantity] = useState(0)
    const [totalPrice, settotalPrice] = useState(0)
     setQuantity(items.Quantity);
     settotalPrice(Number(items.Quantity)*Number(items.price))
    const handelIncrement =()=>{
       
            }
    const handelDecrement =()=>{
    }
      return (
        <div className="d-flex flex-row  m-2">
        <button onClick={handelDecrement} className="btn"><RemoveIcon className="icon"/></button>
        <input type="textarea" name="textValue" value={Quantity}/>
        <button onClick={handelIncrement} className=" btn"><AddIcon className="icon"></AddIcon></button>
        <div>
            {'$'+totalPrice}
            </div>
        </div>
      );
}

export default AmountC;