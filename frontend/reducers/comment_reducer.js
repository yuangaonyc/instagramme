import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import merge from 'lodash/merge';

const _nullComment = [];

const CommentReducer = (state = _nullComment, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      newState = merge([], state);
      newState.push(action.comment);
      return newState;
    case REMOVE_COMMENT:
      newState = merge([], state);
      newState = newState.filter(
        comment => comment.id !== action.comment.id
      );
      return newState;

    default:
      return state;
  }
};

export default CommentReducer;
