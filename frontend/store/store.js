import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
