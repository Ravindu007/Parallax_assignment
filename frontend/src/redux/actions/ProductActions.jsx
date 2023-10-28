import {FETCH_POSTS} from './Types'

export const fetchProducts = () => {
  return{
    type:FETCH_POSTS,
    payload:[
      {
        id:1,
        product_img:"imag1",
        product_name:"Watch",
        product_quantity:3,
        product_price:1400
      }
    ]
  }
}