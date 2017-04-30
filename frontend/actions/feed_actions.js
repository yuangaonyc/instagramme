export const RECEIVE_FEED = 'RECEIVE_FEED';
export const CLEAR_FEED = 'CLEAR_FEED';
import * as FeedAPIUtil from '../util/feed_api_util';

export const fetchFeed = (page) => dispatch => {
  return FeedAPIUtil.fetchFeed(page).then(
    feed => dispatch(receiveFeed(feed))
  );
};

const receiveFeed = (feed) => {
  return {
    type:  RECEIVE_FEED,
    feed
  };
};

export const clearFeed = () => {
  return {
    type: CLEAR_FEED,
  };
};
