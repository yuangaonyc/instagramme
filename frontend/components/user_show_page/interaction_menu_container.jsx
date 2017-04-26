import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import { addFollow, cancelFollow } from '../../actions/follow_actions';

class InteractionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.redirectIfLoggedOut = this.redirectIfLoggedOut.bind(this);
    this.followButton = this.followButton.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidUpdate() {
    this.redirectIfLoggedOut();
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

  followButton() {
    const targetFollow = this.props.follows.filter( el => {
      return el.follower_id === this.props.currentUser.id &&
        el.following_id === this.props.userShow.id;
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

  interactionButton() {
    const targetFollow = this.props.follows.filter( el => {
      return el.follower_id === this.props.currentUser.id &&
        el.following_id === this.props.userShow.id;
    });
    if (this.props.currentUser.id === this.props.userShow.id) {
      return(<button className='edit-button'>Edit Profile</button>);
    } else {
      return this.followButton();
      }
    }

  gearIcon() {
    if (this.props.currentUser.id === this.props.userShow.id) {
      return <div className='gear' onClick={this.openModal}/>;
    }
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
              <button onClick={this.props.logout}>Log Out</button>
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
    logout: () => dispatch(logout()),
    addFollow: (follow) => dispatch(addFollow(follow)),
    cancelFollow: (follow) => dispatch(cancelFollow(follow))
  });
};

const InteractionMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InteractionMenu));

export default InteractionMenuContainer;
