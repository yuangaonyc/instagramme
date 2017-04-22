import React from 'react';
import { connect } from 'react-redux';
import { updateProfileImage } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import HeaderContainer from '../page_components/header_container';
import InteractionMenuContainer from './interaction_menu_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.username);
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append('user[profile_image]', file);
    const test = [formData, this.props.userShow.id];
    this.props.updateProfileImage(formData, this.props.userShow.id);
  }

  render() {
    const { username, full_name, bio, profile_image_url } = this.props.userShow;
    return(
      <div>
        <HeaderContainer/>
        <input type='file' onChange={this.updateFile}/>
        <h1 className='username'>{username}</h1>
        <InteractionMenuContainer/>
        <div>
          <p className='full_name'>{full_name}</p>
          <p className='bio'>{bio}</p>
        </div>
        <img src={profile_image_url} className='profile-image'/>
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
    updateProfileImage: (formData, id) => dispatch(updateProfileImage(formData, id)),
    fetchUser: username => dispatch(fetchUser(username))
  };
};

const UserShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);

export default UserShowContainer;
