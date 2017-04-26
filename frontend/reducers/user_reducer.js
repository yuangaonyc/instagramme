import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUserShow = {
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

    default:
      return state;
  }
};

export default UsersReducer;
