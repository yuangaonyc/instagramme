import { RECEIVE_FEED } from '../actions/feed_actions';
import merge from 'lodash/merge';

const _nullFeed = [];

const FeedReducer = (state = _nullFeed, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_FEED:
      newState = merge([],state);
      newState = newState.concat(action.feed);
      return newState;

    default:
      return state;
  }
};

export default FeedReducer;
