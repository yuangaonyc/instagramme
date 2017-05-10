import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../page_components/header_container';
import FooterContainer from '../page_components/footer_container';
import { updateProfile } from '../../actions/session_actions';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: this.props.currentUser.full_name,
      username: this.props.currentUser.username,
      bio: this.props.currentUser.bio,
      email: this.props.currentUser.email,
      statusMessage: '',
      old_password: '',
      new_password: '',
      new_password_again: '',
    };

    this.resetState = this.resetState.bind(this);
    this.update = this.update.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.selectTab = this.selectTab.bind(this);
  }

  resetState() {
    this.setState({
      full_name: this.props.currentUser.full_name,
      username: this.props.currentUser.username,
      bio: this.props.currentUser.bio,
      email: this.props.currentUser.email,
      statusMessage: '',
      old_password: '',
      new_password: '',
      new_password_again: '',
    });
  }

  update(attr) {
    return (e) => {
      this.setState({[attr]: e.currentTarget.value});
    };
  }

  submitForm(e) {
    e.preventDefault();
    const msg = e.currentTarget.id === 'editProfileSubmitButton' ? 'Profile Saved!' : 'Password Changed!';
    this.props.updateProfile(this.state, this.props.currentUser.id).then(
      () => {
        document.querySelectorAll('.status-message').forEach(
          p => p.style.color = '#63916c'
        );
        this.setState({ statusMessage: msg });
      },
      () => {
        document.querySelectorAll('.status-message').forEach(
          p => p.style.color = '#ac676a'
        );
        this.setState({ statusMessage: `${this.props.errors[0]}` });
      }
    );
  }

  selectTab(e) {
    document.querySelector('.current-tab').classList.remove('current-tab');
    e.currentTarget.classList.add('current-tab');
    document.querySelector('.edit-profile').classList.add('hidden');
    document.querySelector('.change-password').classList.add('hidden');
    document.querySelector('.account-setting').classList.add('hidden');
    this.resetState();
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
                <input value={this.state.full_name} onChange={this.update('full_name')}/>
              </div>
              <div>
                <div>
                  <p>Username</p>
                </div>
                <input value={this.state.username} onChange={this.update('username')}/>
              </div>
              <div>
                <div>
                  <p>Bio</p>
                </div>
                <textarea value={this.state.bio} onChange={this.update('bio')}/>
              </div>
              <div>
                <div>
                  <p>Email</p>
                </div>
                <input value={this.state.email} onChange={this.update('email')}/>
              </div>
              <div>
                <div>
                </div>
                <button id='editProfileSubmitButton' className='session-button' onClick={this.submitForm}>Submit</button>
              </div>
              <div>
                <div>
                </div>
                <p className='status-message'>{this.state.statusMessage}</p>
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
                <input value={this.state.old_password} onChange={this.update('old_password')}/>
              </div>
              <div>
                <div>
                  <p>New Password</p>
                </div>
                <input value={this.state.new_password} onChange={this.update('new_password')}/>
              </div>
              <div>
                <div>
                  <p>New Password,</p>
                  <p>Again</p>
                </div>
                <input value={this.state.new_password_again} onChange={this.update('new_password_again')}/>
              </div>
              <div>
                <div>
                </div>
                <button
                  onClick={this.submitForm}
                  className={
                    this.state.old_password.length < 6 ||
                    this.state.new_password.length < 6 ||
                    this.state.new_password !== this.state.new_password_again ?
                    'session-button disabled' :
                    'session-button'
                  }
                  disabled={
                    this.state.old_password.length < 6 ||
                    this.state.new_password.length < 6 ||
                    this.state.new_password !== this.state.new_password_again
                  }>Submit</button>
              </div>
              <div>
                <div>
                </div>
                <p className='status-message'>{this.state.statusMessage}</p>
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
  errors: state.session.errors,
});

const mapDispatchToProps = dispatch => ({
  updateProfile: (user, id) => dispatch(updateProfile(user, id)),
});

const UserEditContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);

export default(UserEditContainer);
