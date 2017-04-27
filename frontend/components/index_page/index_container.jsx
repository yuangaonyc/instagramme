import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../page_components/header_container';
import { fetchFeed } from '../../actions/feed_actions';
import { fetchLikes } from '../../actions/like_actions';
import { fetchComments } from '../../actions/comment_actions';
import FeedItemContainer from './feed_item_container';

class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };

    this.loadFeed = this.loadFeed.bind(this);
  }

  componentDidMount() {
    this.loadFeed();
    this.props.fetchLikes();
    this.props.fetchComments();
  }

  loadFeed() {
    this.props.fetchFeed(this.state.page);
    this.setState({
      page: this.state.page + 1
    });
  }

  render() {
    return(
      <div>
        <HeaderContainer/>
        <ul>
          {this.props.feed.map(
            feedItem => <FeedItemContainer feedItem={feedItem} key={feedItem.id}/>
          )}
        </ul>
        <button onClick={this.loadFeed}>Load Feed</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    feed: state.feed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFeed: (page) => dispatch(fetchFeed(page)),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchComments: () => dispatch(fetchComments())
  };
};

const IndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);

export default IndexContainer;
