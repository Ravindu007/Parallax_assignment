import React from 'react';
import { connect } from 'react-redux';

const ProductCard = ({ product }) => {
  // Use the product data from Redux store here
  return (
    <div className='col-sm-12 col-md-4 mt-3'>
      <div className="card md:h-[100px] flex justify-center">
        <h2>{product.product_name}</h2>
      </div>
    </div>
  );
}

export default ProductCard;
