import React, { useEffect } from 'react'
import {fetchProducts} from '../../../redux/actions/ProductActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'




const ProductList = ({fetchProducts, allProducts}) => {

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <>
      {!allProducts ? 
        <p>Loading </p> : 
        allProducts.map((product)=>(
          <p key={product.id}>{product.product_name}</p>
        ))}
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    allProducts: state.allProducts
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchProducts:fetchProducts}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList) 