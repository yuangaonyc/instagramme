import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { login, receiveErrors } from '../../actions/session_actions';

class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggingIn: false
    };

    this.submitForm = this.submitForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLoggingIn = this.demoLoggingIn.bind(this);
    this.loggingIn = this.loggingIn.bind(this);
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
    this.setState({loggingIn: true});
    e.preventDefault();
    this.props.login(this.state).then(undefined,
      () => this.setState({loggingIn: false}));
  }

  renderErrors() {
    return(
      <p className='error'>{this.props.errors[0]}</p>
    );
  }

  demoLoggingIn() {
    if (this.props.demoLoggingIn) {
      return(
        <div className='session-overlay session-button'>
          <div className='loader'>
            <div className="small progress button"><div>Loading…</div></div>
          </div>
        </div>
      );
    }
  }

  loggingIn() {
    if (this.state.loggingIn) {
      return(
        <div className='session-overlay session-button'>
          <div className='loader'>
            <div className="small progress button"><div>Loading…</div></div>
          </div>
        </div>
      );
    }
  }


  render() {
    return(
      <div className="session-body">
        <div className="session-form">
          <h1>Instagramme</h1>

          <form className="form login-form">
            <div>
              <input
                type='text'
                placeholder='Username, or email'
                onChange={this.update('username')}/>
            </div>
            <div>
              <input
                type='password'
                placeholder='Password'
                onChange={this.update('password')}/>
            </div>
            <button className="session-button log-in" onClick={this.submitForm}>Log In
              {this.loggingIn()}
            </button>
          </form>

          <div className="or-separate">
            <div/>
            <p>OR</p>
            <div/>
          </div>

          <button className="session-button demo-log-in" onClick={this.props.demoLogin}>Log in with Demo Account
            {this.demoLoggingIn()}
          </button>

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
