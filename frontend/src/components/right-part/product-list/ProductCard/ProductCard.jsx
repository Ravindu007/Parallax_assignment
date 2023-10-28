import React from 'react';
import { connect } from 'react-redux';

const ProductCard = ({ product }) => {
  // Use the product data from Redux store here
  return (
    <div className='col-sm-12 col-md-4'>
      <div className="card mx-1 my-1  md:h-[80px]">
        <h2>{product.product_name}</h2>
        <p>{product.product_img}</p>
      </div>
    </div>
  );
}

// Map the specific product data from the store based on some identifier
const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.productId;
  const product = state.allProducts.find(product => product.id === productId);
  return {
    product,
  };
}

export default connect(mapStateToProps)(ProductCard);
