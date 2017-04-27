import React from 'react';
import { connect } from 'react-redux';
import timeSelector from '../../util/time_selector';
import { addLike, cancelLike } from '../../actions/like_actions';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.likeIcon = this.likeIcon.bind(this);
    this.update = this.update.bind(this);
    this.commentInput = this.commentInput.bind(this);
  }

  update(e) {
    this.setState({ body: e.currentTarget.value });
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
      <form>
        <input placeholder='Add a comment...'
          onChange={this.update}
          value={this.state.body}/>
      </form>
    );
  }

  render() {
    return(
      <div className='feed'>
        <div className='feed-body'>
          <div className='info-header'>
            <div>
              <img src={ this.props.feedItem.profile_image_url }/>
              <p>{ this.props.feedItem.username }</p>
            </div>
            <p>{ timeSelector(this.props.feedItem.time_ago_in_words) }</p>
          </div>

          <div className='image'>
            <img src={ this.props.feedItem.image_url }/>
          </div>

          <div className='info-body'>
            <p>
              {this.props.feedItem.likes.length === 1 ?
              this.props.feedItem.likes.length + ' like' :
              this.props.feedItem.likes.length + ' likes'}
            </p>
            <div>
              <ul className='comments'>
                {this.props.feedItem.comments.map(comment =>
                  <li>
                    <p>{comment.user_username}</p>
                    <p>{comment.body}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div>
            {this.likeIcon()}
            {this.commentInput()}
          </div>
        </div>
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
    addLike: (like) => dispatch(addLike(like)),
    cancelLike: (like) => dispatch(cancelLike(like)),
  });
};

const FeedItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedItem);

export default FeedItemContainer;
