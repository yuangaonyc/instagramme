import React from 'react';
import { connect } from 'react-redux';
import { fetchImage } from '../../actions/image_actions';
import Modal from 'react-modal';

class UserShowImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(e) {
    this.openModal();
    return this.props.fetchImage(e.currentTarget.value);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const image_selector = this.props.userShowImages.map(
      userShowImage => {
        return(
          <li key={userShowImage.id}
            className='user-show-image'
            onClick={this.handleClick}
            value={userShowImage.id}>
            <img src={userShowImage.image_url}/>
          </li>
        );
      }
    );

    return(
      <div>
        <ul>
          {image_selector}
        </ul>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel={'image-show'}
          onRequestClose={this.closeModal}
          className='image-show-menu'>
          <img src={this.props.imageShow.image_url}
            className='image-show-image'/>
          <div className='image-show-info'>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchImage: (id) => dispatch(fetchImage(id))
  };
};

const UserShowImageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShowImage);

export default UserShowImageContainer;
