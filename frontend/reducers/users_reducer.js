import { RECEIVE_USERS } from '../actions/user_actions';

const _nullUsers = [];

const UsersReducer = (state=_nullUsers, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;

    default:
      return state;
  }
};

export default UsersReducer;
