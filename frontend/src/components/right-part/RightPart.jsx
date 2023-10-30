import React, { useEffect, useRef, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/ProductActions';
import ProductCard from './product-list/ProductCard/ProductCard';

const RightPart = ({ fetchProducts, allProducts }) => {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const cardContainerRef = useRef(null);

  // Keep track of unique product IDs that have been added to the list
  const uniqueProductIds = useRef(new Set());


  useEffect(() => { //fetch initial products
    fetchProducts(page); 
  }, [fetchProducts, page]);


  useEffect(() => { //fetch new products on scroll and update the state(allProducts)
    if (allProducts && Array.isArray(allProducts)) {
      // Filter out products with IDs that are not in the uniqueProductIds set
      const newProducts = allProducts.filter((product) => !uniqueProductIds.current.has(product.id));

      if (newProducts.length > 0) {
        // Add new product IDs to the uniqueProductIds set
        newProducts.forEach((product) => uniqueProductIds.current.add(product.id));

        // Append new products to the product list
        setProductList((prev) => [...prev, ...newProducts]);
      }

      setTimeout(()=>{
        setIsLoading(false);
      },2000)
    }
  }, [allProducts]);


  // fetch data on scroll
  const handleScroll = () => {
    if (cardContainerRef.current) {
      const scrollHeight = cardContainerRef.current.scrollHeight;
      const scrollTop = cardContainerRef.current.scrollTop;
      const containerHeight = cardContainerRef.current.clientHeight;

      if (scrollTop + containerHeight + 1 >= scrollHeight) {
        setPage((prev) => prev + 1);
        setIsLoading(true);
        fetchProducts(page + 1);
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
          {/* ... (your filter inputs) */}
        </div>

        {/* product list */}
        <div className="row px-2">
          <div
            className="row overflow-y-scroll md:h-[350px] border-2 border-red-500"
            ref={cardContainerRef}
          >
            {productList &&
              productList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
            {isLoading ? <p className='h-fit w-full bg-yellow-300 border-2 border-black'>Loading</p> : <>..</>}
          </div>
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchProducts: fetchProducts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RightPart);
