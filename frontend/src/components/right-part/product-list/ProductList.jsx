import React, { useEffect } from 'react'
import {fetchProducts} from '../../../redux/actions/ProductActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ProductCard from './ProductCard/ProductCard'




const ProductList = ({fetchProducts, allProducts}) => {

  //fetching data
  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className='card-group m-2 py-2'>
      {!allProducts ? 
        <p>Loading </p> : 
        allProducts.map((product)=>(
          <ProductCard key={product.id} productId={product.id}/>
        ))}
    </div>
  )
}

// store the values in store-state [redux to access data saved in the store]
const mapStateToProps = (state) => {
  return{
    allProducts: state.allProducts
  }
}

//fetching action also map in to the same component [redux for fetch data and store in store] 
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchProducts:fetchProducts}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(ProductList) 