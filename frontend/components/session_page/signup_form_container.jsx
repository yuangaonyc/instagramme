import React from 'react';
import { connect } from 'react-redux';
import { receiveErrors, signup } from '../../actions/session_actions';

class SignupForm extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      email: '',
      full_name: '',
      username: '',
      password: ''
    };

    this.update = this.update.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  update(field) {
    return e => {
      this.setState({
        [field]:e.target.value
      });
    };
  }

  submitForm(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  renderErrors() {
    if (this.props.errors.length !== 0) {
      return (
        <p className='error'>Sorry, something went wrong creating your acount. Please try again soon.</p>
      );
    }
  }

  render() {
    return(
      <div className='session-body'>
        <div className='session-form'>
          <h1>Instagramme</h1>
          <h2>Sign up to see photos and videos from your friends.</h2>
          <button className='session-button'>Log in with Demo Account</button>

          <div className='or-separate'>
            <div/>
            <p>OR</p>
            <div/>
          </div>

          <form className='form'>
            <input type='text' placeholder='Mobile Number or Email' onChange={this.update('email')}/>
            <input type='text' placeholder='Full Name' onChange={this.update('full_name')}/>
            <input type='text' placeholder='Username' onChange={this.update('username')}/>
            <input type='password' placeholder='Password' onChange={this.update('password')}/>
            <div className='captcha'></div>
          </form>
          <button className='session-button' onClick={this.submitForm}>Sign Up</button>

          {this.renderErrors()}

          <div className='policy'>
            <p>By signing up, you agree to our</p>
            <strong>&nbsp;Terms&nbsp;</strong>
            <div>&</div>
            <strong>&nbsp;Privacy Policy</strong>
            <div>.</div>
          </div>
        </div>

        <div className = 'redirect'>
            <p>Have an account?</p>
            <button onClick={this.props.toggleForm}>Log in</button>
        </div>

        <section className = 'store'>
          <p>Get the app.</p>
          <div>
            <div className='app-store'/>
            <div className='google-play'/>
          </div>
        </section>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    errors: state.session.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    signup: user => dispatch(signup(user))
  };
};

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;
