import React from 'react';
import { connect } from 'react-redux';

class UserShowImage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <ul>
          <li>
            hello!
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const UserShowImageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShowImage);

export default UserShowImageContainer;
