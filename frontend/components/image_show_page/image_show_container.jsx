import React from 'react';
import timeSelector from '../../util/time_selector';
import ImageInteractionContainer from './image_interaction_container';
import { connect } from 'react-redux';
import { addFollow, cancelFollow } from '../../actions/follow_actions';

class ImageShow extends React.Component {
  constructor(props) {
    super(props);
    this.likeCount = this.likeCount.bind(this);
    this.followButton = this.followButton.bind(this);
  }

  comment_selector(comments) {
    return (
      comments.map(comment => {
      return(
        <li key={comment.id}>
          <p>
            {comment.user_username}
          </p>
          <p>
            {comment.body}
          </p>
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
              <img src={this.props.imageShow.user_profile_image_url}/>
              <div>
                <p>{this.props.imageShow.user_username}</p>
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
            {this.comment_selector(this.props.imageShow.comments)}
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
    cancelFollow: follow => dispatch(cancelFollow(follow))
  };
};

const ImageShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageShow);


export default ImageShowContainer;
