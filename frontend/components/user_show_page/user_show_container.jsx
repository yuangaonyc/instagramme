import React from 'react';
import { connect } from 'react-redux';
import { updateProfileImage } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import HeaderContainer from '../page_components/header_container';

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
    formData.append("user[profile_image]", file);
    const test = [formData, this.props.userShow.id];
    this.props.updateProfileImage(formData, this.props.userShow.id);
  }

  render() {
    return(
      <div>
        <HeaderContainer/>
        <input type="file" onChange={this.updateFile}/>
        <h1>my name is {this.props.userShow.full_name}</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={this.props.userShow.profile_image_url}/>
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
