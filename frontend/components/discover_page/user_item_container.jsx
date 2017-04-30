import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { cancelFollow, addFollow } from '../../actions/follow_actions';


class UserItem extends React.Component {

  followButton() {
  const targetFollow = this.props.follows.filter( el => {
    return el.follower_id === this.props.currentUser.id &&
      el.following_id === this.props.user.id;
  });

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
        this.props.addFollow({ following_id: this.props.user.id })
      }>
        Follow
      </button>
    );
  }
}

  render() {
    return(
      <li>
        <div className='user-item'>
          <div className='user-item-header'>
            <div>
              <img
                src={this.props.user.profile_image_url}
                onClick={ () => this.props.router.push('/' + this.props.user.username) }/>
              <div>
                <p onClick= { () => this.props.router.push('/' + this.props.user.username) }>
                  {this.props.user.username}
                </p>
                <p>{this.props.user.full_name}</p>
              </div>
            </div>
            {this.followButton()}
          </div>
          <div className='user-item-images'>
            {this.props.user.images[0] ? <img src={this.props.user.images[0].url}/> : <div/>}
            {this.props.user.images[1] ? <img src={this.props.user.images[1].url}/> : <div/>}
            {this.props.user.images[2] ? <img src={this.props.user.images[2].url}/> : <div/>}
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    follows: state.follows,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFollow: follow => dispatch(addFollow(follow)),
    cancelFollow: follow => dispatch(cancelFollow(follow))
  };
};

const UserItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserItem));

export default UserItemContainer;
