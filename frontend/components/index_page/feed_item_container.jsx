import React from 'react';
import { connect } from 'react-redux';
import timeSelector from '../../util/time_selector';
import { addLike, cancelLike } from '../../actions/like_actions';
import { postComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router';
import UserListContainer from '../page_components/user_list_container';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      image_id: this.props.feedItem.id,
    };
    this.likeIcon = this.likeIcon.bind(this);
    this.update = this.update.bind(this);
    this.commentInput = this.commentInput.bind(this);
    this.likeCount = this.likeCount.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.openLikeModal = this.openLikeModal.bind(this);
    this.closeLikeModal = this.closeLikeModal.bind(this);
  }

  componentDidMount() {
    const comments = document.querySelector('#c' + this.props.feedItem.id);
    comments.scrollTop = comments.scrollHeight;
  }

  componentDidUpdate() {
    const comments = document.querySelector('#c' + this.props.feedItem.id);
    comments.scrollTop = comments.scrollHeight;
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
                    <p onClick={ () => this.props.router.push('/' + comment.user_username)}>
                      {comment.user_username}
                    </p>
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
)(withRouter(FeedItem));

export default FeedItemContainer;
