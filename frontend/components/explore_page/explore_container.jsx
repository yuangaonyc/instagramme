import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../page_components/header_container';

class Explore extends React.Component {
  render() {
    return(
      <div>
        <HeaderContainer/>
        explore
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({});
};

const mapDispatchToProps = dispatch => {
  return({});
};

const ExploreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);

export default ExploreContainer;
