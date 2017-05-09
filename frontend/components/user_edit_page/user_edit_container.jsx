import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../page_components/header_container';
import FooterContainer from '../page_components/footer_container';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.currentUser.name,
      username: this.props.currentUser.username,
      bio: this.props.currentUser.bio,
      email: this.props.currentUser.email
    };
  }

  selectTab(e) {
    document.querySelector('.current-tab').classList.remove('current-tab');
    e.currentTarget.classList.add('current-tab');
    document.querySelector('.edit-profile').classList.add('hidden');
    document.querySelector('.change-password').classList.add('hidden');
    document.querySelector('.account-setting').classList.add('hidden');
    document.querySelector(`.${e.currentTarget.id}`).classList.remove('hidden');
  }

  render () {
    return(
      <div>
        <HeaderContainer/>
        <div className='edit-body'>
          <div className='edit-content'>
            <div className='edit-tabs'>
              <div id='edit-profile' className='current-tab' onClick={this.selectTab}>Edit Profile</div>
              <div id='change-password' onClick={this.selectTab}>Change Password</div>
              <div id='account-setting' onClick={this.selectTab}>Account Setting</div>
            </div>

            <form className='edit-profile edit-form'>
              <div className='edit-header'>
                <div>
                  <img src={this.props.currentUser.profile_image_url}/>
                </div>
                <h1>{this.props.currentUser.username}</h1>
              </div>
              <div>
                <div>
                  <p>Name</p>
                </div>
                <input value={this.state.name}/>
              </div>
              <div>
                <div>
                  <p>Username</p>
                </div>
                <input value={this.state.username}/>
              </div>
              <div>
                <div>
                  <p>Bio</p>
                </div>
                <textarea value={this.state.bio}/>
              </div>
              <div>
                <div>
                  <p>Email</p>
                </div>
                <input value={this.state.email}/>
              </div>
              <div>
                <div>
                </div>
                <button className='session-button'>Submit</button>
              </div>
            </form>

            <form className='change-password edit-form hidden'>
              <div className='edit-header'>
                <div>
                  <img src={this.props.currentUser.profile_image_url}/>
                </div>
                <h1>{this.props.currentUser.username}</h1>
              </div>
              <div>
                <div>
                  <p>Old Password</p>
                </div>
                <input value={this.state.name}/>
              </div>
              <div>
                <div>
                  <p>New Password</p>
                </div>
                <input value={this.state.username}/>
              </div>
              <div>
                <div>
                  <p>New Password, Again</p>
                </div>
                <input value={this.state.username}/>
              </div>
              <div>
                <div>
                </div>
                <button className='session-button'>Submit</button>
              </div>
            </form>

            <form className='account-setting edit-form hidden'>
              <div>
                <div>
                  <p>Private Account</p>
                </div>
                <label className='switch'>
                  <input type='checkbox'/>
                  <div className='slider'/>
                </label>
              </div>
            </form>

          </div>
        </div>
        <FooterContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({

});

const UserEditContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);

export default(UserEditContainer);
