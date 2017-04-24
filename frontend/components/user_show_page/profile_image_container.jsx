import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.updateFile = this.updateFile.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
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
    this.props.updateProfileImage(formData, this.props.userShow.id);
  }

  triggerUpdateFile(e) {
    $('#upload-profile-image').click();
  }

  removeCurrentPhoto() {
    console.log('removeCurrentPhoto');
  }

  render() {
    return (
      <div>
        <img src={this.props.userShow.profile_image_url}
          className='profile-image'
          onClick={this.openModal}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel={'profile-image-menu'}
          onRequestClose={this.closeModal}
          className='menu'>
          <ul>
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
    userShow: state.userShow
  });
};

const mapDispatchToProps = dispatch => {
  return({
      updateProfileImage: (formData, id) => dispatch(updateProfileImage(formData, id)),
  });
};

const ProfileImageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileImage);

export default ProfileImageContainer;
