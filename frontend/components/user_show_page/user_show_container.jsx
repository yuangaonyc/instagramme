import React from 'react';
import { connect } from 'react-redux';
import { updateProfileImage } from '../../actions/session_actions';
import { fetchUser, clearUser } from '../../actions/user_actions';
import { fetchLikes } from '../../actions/like_actions';
import { fetchFollows } from '../../actions/follow_actions';
import { fetchComments } from '../../actions/comment_actions';
import { clearImage } from '../../actions/image_actions';
import HeaderContainer from '../page_components/header_container';
import InteractionMenuContainer from './interaction_menu_container';
import ProfileImageContainer from './profile_image_container';
import UserShowImageContainer from './user_show_image_container';
import FooterContainer from '../page_components/footer_container';
import Modal from 'react-modal';
import UserListContainer from '../page_components/user_list_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followingModalIsOpen: false,
      followersModalIsOpen: false,
      loadingUser: true,
      loadingLikes: true,
      loadingFollows: true,
      loadingComments: true
    };

    this.openFollowersModal = this.openFollowersModal.bind(this);
    this.openFollowingModal = this.openFollowingModal.bind(this);
    this.closeFollowersModal = this.closeFollowersModal.bind(this);
    this.closeFollowingModal = this.closeFollowingModal.bind(this);
    this.shouldHideContents = this.shouldHideContents.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.username).then( () => this.setState({loadingUser: false}));
    this.props.fetchLikes().then( () => this.setState({loadingLikes: false}));
    this.props.fetchFollows().then( () => this.setState({loadingFollows: false}));
    this.props.fetchComments().then( () => this.setState({loadingComments: false}));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.username !== this.props.params.username) {
      this.closeFollowingModal();
      this.closeFollowersModal();
      this.props.fetchUser(nextProps.params.username);
    }
  }

  componentWillUnmount() {
    this.props.clearUser();
    this.props.clearImage();
  }

  componentWillUpdate(nextProps) {
    const followings = nextProps.follows.filter( el => {
      return el.follower_id === this.props.userShow.id &&
        el.pending === false;
    });
    if (followings.length === 0 && this.state.followingModalIsOpen) {
      this.closeFollowingModal();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.loggedOut) {
      return false;
    }
    return true;
  }

  openFollowingModal() {
    this.setState({ followingModalIsOpen: true });
  }

  openFollowersModal() {
    this.setState({ followersModalIsOpen: true });
  }

  closeFollowingModal() {
    this.setState({ followingModalIsOpen: false });
  }

  closeFollowersModal() {
    this.setState({ followersModalIsOpen: false });
  }

  posts() {
    const postNum = this.props.userShow.images.length;
    return <p>{postNum + ' posts'}</p>;
  }

  shouldHideContents() {
    const targetFollow = this.props.follows.find( follow =>
      follow.follower_id === this.props.currentUser.id &&
      follow.following_id === this.props.userShow.id );

    if (this.props.userShow.id === this.props.currentUser.id) {
      return false;
    }
    if (targetFollow && !targetFollow.pending) {
      return false;
    }
    if (!this.props.userShow.private_account) {
      return false;
    }
    return true;
  }

  followers() {
    const followers = this.props.follows.filter( el => {
      return el.following_id === this.props.userShow.id &&
      el.follower_id !== this.props.userShow.id &&
      el.pending === false;
    });

    if (followers.length > 0) {
      return <p onClick={
          this.shouldHideContents() ?
          '' :
          this.openFollowersModal}
          className={
          this.shouldHideContents() ?
          'disable-pointer' :
          ''}>
        {followers.length + ' followers'}
      </p>;
    } else {
      return <p className='disable-pointer'>
        {0 + ' followers'}
      </p>;
    }
  }

  following() {
    const followings = this.props.follows.filter( el => {
      return el.follower_id === this.props.userShow.id &&
      el.following_id !== this.props.userShow.id &&
      el.pending === false;
    });

    if (followings.length > 0) {
      return <p onClick={
          this.shouldHideContents() ?
          '' :
          this.openFollowingModal}
          className={
          this.shouldHideContents() ?
          'disable-pointer' :
          ''}>
        {followings.length + ' following'}
      </p>;
    } else {
      return <p className='disable-pointer'>
        {0 + ' following'}
      </p>;
    }
  }

  render() {
    if (this.state.loadingUser ||
      this.state.loadingLikes ||
      this.state.loadingComments ||
      this.state.loadingFollows) {
      return(
        <div>
          <HeaderContainer/>
          <div className='loader'>
            <div className="small progress"><div>Loading…</div></div>
          </div>
        </div>
      );
    }

    const { username, full_name, bio, images } = this.props.userShow;
    if (!this.props.userShow.username) {
      return <div></div>;
    }
    return(
      <div>
        <HeaderContainer/>
        <div className='user-body'>

          <div className='user-info'>
            <ProfileImageContainer/>
            <div className='info'>

              <div>
                <h1 className='username'>{username}</h1>
                <InteractionMenuContainer
                  userShow={this.props.userShow}/>
              </div>

              <div className='user-stats'>
                {this.posts()}
                {this.followers()}
                {this.following()}
              </div>

              <div>
                <p className='full_name'>{full_name}</p>
                <p className='bio'>{bio}</p>
              </div>

            </div>
          </div>

            {this.shouldHideContents() ?
            <div className='private-account'>
              <p>
                This Account is Private
              </p>
              <p>
                Follow to see their photos and
              </p>
              <p>
                videos.
              </p>
            </div> :
            <UserShowImageContainer
              userShowImages={images}
              imageShow={this.props.imageShow}
              likes={this.props.likes}
              comments={this.props.comments}/>}

        </div>
        <FooterContainer/>

        <Modal
          isOpen={this.state.followersModalIsOpen}
          contentLabel='followers-modal'
          className='user-list'
          onRequestClose={this.closeFollowersModal}>
          <UserListContainer
            header='Followers'
            users={
              this.props.follows.filter( el => {
                return el.following_id === this.props.userShow.id &&
                  el.follower_id !== this.props.userShow.id &&
                  el.pending === false;
              }).map( el => {
                return {
                  id: el.follower_id,
                  username: el.follower_username,
                  full_name: el.follower_full_name,
                  profile_image_url: el.follower_profile_image_url
                };
              })
            }
          />
        </Modal>

        <Modal
          isOpen={this.state.followingModalIsOpen}
          contentLabel='following-modal'
          className='user-list'
          onRequestClose={this.closeFollowingModal}>
          <UserListContainer
            header='Following'
            users={
              this.props.follows.filter( el => {
                return el.follower_id === this.props.userShow.id &&
                  el.following_id !== this.props.userShow.id &&
                  el.pending === false;
              }).map( el => {
                return {
                  id: el.following_id,
                  username: el.following_username,
                  full_name: el.following_full_name,
                  profile_image_url: el.following_profile_image_url
                };
              })
            }
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedOut: !state.session.currentUser,
    currentUser: state.session.currentUser,
    userShow: state.userShow,
    imageShow: state.imageShow,
    likes: state.likes,
    follows: state.follows,
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: username => dispatch(fetchUser(username)),
    clearUser: () => dispatch(clearUser()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchFollows: () => dispatch(fetchFollows()),
    fetchComments: () => dispatch(fetchComments()),
    clearImage: () => dispatch(clearImage()),
  };
};

const UserShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

export default UserShowContainer;
