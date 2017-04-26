import * as likeAPIUtil from '../util/like_api_util';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const fetchLikes = () => dispatch => {
  return likeAPIUtil.fetchLikes().then(
    likes => dispatch(receiveLikes(likes))
  );
};

export const addLike = (like) => dispatch => {
  return likeAPIUtil.addLike(like).then(
    (like) => dispatch(receiveLike(like))
  );
};

export const cancelLike = (like) => dispatch => {
  return likeAPIUtil.deleteLike(like).then(
    (like) => dispatch(deleteLike(like))
  );
};

const receiveLikes = (likes) => {
  return {
    type: RECEIVE_LIKES,
    likes
  };
};

const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

const deleteLike = (like) => {
  return {
    type: REMOVE_LIKE,
    like
  };
};
