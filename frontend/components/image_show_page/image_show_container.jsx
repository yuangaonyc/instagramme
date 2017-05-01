import React from 'react';
import timeSelector from '../../util/time_selector';
import ImageInteractionContainer from './image_interaction_container';
import { connect } from 'react-redux';
import { addFollow, cancelFollow } from '../../actions/follow_actions';
import { withRouter } from 'react-router';
import { deleteComment } from '../../actions/comment_actions';

class ImageShow extends React.Component {
  constructor(props) {
    super(props);
    this.likeCount = this.likeCount.bind(this);
    this.followButton = this.followButton.bind(this);
  }

  componentDidMount() {
    const comments = document.querySelector('.comments');
    comments.scrollTop = comments.scrollHeight;
  }

  componentDidUpdate() {
    const comments = document.querySelector('.comments');
    comments.scrollTop = comments.scrollHeight;
  }

  comment_selector(comments) {
    return (
      comments.map(comment => {
      return(
        <li key={comment.id}>
          <div>
            <p onClick={() => {
                this.props.router.push('/' + comment.user_username);
                this.props.closeModal();
              }}>
              {comment.user_username}
            </p>
            <p>
              {comment.body}
            </p>
          </div>

          { this.props.userShow.id === this.props.currentUser.id ?
            <div className='delete-comment'
              onClick={ () => this.props.deleteComment(comment.id)}/> :
            <div/>}

        </li>
      );
    })
  );}

  likeCount(image_id) {
    const likeNum = this.props.likes.filter(el => el.image_id === image_id).length;
    if (likeNum === 1) {
      return likeNum + ' like';
    } else {
      return likeNum + ' likes';
    }
  }

  followButton() {
    if (this.props.currentUser.id === this.props.userShow.id) {
      return <div></div>;
    }

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

  render() {
    return(
      <div>
        <img src={this.props.imageShow.image_url}
          className='image-show-image'/>

        <div className='image-show-info'>

          <div className='image-show-info-header'>
            <div>
              <img src={this.props.imageShow.user_profile_image_url}
                onClick={this.props.closeModal}/>
              <div>
                <p onClick={this.props.closeModal}>{this.props.imageShow.user_username}</p>
                <p>{this.props.imageShow.location}</p>
              </div>
            </div>
            {this.followButton()}
          </div>

          <div className='image-show-info-basic'>
            <p>{this.likeCount(this.props.imageShow.id)}</p>
            <p>{timeSelector(this.props.imageShow.time_ago_in_words)}</p>
          </div>

          <ul className='comments'>
            {this.comment_selector(this.props.comments.filter(
              comment => comment.image_id === this.props.imageShow.id
            ))}
          </ul>

          <ImageInteractionContainer
            imageId={this.props.imageShow.id}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    follows: state.follows,
    userShow: state.userShow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFollow: follow => dispatch(addFollow(follow)),
    cancelFollow: follow => dispatch(cancelFollow(follow)),
    deleteComment: id => dispatch(deleteComment(id)),
  };
};

const ImageShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ImageShow));


export default ImageShowContainer;
