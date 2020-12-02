import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className='card'>
      <Link to={`/product/${product._id}`}>
        <div className='book-cover'>
          <img className='medium' src={product.image} alt={product.name} />
        </div>
      </Link>
      <div className='card-body'>
        <Link to={`/product/${product._id}`}>
          <h4>{product.name}</h4>
        </Link>
        <div className='row'>
          <div className='price'>${product.price}</div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
