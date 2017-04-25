import { RECEIVE_IMAGE } from '../actions/image_actions';
import merge from 'lodash/merge';

const _nullImageShow = {
  location: '',
  author_username: '',
  image_url: '',
  time_ago_in_words: ''
};

const ImageReducer = (state = _nullImageShow, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_IMAGE:
      newState = merge({}, _nullImageShow, action.imageShow);
      return newState;

    default:
      return state;
  }
};

export default ImageReducer;
