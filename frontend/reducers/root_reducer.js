import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import ImageReducer from './image_reducer';
import LikeReducer from './like_reducer';
import FollowReducer from './follow_reducer';
import FeedReducer from './feed_reducer';
import CommentReducer from './comment_reducer';
import UsersReducer from './users_reducer';
import NotificationReducer from './notification_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  userShow: UserReducer,
  users: UsersReducer,
  imageShow: ImageReducer,
  likes: LikeReducer,
  follows: FollowReducer,
  feed: FeedReducer,
  comments: CommentReducer,
  notifications: NotificationReducer
});

export default RootReducer;
