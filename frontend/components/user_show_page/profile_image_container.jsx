import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { fetchUser } from '../../actions/user_actions';
import { updateProfileImage, updateProfile } from '../../actions/session_actions.js';

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      loadingProfileImage: false
    };

    this.updateFile = this.updateFile.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.profileImage = this.profileImage.bind(this);
    this.removeCurrentPhoto = this.removeCurrentPhoto.bind(this);
    this.loadingProfileImage = this.loadingProfileImage.bind(this);
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
    this.setState({loadingProfileImage: true});
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append('user[profile_image]', file);
    this.closeModal();
    this.props.updateProfileImage(formData, this.props.userShow.id).then(
      () => {
        this.props.fetchUser(this.props.userShow.username);
      }
    ).then(() => this.setState({loadingProfileImage: false}));
  }

  triggerUpdateFile(e) {
    $('#upload-profile-image').click();
  }

  removeCurrentPhoto() {
    this.closeModal();
    this.setState({loadingProfileImage: true});
    this.props.updateProfile({ remove_profile_image: true }, this.props.userShow.id).then(
      () => {
        this.props.fetchUser(this.props.userShow.username);
      }
    ).then(() => this.setState({loadingProfileImage: false}));
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

  loadingProfileImage() {
    if (this.state.loadingProfileImage) {
      return(
        <div className='profile-image profile-image-overlay'>
          <div className='loader'>
            <div className="small progress"><div>Loading…</div></div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.profileImage()}
        {this.loadingProfileImage()}
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
              <button onClick={this.removeCurrentPhoto}>
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
      fetchUser: (username) => dispatch(fetchUser(username)),
      updateProfile: (user, id) => dispatch(updateProfile(user,id)),
  });
};

const ProfileImageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileImage);

export default ProfileImageContainer;
