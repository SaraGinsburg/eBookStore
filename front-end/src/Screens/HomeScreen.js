import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen(props) {
  return (
    <div>
      <ul className="products">
        {data.products.map((product) => (
          <li>
            <div className="product">
              <Link to={"/product/" + product._id}>
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />
              </Link>
              <div className="product-name">
                <Link to={"/product/" + product._id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.publisher}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-condition">{product.condition}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HomeScreen;
