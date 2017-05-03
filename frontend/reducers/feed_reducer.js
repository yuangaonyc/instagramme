import { RECEIVE_FEED, CLEAR_FEED } from '../actions/feed_actions';
import { REMOVE_IMAGE } from '../actions/image_actions';
import merge from 'lodash/merge';

const _nullFeed = [];

const FeedReducer = (state = _nullFeed, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_FEED:
      newState = merge([], state);
      newState = newState.concat(action.feed);
      return newState;
    case CLEAR_FEED:
      return _nullFeed;
    case REMOVE_IMAGE:
      newState = merge([], state);
      newState = newState.filter( el => el.id !== action.imageShow.id );
      return newState;

    default:
      return state;
  }
};

export default FeedReducer;
