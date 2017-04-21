import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import IndexContainer from './index_page/index_container';
import SessionContainer from './session_page/session_container';

class App extends React.Component {
  render() {
    if (this.props.session.currentUser) {
      return <IndexContainer/>;
    } else {
      return <SessionContainer/>;
    }
  }
}

const mapStateToProps = state => {
  return {
    session: state.session
  };
};

const AppContainer = connect(
  mapStateToProps)(App);

export default AppContainer;
