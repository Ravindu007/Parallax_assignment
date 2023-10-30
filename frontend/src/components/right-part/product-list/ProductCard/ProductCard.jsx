import React from 'react';
import { connect } from 'react-redux';

const ProductCard = ({ product }) => {
  // Use the product data from Redux store here
  return (
    <div className='col-sm-12 col-md-4 mb-2'>
      <div className="card md:h-[110px] flex justify-center">
        <h2>{product.product_name}</h2>
      </div>
    </div>
  );
}

export default ProductCard;
