import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function ProductScreen(props) {
  console.log(props.match.params.id);
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <div className="back">
        <Link to="/">Back</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>Publisher: {product.publisher}</li>
            <li>Condition: {product.condition}</li>
            <li>
              <b>Price: ${product.price}</b>
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              <button className="button primary">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductScreen;
