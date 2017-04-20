import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as APIUtil from './util/session_api_util';
import {login, signup, logout, editProfile} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    window.currentUser = null;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.logout = logout;
  window.editProfile = editProfile;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
