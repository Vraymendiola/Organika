import Product from "../components/product.css";
import "./catalog.css";
import catalog from "../services/DataServices";

function Catalog() {
    return (
      <div className="Catalog">
        <h1>Our Amazing Catalog</h1>

       <div className="filters">
        {catalog.map(cat => <button className="btn btn-sm btn-outline-dark">x</button>)}
       </div>

        {/* {catalog.map(prod => (<Product data={prod} text="asd" color="red"></Product>))} */}

      </div>  
    );
  }

  export default Catalog;
