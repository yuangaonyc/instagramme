import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import * as APIUtil from './util/session_api_util';
import {login, signup, logout} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
