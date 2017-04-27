import React from 'react';
import { connect } from 'react-redux';
import { postComment } from '../../actions/comment_actions';
import { addLike, cancelLike } from '../../actions/like_actions';

class ImageInteraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      image_id: ''
    };

    this.updateComment = this.updateComment.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.likeImage = this.likeImage.bind(this);
  }

  updateComment(e) {
    this.setState({
      body: e.currentTarget.value,
      image_id: this.props.imageId
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.postComment(this.state).then(
      () => this.setState({body:''})).then(
        () => document.querySelector(".comments li:last-child").scrollIntoView()
      );
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
        <div className='white-dots'/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    likes: state.likes
  });
};

const mapDispatchToProps = dispatch => {
  return({
    postComment: comment => dispatch(postComment(comment)),
    addLike: like => dispatch(addLike(like)),
    cancelLike: like => dispatch(cancelLike(like))
  });
};

const ImageInteractionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageInteraction);

export default ImageInteractionContainer;
