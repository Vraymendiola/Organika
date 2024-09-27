import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker() {
   const [quantity,setQuantity] = useState(1);

    function handleIncrease() {
        let value = quantity + 1;
        setQuantity(value);
    }

    function handleDecrease() {
        if (quantity === 1) return; //get out
        
        let value = quantity - 1;
        setQuantity(value);
    }

    return (
        <div className="qt-picker">
            <butoon className="btn btn-sm btn-outline-success" disabled={quantity === 1} onClick={handleDecrease}>-</butoon>

            <label>{quantity}</label>

            <button className="btn btn-sm btn-outline-success" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;