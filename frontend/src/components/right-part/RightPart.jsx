import React, { useEffect, useRef, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/ProductActions';
import ProductCard from './product-list/ProductCard/ProductCard';
import Loader from '../loader/Loader';

const RightPart = ({ fetchProducts, allProducts }) => {
  const [productList, setProductList] = useState([]);
  const [occurance, setOccurance] = useState(1); // check the initial load
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const cardContainerRef = useRef(null); //refer the scrolling area

  const uniqueProductIds = useRef(new Set());  // Keep track of unique product IDs that have been added to the list

  useEffect(() => {
    fetchProducts(page, occurance);
  }, [page, occurance]);


  useEffect(() => { // concating new products to existing array
    if (allProducts && Array.isArray(allProducts)) {
      const newProducts = allProducts.filter(
        (product) => !uniqueProductIds.current.has(product.id)
      );

      if (newProducts.length > 0) {
        newProducts.forEach((product) =>
          uniqueProductIds.current.add(product.id)
        );
        setProductList((prev) => [...prev, ...newProducts]);
      }

      setIsLoading(false);
      
    }
  }, [allProducts]);

  const handleScroll = () => {
    if (cardContainerRef.current) {
      const scrollHeight = cardContainerRef.current.scrollHeight;
      const scrollTop = cardContainerRef.current.scrollTop;
      const containerHeight = cardContainerRef.current.clientHeight;

      console.log(scrollHeight, scrollTop, containerHeight);

      if (scrollTop + containerHeight + 1 >= scrollHeight) { //check wether it reaches the bottom
        setTimeout(() => {
          setOccurance((prev) => prev + 1);
          setPage((prev) => prev + 1);
          setIsLoading(true);
        }, 5000);
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
        <div className="row">{/* ... (your filter inputs) */}</div>
        {/* product list */}
        <div className="row px-2">
          <div
            className="row overflow-y-scroll md:h-[350px] border-2 border-red-500"
            ref={cardContainerRef}
          >
            {productList &&
              productList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            {isLoading ? <Loader /> : '...'}
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
