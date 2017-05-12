import React from 'react';
import timeSelector from '../../util/time_selector';
import ImageInteractionContainer from './image_interaction_container';
import { connect } from 'react-redux';
import { addFollow, cancelFollow } from '../../actions/follow_actions';
import { withRouter } from 'react-router';
import { deleteComment } from '../../actions/comment_actions';
import { updateImage } from '../../actions/image_actions';
import FollowButtonContainer from '../page_components/follow_button_container';

class ImageShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
    this.likeCount = this.likeCount.bind(this);
    this.location = this.location.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.restoreLocation = this.restoreLocation.bind(this);
  }

  componentDidMount() {
    const comments = document.querySelector('.comments');
    comments.scrollTop = comments.scrollHeight;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.imageShow.location !== this.props.imageShow.location) {
      this.setState({ location: nextProps.imageShow.location || '' });
    }
  }

  componentDidUpdate() {
    const comments = document.querySelector('.comments');
    comments.scrollTop = comments.scrollHeight;
  }

  componentWillUnmount() {
    this.setState({ location: '' });
  }

  updateLocation(e) {
    this.setState({ location: e.currentTarget.value });
  }

  changeLocation() {
    const image = Object.assign(this.state);
    image.id = this.props.imageShow.id;
    this.props.updateImage(image).then(
      () => $('#location-input').blur()
    );
  }

  restoreLocation() {
    this.setState({ location: this.props.imageShow.location || '' });
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

  location() {
    if (this.props.imageShow.user_id === this.props.currentUser.id) {
      return(
        <form onSubmit={this.changeLocation}>
          <input
            id='location-input'
            placeholder='Add location'
            value={ this.state.location }
            onChange={ this.updateLocation }
            onBlur={ this.restoreLocation }/>
        </form>
      );
    } else {
      return(
        <div>{this.props.imageShow.location}</div>
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
                {this.location()}
              </div>
            </div>
            <FollowButtonContainer userId={this.props.imageShow.user_id}/>
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
            imageId={this.props.imageShow.id}
            closeModal={this.props.closeModal}/>
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
    updateImage: image => dispatch(updateImage(image)),
  };
};

const ImageShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ImageShow));


export default ImageShowContainer;
