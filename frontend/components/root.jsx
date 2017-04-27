import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//react components
import AppContainer from './app_container';
import UserShowContainer from './user_show_page/user_show_container';
import ExploreContainer from './explore_page/explore_container';

const Root = ({store}) => {
  function redirectIfNotLoggedIn(nextState, replace) {
    const loggedIn = store.getState().session.currentUser;
    if (!loggedIn) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={AppContainer}/>
        <Route path='/explore' component={ExploreContainer} onEnter={redirectIfNotLoggedIn}/>
        <Route path='/:username' component={UserShowContainer} onEnter={redirectIfNotLoggedIn}/>
      </Router>
    </Provider>
  );
};

export default Root;
