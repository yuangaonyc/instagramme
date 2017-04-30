export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CLEAR_USER = 'CLEAR_USER';
import * as UserAPIUtil from '../util/user_api_util';

export const fetchUser = (username) => dispatch => {
  return UserAPIUtil.fetchUser(username).then(
    user => dispatch(receiveUser(user))
  );
};

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users))
  );
};

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

const receiveUser = (userShow) => {
  return {
    type: RECEIVE_USER,
    userShow
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
