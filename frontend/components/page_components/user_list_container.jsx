import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addFollow, cancelFollow } from '../../actions/follow_actions';

class UserList extends React.Component{
  constructor(props) {
    super(props);
    this.followButton = this.followButton.bind(this);
  }

  followButton(user) {
  const targetFollow = this.props.follows.filter( el => {
    return el.follower_id === this.props.currentUser.id &&
      el.following_id === user.id;
  });

  if (user.id === this.props.currentUser.id) {
    return <div></div>;
  }

  if (targetFollow.length > 0) {
    return(
      <button className='following-button' onClick={() =>
          this.props.cancelFollow({ id: targetFollow[0].id })}>
        Following
      </button>
    );
  } else {
    return(
      <button className='follow-button' onClick={() =>
        this.props.addFollow({ following_id: user.id })
      }>
        Follow
      </button>
    );
  }
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
              {this.followButton(user)}
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
