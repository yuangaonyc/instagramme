import { RECEIVE_USER, CLEAR_USER } from '../actions/user_actions';
import { REMOVE_IMAGE } from '../actions/image_actions';
import merge from 'lodash/merge';

const _nullUserShow = {
  id: '',
  bio: '',
  email: '',
  full_name: '',
  username: '',
  images: []
};

const UsersReducer = (state = _nullUserShow, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      newState = action.userShow;
      return newState;
    case CLEAR_USER:
      return _nullUserShow;
    case REMOVE_IMAGE:
      newState = merge({}, state);
      newState.images = newState.images.filter( el => el.id !== action.imageShow.id);
      return newState;

    default:
      return state;
  }
};

export default UsersReducer;
