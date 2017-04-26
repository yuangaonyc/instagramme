import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';
import merge from 'lodash/merge';

const _nullLike = [];

const LikeReducer = (state = _nullLike, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      newState = merge([], state);
      newState.push(action.like);
      return newState;
    case REMOVE_LIKE:
      newState = merge([], state);
      newState = newState.filter(el => {
        return el.user_id !== action.like.user_id ||
          el.image_id !== action.like.image_id;
      });
      return newState;

    default:
      return state;
  }
};

export default LikeReducer;
