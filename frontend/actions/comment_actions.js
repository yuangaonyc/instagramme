export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
import * as commentAPIUtil from '../util/comment_api_util';

export const postComment = (comment) => dispatch => {
  return commentAPIUtil.postComment(comment).then(
    comment => dispatch(receiveComment(comment))
  );
};

export const fetchComments = () => dispatch => {
  return commentAPIUtil.fetchComments().then(
    comments => dispatch(receiveComments(comments))
  );
};

export const deleteComment = (id) => dispatch => {
  return commentAPIUtil.deleteComment(id).then(
    comment => dispatch(removeComment(comment))
  );
};

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};
