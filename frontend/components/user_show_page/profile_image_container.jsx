import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { fetchUser } from '../../actions/user_actions';

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.updateFile = this.updateFile.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.profileImage = this.profileImage.bind(this);
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

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append('user[profile_image]', file);
    this.closeModal();
    this.props.updateProfileImage(formData, this.props.userShow.id).then(
      () => {
        this.props.fetchUser(this.props.userShow.username);
      }
    );
  }

  triggerUpdateFile(e) {
    $('#upload-profile-image').click();
  }

  removeCurrentPhoto() {
    console.log('removeCurrentPhoto');
  }

  profileImage() {
    if (this.props.currentUser.id === this.props.userShow.id) {
      return(
        <img src={this.props.userShow.profile_image_url}
          className='profile-image me'
          onClick={this.openModal}/>
      );
    } else {
      return(
        <img src={this.props.userShow.profile_image_url}
          className='profile-image'/>
      );
    }
  }

  render() {
    return (
      <div>
        {this.profileImage()}
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel={'profile-image-menu'}
          onRequestClose={this.closeModal}
          className='menu'>
          <ul className='menu-options'>
            <li>
              <div>
                <p>
                  Change Profile Picture
                </p>
              </div>
            </li>
            <li>
              <button>
                Remove Current Photo
              </button>
            </li>
            <li>
              <button onClick={this.triggerUpdateFile}>
                Upload Photo
              </button>
              <input id='upload-profile-image' type='file' onChange={this.updateFile}/>
            </li>
            <li>
              <button onClick={this.closeModal}>
                Cancel
              </button>
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
    userShow: state.userShow,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return({
      updateProfileImage: (formData, id) => dispatch(updateProfileImage(formData, id)),
      fetchUser: (username) => dispatch(fetchUser(username))
  });
};

const ProfileImageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileImage);

export default ProfileImageContainer;
