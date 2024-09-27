import './product.css';
import QuantityPicker from './quantityPicker';

function Product(props) {
        function add() {
        console.log("adding to cart");
    }

    return (
        <div className="product">
            <image src={props.data.image} alt=""></image>

            <h4>{props.data.title}</h4>
            <label>${props.data.price}</label>

           <div className="controls">
            <QuantityPicker></QuantityPicker>

            <button className="btn btn-sm btn-primary" onClick={add}>Add</button>
        </div>
     </div>
    );
}

export default Product;
