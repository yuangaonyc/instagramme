import {
  RECEIVE_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';
const _nullFollow = [];

const FollowReducer = (state = _nullFollow, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW:
      newState = Object.assign([], state);
      newState.push(action.follow);
      return newState;
    case REMOVE_FOLLOW:
      newState = Object.assign([], state);
      newState = newState.filter(el => {
        return el.follower_id !== action.follow.follower_id ||
          el.following_id !== action.follow.following_id;
      });
      return newState;

    default:
    return state;
  }
};

export default FollowReducer;
