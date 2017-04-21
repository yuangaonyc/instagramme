import React from 'react';
import { connect } from 'react-redux';

class Index extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>index page for {this.props.currentUser.username}</h1>
        <img src={this.props.currentUser.profile_image_url}/>
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
