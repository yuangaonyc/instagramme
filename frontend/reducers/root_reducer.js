import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import UsersReducer from './user_reducer';
import ImageReducer from './image_reducer';
import LikeReducer from './like_reducer';
import FollowReducer from './follow_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  userShow: UsersReducer,
  imageShow: ImageReducer,
  likes: LikeReducer,
  follows: FollowReducer
});

export default RootReducer;
