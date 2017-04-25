import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as APIUtil from './util/session_api_util';
import {login, signup, logout, updateProfileImage} from './actions/session_actions';
import { fetchImage } from './actions/image_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
    window.currentUser = null;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.logout = logout;
  window.updateProfileImage = updateProfileImage;
  window.fetchImage = fetchImage;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
