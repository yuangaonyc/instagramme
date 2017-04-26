import React from 'react';
import timeSelector from '../../util/time_selector';
import ImageInteractionContainer from './image_interaction_container';

class ImageShowContainer extends React.Component {
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
            <button className='follow-button'>Follow</button>
          </div>

          <div className='image-show-info-basic'>
            <p>likes</p>
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

export default ImageShowContainer;
