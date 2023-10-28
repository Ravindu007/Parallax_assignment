import { legacy_createStore as  createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const initialState = {};

// Define a variable for the Redux DevTools extension or a no-op function
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
