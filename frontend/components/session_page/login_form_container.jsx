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
      <p>{this.props.errors[0]}</p>
    );
  }

  render() {
    return(
      <div>
        <section className="login-section">
          <h1 className="welcome-logo">Instagramme</h1>

          <form className="login-form" onSubmit={this.submitForm}>
            <input
              type='text'
              className="login-input"
              placeholder='Phonr number, username, or email'
              onChange={this.update('username')}/>
            <input
              type='password'
              className="login-input"
              placeholder='Password'
              onChange={this.update('password')}/>
            <Link className="forgot">Forgot?</Link>
            <input type='submit' className="button login-button" value='Log in'/>
          </form>

          <div className="or-separate">
            <div className="horizontal-line"/>
            <div className="or">OR</div>
            <div className="horizontal-line"/>
          </div>

          <button className="facebook-login">Log in with Facebook</button>

          {this.renderErrors()}
        </section>

        <section>
          <article className="redirect-section">
            <p>Don't have an account?</p>
            <button onClick={this.props.toggleForm}>Sign up</button>
          </article>
        </section>
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
