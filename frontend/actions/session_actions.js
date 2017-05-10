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

export const updateProfileImage = (formData, id) => dispatch => {
  return SessionAPIUtil.updateProfileImage(formData, id).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateProfile = (user, id) => dispatch => {
  return SessionAPIUtil.updateProfile(user, id).then(
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
