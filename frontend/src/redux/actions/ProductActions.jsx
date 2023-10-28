import {FETCH_POSTS} from './Types'

// json file
import productData from '../../assets/products.json'

export const fetchProducts = () => {
  return{
    type:FETCH_POSTS,
    payload:productData.products
  }
}