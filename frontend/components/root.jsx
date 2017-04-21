import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//react components
import AppContainer from './app_container';
import UserShowContainer from './user_show_page/user_show_container';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}/>
        <Route path="/:username" component={UserShowContainer}/>
      </Router>
    </Provider>
  );
};

export default Root;
