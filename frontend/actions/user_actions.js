export const RECEIVE_USER = 'RECEIVE_USER';
import * as UserAPIUtil from '../util/user_api_util';

export const fetchUser = (username) => dispatch => {
  const test = UserAPIUtil.fetchUser(username).then(
    user => dispatch(receiveUser(user))
  );
};

export const receiveUser = (userShow) => {
  return {
    type: RECEIVE_USER,
    userShow
  };
};
