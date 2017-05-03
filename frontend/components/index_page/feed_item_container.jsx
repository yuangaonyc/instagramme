import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import timeSelector from '../../util/time_selector';
import { addLike, cancelLike } from '../../actions/like_actions';
import { postComment, deleteComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router';
import { deleteImage } from '../../actions/image_actions';
import UserListContainer from '../page_components/user_list_container';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      image_id: this.props.feedItem.id,
      imageModalIsOpen: false
    };
    this.likeIcon = this.likeIcon.bind(this);
    this.update = this.update.bind(this);
    this.commentInput = this.commentInput.bind(this);
    this.likeCount = this.likeCount.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.openLikeModal = this.openLikeModal.bind(this);
    this.closeLikeModal = this.closeLikeModal.bind(this);
    this.openImageModal = this.openImageModal.bind(this);
    this.closeImageModal = this.closeImageModal.bind(this);
    this.handleDeleteImage = this.handleDeleteImage.bind(this);
    this.whiteDots = this.whiteDots.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    const comments = document.querySelector('#c' + this.props.feedItem.id);
    comments.scrollTop = comments.scrollHeight;
  }

  componentDidUpdate() {
    const comments = document.querySelector('#c' + this.props.feedItem.id);
    comments.scrollTop = comments.scrollHeight;
  }

  openImageModal() {
    this.setState({ imageModalIsOpen: true});
  }

  closeImageModal() {
    this.setState({ imageModalIsOpen: false});
  }

  openLikeModal() {
    this.setState({ likeModalIsOpen: true });
  }

  closeLikeModal() {
    this.setState({ likeModalIsOpen: false });
  }

  update(e) {
    this.setState({ body: e.currentTarget.value });
  }

  submitForm(e) {
    this.props.postComment(this.state).then(
      () => this.setState({ body: '' }));
  }

  likeCount() {
    const likes = this.props.likes.filter(
      like => like.image_id === this.props.feedItem.id
    );
    if (likes.length === 1) {
      return(
        <p>
          {likes.length +  'like'}
        </p>
      );
    } else {
      return(
        <p>
          {likes.length + ' likes'}
        </p>
      );
    }
  }

  likeIcon() {
    const targetLike = this.props.likes.filter(
      like => like.user_id === this.props.currentUser.id &&
        like.image_id === this.props.feedItem.id
    );
    if (targetLike.length > 0) {
      return <div className='heart-red'
        onClick={ () => this.props.cancelLike({id: targetLike[0].id}) }/>;
    } else {
      return <div className='heart'
        onClick={ () => this.props.addLike({image_id: this.props.feedItem.id})}/>;
    }
  }

  commentInput() {
    return(
      <form onSubmit={this.submitForm}>
        <input placeholder='Add a comment...'
          onChange={this.update}
          value={this.state.body}/>
      </form>
    );
  }

  handleDeleteImage() {
    this.props.deleteImage(this.props.feedItem.id).then(
      () => this.closeImageModal
    );
  }

  whiteDots() {
    if (this.props.feedItem.username === this.props.currentUser.username) {
      return (
        <div className='white-dots-div'
          onClick={this.openImageModal}>
          <div className='white-dots'/>
            <Modal
              isOpen={this.state.imageModalIsOpen}
              contentLabel='image-menu'
              className='menu'
              onRequestClose={this.closeImageModal}>
              <ul className='menu-options'>
                <li>
                  <button onClick={this.handleDeleteImage}>Delete Photo</button>
                </li>
                <li>
                  <button onClick={this.closeImageModal}>Cancel</button>
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
      <div className='feed'>
        <div className='feed-body'>
          <div className='info-header'>
            <div>
              <img src={ this.props.feedItem.profile_image_url }
                onClick={ () => this.props.router.push('/' + this.props.feedItem.username)}/>
              <p onClick={ () => this.props.router.push('/' + this.props.feedItem.username)}>
                { this.props.feedItem.username }
              </p>
            </div>
            <p>{ timeSelector(this.props.feedItem.time_ago_in_words) }</p>
          </div>

          <div className='image'>
            <img src={ this.props.feedItem.image_url }/>
          </div>

          <div className='info-body'>

            {this.likeCount()}

            <div>
              <ul className='comments' id={'c'+this.props.feedItem.id}>
                {this.props.comments.filter(
                  comment => comment.image_id === this.props.feedItem.id
                ).map(comment =>
                  <li key={comment.id}>
                    <div>
                      <p onClick={ () => this.props.router.push('/' + comment.user_username)}>
                        {comment.user_username}
                      </p>
                      <p>{comment.body}</p>
                    </div>

                    {
                      comment.user_id === this.props.currentUser.id ?
                      <div
                        className='delete-comment'
                        onClick={ () => this.props.deleteComment(comment.id) }
                      /> :
                      <div/>
                    }

                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className='interactions'>
            {this.likeIcon()}
            {this.commentInput()}
            {this.whiteDots()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    likes: state.likes,
    comments: state.comments,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    addLike: (like) => dispatch(addLike(like)),
    cancelLike: (like) => dispatch(cancelLike(like)),
    postComment: (comment) => dispatch(postComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    deleteImage: (id) => dispatch(deleteImage(id)),
  });
};

const FeedItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FeedItem));

export default FeedItemContainer;
