import React from 'react';
import { connect } from 'react-redux';
import { postComment } from '../../actions/comment_actions';
import { addLike, cancelLike } from '../../actions/like_actions';
import { deleteImage } from '../../actions/image_actions';
import Modal from 'react-modal';

class ImageInteraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      image_id: '',
      modalIsOpen: false
    };

    this.updateComment = this.updateComment.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.likeImage = this.likeImage.bind(this);
    this.whiteDots = this.whiteDots.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDeleteImage = this.handleDeleteImage.bind(this);
  }

  updateComment(e) {
    this.setState({
      body: e.currentTarget.value,
      image_id: this.props.imageId
    });
  }

  openModal() {
   this.setState({ modalIsOpen: true });
  }

  closeModal() {
   this.setState({ modalIsOpen: false });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.postComment(this.state).then(
      () => this.setState({body:''}));
  }

  likeImage(e) {
    this.props.addLike({image_id:this.props.imageId});
  }

  likeIcon() {
    const targetLike = this.props.likes.filter(
      el => el.user_id === this.props.currentUser.id &&
        el.image_id === this.props.imageId);
    if (targetLike.length > 0) {
      return <div className='heart-red' onClick={
          () => this.props.cancelLike({ id: targetLike[0].id })
        }/>;
    } else {
      return <div className='heart' onClick={this.likeImage}/>;
    }
  }

  handleDeleteImage() {
    this.props.deleteImage(this.props.imageShow.id).then(
      () => console.log('close')
    ).then(
      () => this.props.closeModal()
    );
  }

  whiteDots() {
    if (this.props.userShow.id === this.props.currentUser.id) {
      return (
        <div className='white-dots-div'
          onClick={this.openModal}>
          <div className='white-dots'/>
            <Modal
              isOpen={this.state.modalIsOpen}
              contentLabel='image-menu'
              className='menu'
              onRequestClose={this.closeModal}>
              <ul className='menu-options'>
                <li>
                  <button onClick={this.handleDeleteImage}>Delete Photo</button>
                </li>
                <li>
                  <button onClick={this.closeModal}>Cancel</button>
                </li>
              </ul>
            </Modal>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return(
      <div className='image-interaction'>
        {this.likeIcon()}
        <form onSubmit={this.submitForm}>
          <input
            placeholder='Add a comment...'
            onChange={this.updateComment}
            value={this.state.body}/>
        </form>
        {this.whiteDots()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    likes: state.likes,
    userShow: state.userShow,
    imageShow: state.imageShow,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    postComment: comment => dispatch(postComment(comment)),
    addLike: like => dispatch(addLike(like)),
    cancelLike: like => dispatch(cancelLike(like)),
    deleteImage: id => dispatch(deleteImage(id)),
  });
};

const ImageInteractionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageInteraction);

export default ImageInteractionContainer;
