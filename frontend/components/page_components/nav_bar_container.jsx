import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ClickOutHandler from 'react-onclickout';
import { fetchNotifications, updateNotification } from '../../actions/notification_actions';
import { addFollow, cancelFollow } from '../../actions/follow_actions';
import TimeSelector from '../../util/time_selector.js';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationIsOpen: false,
    };

  this.redirectToSelfPage = this.redirectToSelfPage.bind(this);
  this.redirectToDiscover = this.redirectToDiscover.bind(this);
  this.displayNotification = this.displayNotification.bind(this);
  this.hideNotificaton = this.hideNotificaton.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  redirectToSelfPage() {
    this.props.router.push(`/${this.props.currentUser.username}`);
  }

  redirectToDiscover() {
    this.props.router.push('/discover');
  }

  triangleClassName() {
    return this.state.notificationIsOpen ? 'triangle' : 'triangle hidden';
  }

  notificationClassName() {
    return this.state.notificationIsOpen ? 'notification' : 'notification hidden';
  }

  displayNotification() {
    this.setState({notificationIsOpen: true});
    this.props.notifications.forEach( notification => {
      if (!notification.read) {
        this.props.updateNotification({ read: true }, notification.id);
      }
    });
  }

  hideNotificaton(e) {
    if (e.target.className === 'heart-black' || e.target.className === 'red-dot') {
      return;
    }
    this.setState({notificationIsOpen: false});
  }

  followButton(notifier_id) {
    const targetFollow = this.props.follows.filter( el => {
      return el.follower_id === this.props.currentUser.id &&
        el.following_id === notifier_id;
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
          this.props.addFollow({ following_id: this.props.userShow.id })
        }>
          Follow
        </button>
      );
    }
  }

  notificationMessage(category, content) {
    switch (category) {
      case 'follow':
        return 'started following you.';
      case 'like':
        return 'liked your photo.';
      case 'comment':
        return `commented: ${content}`;
    }
  }

  notificationImage(category, image_url, notifier_id) {
    switch (category) {
      case 'follow':
        return this.followButton(notifier_id);
      default:
        return <img className='image' src={image_url}/>;
    }
  }

  notificationItem({id, profile_image_url, username, category, content,
    image_url, notifier_id, time_ago_in_words, read}) {
    return(
      <div className='notificationItem' key={id}>
        <img className='profile-image' src={profile_image_url}/>
        <div>
          <div>
            <p>{username}</p>
            <p>{this.notificationMessage(category, content)}</p>
            <p>{TimeSelector(time_ago_in_words)}</p>
          </div>
          {this.notificationImage(category, image_url, notifier_id)}
        </div>
      </div>
    );
  }

  redDotClassName(notifications) {
    for (var i = 0; i < notifications.length; i++) {
      if (!notifications[i].read) {
        return 'red-dot';
      }
      return 'red-dot hidden';
    }
  }

  render() {
    return (
      <div className='nav'>
        <div className='discover' onClick={ this.redirectToDiscover }></div>
        <div className='heart-black' onClick={ this.displayNotification }/>
        <div className='self' onClick={ this.redirectToSelfPage }></div>

        <div className={this.redDotClassName(this.props.notifications)} onClick={ this.displayNotification }></div>

        <ClickOutHandler onClickOut={ this.hideNotificaton }>
          <div className={this.triangleClassName()}/>
          <div className={this.notificationClassName()}>
            {this.props.notifications.length > 0 ?
            <div className='notificationItems'>
              {this.props.notifications.map(
                notification => this.notificationItem({
                  id: notification.id,
                  profile_image_url: notification.notifier_profile_image_url,
                  username: notification.notifier_username,
                  category: notification.category,
                  content: notification.content,
                  image_url: notification.image_url,
                  notifier_id: notification.notifier_id,
                  time_ago_in_words: notification.time_ago_in_words,
                  read: notification.read,
                })
              )}
            </div>:
            <div className='no-notification'>
              <p>Recent Activity on your posts</p>
              <p>When someone comments on or likes ones of your photos or videos, you'll see it here.</p>
            </div>}
          </div>
        </ClickOutHandler>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    notifications: state.notifications,
    follows: state.follows,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchNotifications: () => dispatch(fetchNotifications()),
    updateNotification: (notification, id) => dispatch(updateNotification(notification, id)),
    addFollow: user => dispatch(addFollow(user)),
    cancelFollow: user => dispatch(cancelFollow(user)),
  });
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));

export default NavBarContainer;
