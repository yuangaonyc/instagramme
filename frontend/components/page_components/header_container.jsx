import React from 'react';
import { connect } from 'react-redux';
import SearchBarContainer from './search_bar_container';
import NavBarContainer from './nav_bar_container';
import { withRouter } from 'react-router';
import { postImage } from '../../actions/image_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchFeed } from '../../actions/feed_actions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.returnToIndex = this.returnToIndex.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  returnToIndex() {
    this.props.router.push("/");
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append('image[image]', file);
    this.props.postImage(formData).then(
      () => this.props.fetchUser(this.props.currentUser.username).then(
        () => this.props.fetchFeed(1)
      ).then(
        () => this.props.router.push('/' + this.props.currentUser.username)
      )
    );
  }

  triggerUpdateFile(e) {
    $('#upload-image').click();
  }

  render() {
    return (
      <div className='header'>
        <div>
          <div className='camera' onClick={this.triggerUpdateFile}></div>
          <div className='vertical-bar'></div>
          <h1 onClick={this.returnToIndex}>Instagramme</h1>
          <input id='upload-image' type='file' onChange={this.updateFile}/>
        </div>
        <SearchBarContainer/>
        <NavBarContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    currentUser : state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return({
    postImage: (formData) => dispatch(postImage(formData)),
    fetchUser: (username) => dispatch(fetchUser(username)),
    fetchFeed: (page) => dispatch(fetchFeed(page)),
  });
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));

export default HeaderContainer;
