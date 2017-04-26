import * as followAPIUtil from '../util/follow_api_util';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const fetchFollows = () => dispatch => {
  return followAPIUtil.fetchFollows().then(
    (follows) => dispatch(receiveFollows(follows))
  );
};

export const addFollow = (follow) => dispatch => {
  return followAPIUtil.addFollow(follow).then(
    (follow) => dispatch(receiveFollow(follow))
  );
};

export const cancelFollow = (follow) => dispatch => {
  return followAPIUtil.cancelFollow(follow).then(
    (follow) => dispatch(removeFollow(follow))
  );
};

const receiveFollows = (follows) => {
  return {
    type: RECEIVE_FOLLOWS,
    follows
  };
};

const receiveFollow = (follow) => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  };
};

const removeFollow = (follow) => {
  return {
    type: REMOVE_FOLLOW,
    follow
  };
};
