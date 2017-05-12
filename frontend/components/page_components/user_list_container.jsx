import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addFollow, cancelFollow } from '../../actions/follow_actions';
import FollowButtonContainer from './follow_button_container';

class UserList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        <li>
          <p className='user-list-header'>{this.props.header}</p>
        </li>
        {this.props.users.map(user => {
          return (
            <li key={user.id}>
              <div>
                <img
                  src={user.profile_image_url}
                  onClick={ () => this.props.router.push('/' + user.username)}/>
                <div>
                  <p onClick={ () => this.props.router.push('/' + user.username) }>
                    {user.username}
                  </p>
                  <p>
                    {user.full_name}
                  </p>
                </div>
              </div>
              <FollowButtonContainer userId={user.id}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    follows: state.follows,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFollow: follow => dispatch(addFollow(follow)),
    cancelFollow: follow => dispatch(cancelFollow(follow))
  };
};

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserList));

export default UserListContainer;
