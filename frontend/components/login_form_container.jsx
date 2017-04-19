import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { login, receiveErrors } from '../actions/session_actions';

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
        <section>
          <h1>Instagramme</h1>

          <form onSubmit={this.submitForm}>
            <input
              type='text'
              placeholder='Phonr number, username, or email'
              onChange={this.update('username')}/>
            <input
              type='password'
              placeholder='Password'
              onChange={this.update('password')}/>
            <Link>Forgot?</Link>
            <input type='submit' value='Log in'/>
          </form>

          <div>
            <div></div>
            <div>OR</div>
            <div></div>
          </div>

          <button>Log in with Facebook</button>

          {this.renderErrors()}
        </section>

        <section>
          <article>
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
