import {combineReducers} from 'redux'
import AllProductReducer from './ReducerAllProducts'

const rootReducer = combineReducers({
  allProducts:AllProductReducer
})

export default rootReducer;