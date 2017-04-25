import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import UsersReducer from './user_reducer';
import ImageReducer from './image_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  userShow: UsersReducer,
  imageShow: ImageReducer
});

export default RootReducer;
