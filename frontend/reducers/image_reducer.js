import { RECEIVE_IMAGE, CHANGE_IMAGE } from '../actions/image_actions';
import merge from 'lodash/merge';

const _nullImageShow = {
  user_username: '',
  image_url: '',
  time_ago_in_words: '',
  comments: [],
  id: '',
};

const ImageReducer = (state = _nullImageShow, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_IMAGE:
      newState = merge({}, _nullImageShow, action.imageShow);
      return newState;
    case CHANGE_IMAGE:
      newState = merge({}, state, action.imageShow);
      return newState;

    default:
      return state;
  }
};

export default ImageReducer;
