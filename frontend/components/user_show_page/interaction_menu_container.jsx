import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import { addFollow, cancelFollow } from '../../actions/follow_actions';
import { clearUser } from '../../actions/user_actions';
import { clearFeed } from '../../actions/feed_actions';
import FollowButtonContainer from '../page_components/follow_button_container';

class InteractionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.redirectIfLoggedOut = this.redirectIfLoggedOut.bind(this);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.loggedOut) {
      return false;
    }
    return true;
  }

  openModal() {
   this.setState({ modalIsOpen: true });
  }

  closeModal() {
   this.setState({ modalIsOpen: false });
  }

  redirectIfLoggedOut() {
    if (this.props.loggedOut) {
      this.props.router.push('/');
    }
  }

  interactionButton() {
    const targetFollow = this.props.follows.filter( el => {
      return el.follower_id === this.props.currentUser.id &&
        el.following_id === this.props.userShow.id;
    });
    if (this.props.currentUser.id === this.props.userShow.id) {
      return(
        <button className='edit-button' onClick={() =>
          this.props.router.push(`/${this.props.currentUser.username}/edit`)}>
          Edit Profile
        </button>
      );
    } else {
      return <FollowButtonContainer userId={this.props.userShow.id}/>;
      }
    }

  gearIcon() {
    if (this.props.currentUser.id === this.props.userShow.id) {
      return <div className='gear' onClick={this.openModal}/>;
    }
  }

  logoutAndRedirect() {
    this.props.logout().then(() => this.props.router.push('/'));
  }

  render() {
    return (
      <div>
        {this.interactionButton()}
        {this.gearIcon()}
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel='system-menu'
          className='menu'
          onRequestClose={this.closeModal}>
          <ul className='menu-options'>
            <li>
              <button onClick={this.logoutAndRedirect}>Log Out</button>
            </li>
            <li>
              <button onClick={this.closeModal}>Cancel</button>
            </li>
          </ul>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return({
    loggedOut: !state.session.currentUser,
    currentUser: state.session.currentUser,
    follows: state.follows
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()).then(
      () => dispatch(clearUser())
    ).then(
      () => dispatch(clearFeed())
    ),
    addFollow: (follow) => dispatch(addFollow(follow)),
    cancelFollow: (follow) => dispatch(cancelFollow(follow))
  });
};

const InteractionMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InteractionMenu));

export default InteractionMenuContainer;
