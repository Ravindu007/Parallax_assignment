import {FETCH_PRODUCTS} from '../actions/Types'


export default function (state = null, action){
  switch(action.type){
    case FETCH_PRODUCTS:
      return action.payload;
      break;
  }

  return state;
}