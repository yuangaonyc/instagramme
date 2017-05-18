import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../page_components/header_container';
import UserItemContainer from '../discover_page/user_item_container';
import { fetchFeed, clearFeed } from '../../actions/feed_actions';
import { fetchLikes } from '../../actions/like_actions';
import { fetchComments } from '../../actions/comment_actions';
import FeedItemContainer from './feed_item_container';
import FooterContainer from '../page_components/footer_container';

class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loadingFeed: true,
      loadingLikes: true,
      loadingComments:true
    };

    this.loadFeed = this.loadFeed.bind(this);
  }

  componentDidMount() {
    this.loadFeed().then(() => this.setState({loadingFeed: false}));
    this.props.fetchLikes().then(() => this.setState({loadingLikes: false}));
    this.props.fetchComments().then(() => this.setState({loadingComments: false}));
  }

  componentDidUpdate() {
    $('.loader').bind('inview', (event, visible) => {
      if (visible === true) {
        this.loadFeed();
      }
    });
  }

  componentWillUnmount() {
    this.setState({page:1});
    this.props.clearFeed();
  }

  loadFeed() {
    return this.props.fetchFeed(this.state.page).then(() => {
      this.setState({
        page: this.state.page + 1
      });
    });
  }

  render() {
    if (this.state.loadingFeed || 
      this.state.loadingLikes ||
      this.state.loadingComments) {
      return(
        <div>
          <HeaderContainer/>
          <div className='loader'>
            <div className="small progress"><div>Loading…</div></div>
          </div>
        </div>
      );
    }

    return(
      <div>
        <HeaderContainer/>

        <ul>
          {this.props.feed.map(
            feedItem => <FeedItemContainer feedItem={feedItem} key={feedItem.id}/>
          )}
        </ul>

        {this.props.feed.length === 0 ?
          <div>
            <div className='welcome'>
              <div>
              </div>
              <p>
                Welcome to Instagramme!
              </p>
              <p>
                Follow accounts to see photos and videos in your feed.
              </p>
            </div>

            <div className='discover-body'>
              <div className='discover-content'>
                <div>
                  <p>
                    SUGGESTIONS FOR YOU
                  </p>
                </div>
                <ul>
                  {this.props.users.filter(
                    user => user.id !== this.props.currentUser.id
                  ).map(
                    user => <UserItemContainer user={user} key={user.id}/>
                  )}
                </ul>
              </div>
            </div>
          </div>:
        <div className='loader'>
          <div className="small progress"><div>Loading…</div></div>
        </div>}

        <div className='index-footer'>
          <FooterContainer/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    feed: state.feed,
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFeed: (page) => dispatch(fetchFeed(page)),
    clearFeed: () => dispatch(clearFeed()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchComments: () => dispatch(fetchComments())
  };
};

const IndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);

export default IndexContainer;
