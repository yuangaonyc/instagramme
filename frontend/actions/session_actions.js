import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(
      user => dispatch(receiveCurrentUser(null)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
};

export const editProfile = user => dispatch => {
  return SessionAPIUtil.editProfile(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const receiveCurrentUser = currentUser => {
  return {
  type: RECEIVE_CURRENT_USER,
  currentUser
};};

export const receiveErrors = errors => {
  return {
  type: RECEIVE_ERRORS,
  errors
};};
