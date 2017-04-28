import React from 'react';
import { connect } from 'react-redux';
import timeSelector from '../../util/time_selector';
import { addLike, cancelLike } from '../../actions/like_actions';
import { postComment } from '../../actions/comment_actions';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      image_id: this.props.feedItem.id
    };
    this.likeIcon = this.likeIcon.bind(this);
    this.update = this.update.bind(this);
    this.commentInput = this.commentInput.bind(this);
    this.likeCount = this.likeCount.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  componentDidMount() {
    const comments = document.querySelector('#c' + this.props.feedItem.id);
    comments.scrollTop = comments.scrollHeight;
  }

  componentDidUpdate() {
    const comments = document.querySelector('#c' + this.props.feedItem.id);
    comments.scrollTop = comments.scrollHeight;
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
      return likes.length +  'like';
    } else {
      return likes.length + ' likes';
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
              {this.likeCount()}
            </p>
            <div>
              <ul className='comments' id={'c'+this.props.feedItem.id}>
                {this.props.comments.filter(
                  comment => comment.image_id === this.props.feedItem.id
                ).map(comment =>
                  <li key={comment.id}>
                    <p>{comment.user_username}</p>
                    <p>{comment.body}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className='interactions'>
            {this.likeIcon()}
            {this.commentInput()}
            <div className='white-dots'></div>
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
    postComment: (comment) => dispatch(postComment(comment))
  });
};

const FeedItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedItem);

export default FeedItemContainer;
