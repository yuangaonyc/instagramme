import React from 'react';
import { connect } from 'react-redux';
import { updateProfileImage } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import HeaderContainer from '../page_components/header_container';
import InteractionMenuContainer from './interaction_menu_container';
import ProfileImageContainer from './profile_image_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.username);
  }

  render() {
    const { username, full_name, bio } = this.props.userShow;
    return(
      <div>
        <HeaderContainer/>
        <div className='user-show-content'>
          <div className='profile-image-div'>
            <ProfileImageContainer/>
          </div>
          <div className='info'>
            <div className='info-header'>
              <h1 className='username'>{username}</h1>
              <InteractionMenuContainer/>
            </div>
            <div>
              <p className='full_name'>{full_name}</p>
              <p className='bio'>{bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userShow: state.userShow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: username => dispatch(fetchUser(username))
  };
};

const UserShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

export default UserShowContainer;
