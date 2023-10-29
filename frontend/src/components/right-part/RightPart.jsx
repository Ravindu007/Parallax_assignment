import React, { useEffect, useRef, useState } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {fetchProducts} from '../../redux/actions/ProductActions'
import ProductCard from './product-list/ProductCard/ProductCard'



const RightPart = ({fetchProducts, allProducts}) => {

  const [page, setPage] = useState(1);

  const cardContainerRef = useRef(null);


  useEffect(() => {
    fetchProducts(page);
  }, [fetchProducts, page]);
  

  const handleScroll = () => {
    if (cardContainerRef.current) {
      const scrollHeight = cardContainerRef.current.scrollHeight;
      const scrollTop = cardContainerRef.current.scrollTop;
      const containerHeight = cardContainerRef.current.clientHeight;

      if (scrollTop + containerHeight + 1 >= scrollHeight) {
        setPage(page + 1);
      }
    }
  };

  useEffect(() => {
    if (cardContainerRef.current) {
      cardContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (cardContainerRef.current) {
        cardContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  

  
  return (
    <div className='right-part'>
      <div className="container m-2">

        {/* filter row */}
        <div className="row">
          <div className="col-4">
              <div className="form-group">
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Please Select' 
                />
              </div>
          </div>
          <div className="col-4">
            <div className="form-group">
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Please Select' 
                />
              </div>
          </div>
          <div className="col-4">
            <div className="form-group">
                <input 
                  type="text"
                  className='form-control'
                  placeholder='Please Select' 
                />
              </div>
          </div>
        </div>

        {/* product list */}
        <div className="row px-2">
          <div 
            className="row overflow-y-scroll md:h-[350px] border-2 border-red-500" 
            ref={cardContainerRef}
          >
            {!allProducts 
              ? 
                <p>Loading...</p> 
              : 
                allProducts.map((product)=>(
                  <ProductCard key={product.id} product={product}/>
                ))}
          </div>
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchProducts: fetchProducts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RightPart);
