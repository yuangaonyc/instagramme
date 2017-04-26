import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';


class InteractionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.redirectIfLoggedOut = this.redirectIfLoggedOut.bind(this);
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

  interactionButton() {
    if (this.props.currentUser.id === this.props.userShow.id) {
      return <button className='edit-button'>Edit Profile</button>;
    } else {
      return <button className='follow-button'>Follow</button>;
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
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout())
  });
};

const InteractionMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InteractionMenu));

export default InteractionMenuContainer;
