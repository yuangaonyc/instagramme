import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as APIUtil from './util/session_api_util';
import {login, signup, logout, updateProfileImage} from './actions/session_actions';
import { fetchImage } from './actions/image_actions';
import { fetchLikes, addLike, cancelLike } from './actions/like_actions';
import { fetchFollows, addFollow, cancelFollow } from './actions/follow_actions';
import { fetchFeed } from './actions/feed_actions';
import { fetchUsers } from './actions/user_actions';

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
  window.fetchLikes = fetchLikes;
  window.addLike = addLike;
  window.cancelLike = cancelLike;
  window.fetchFollows = fetchFollows;
  window.addFollow = addFollow;
  window.cancelFollow = cancelFollow;
  window.fetchFeed = fetchFeed;
  window.fetchUsers = fetchUsers;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
