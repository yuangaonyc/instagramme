import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { login, receiveErrors } from '../../actions/session_actions';

class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.submitForm = this.submitForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
    this.props.login(this.state);
  }

  renderErrors() {
    return(
      <p className='error'>{this.props.errors[0]}</p>
    );
  }

  render() {
    return(
      <div className="session-body">
        <div className="session-form">
          <h1>Instagramme</h1>

          <form className="form login-form">
            <input
              type='text'
              placeholder='Phone number, username, or email'
              onChange={this.update('username')}/>
            <input
              type='password'
              placeholder='Password'
              onChange={this.update('password')}/>
            <Link className="forgot">Forgot?</Link>
            <button className="session-button" onClick={this.submitForm}>Log In</button>
          </form>

          <div className="or-separate">
            <div/>
            <p>OR</p>
            <div/>
          </div>

          <button className="session-button" onClick={this.props.demoLogin}>Log in with Demo Account</button>

          {this.renderErrors()}
        </div>

        <div className='redirect'>
            <p>Don't have an account?</p>
            <button onClick={this.props.toggleForm}>Sign up</button>
        </div>

        <div className='store'>
          <p>Get the app.</p>
          <div>
            <div className='app-store'/>
            <div className='google-play'/>
          </div>
        </div>
      </div>
    );
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
    login: user => dispatch(login(user))
  };
};

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
