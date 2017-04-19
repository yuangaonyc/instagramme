import React from 'react';
import { connect } from 'react-redux';

class Index extends React.Component{
  render() {
    return <h1>index page for {this.props.currentUser.username}</h1>;
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const IndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);

export default IndexContainer;
