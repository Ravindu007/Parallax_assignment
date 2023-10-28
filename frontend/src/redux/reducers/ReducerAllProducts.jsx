import {FETCH_POSTS} from '../actions/Types'


export default function (state = null, action){
  switch(action.type){
    case FETCH_POSTS:
      return action.payload;
      break;
  }

  return state;
}