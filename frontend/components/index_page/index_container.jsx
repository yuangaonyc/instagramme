import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../page_components/header_container';

class Index extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <HeaderContainer/>
        <h1>index page for {this.props.currentUser.username}</h1>
      </div>
    );
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
