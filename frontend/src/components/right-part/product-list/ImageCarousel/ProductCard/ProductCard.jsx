import React from 'react';
import { connect } from 'react-redux';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const ProductCard = ({ product }) => {
  // Use the product data from Redux store here
  return (
    <div className='col-sm-12 col-md-4 mb-2'>
      <div className="card md:h-[110px] w-full flex flex-col items-center">
        <ImageCarousel imageArray={product.productImgs}/>
        <h2>{product.product_name}</h2>
        {/* <h2>{product.product_quantity}</h2>
        <h2>{product.product_price}</h2> */}
      </div>
    </div>
  );
}

export default ProductCard;
