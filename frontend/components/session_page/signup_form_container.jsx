import React from 'react';
import { connect } from 'react-redux';
import { receiveErrors, signup } from '../../actions/session_actions';

class SignupForm extends React.Component{
  constructor(props) {
    super(props);
    this.state=this.defaultState();
    this.update = this.update.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.bindValidation = this.bindValidation.bind(this);
  }

  defaultState() {
    return({
      emailValidation: false,
      full_nameValidation: false,
      usernameValidation: false,
      passwordValidation: false,
      showErrorMessage: false,
      email: '',
      full_name: '',
      username: '',
      password: ''
    });
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  componentDidMount() {
    this.bindValidation(document.getElementById('email'));
    this.bindValidation(document.getElementById('username'));
    this.bindValidation(document.getElementById('full_name'));
    this.bindValidation(document.getElementById('password'));
  }

  bindValidation(el) {
    let timeout;
    el.onkeyup = (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            this.validateForm();
        }, 800);
    };
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value,
        [field + 'Validation']: true
      });
    };
  }

  validateForm(e) {
    const form = Object.assign({}, this.state);
    form.submit = 'false';
    this.props.signup(form);
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      showErrorMessage: true
    });
    const form = Object.assign({}, this.state);
    form.submit = 'true';
    this.props.signup(form);
}

  renderErrors() {
    if (this.props.errors.length !== 0) {
      return (
        <p className={this.state.showErrorMessage ? 'error' : 'error hidden'}>
          Sorry, something went wrong creating your acount. Please try again soon.
        </p>
      );
    }
  }

  render() {
    return(
      <div className='session-body'>
        <div className='session-form'>
          <h1>Instagramme</h1>
          <h2>Sign up to see photos and videos from your friends.</h2>
          <button className='session-button' onClick={this.props.demoLogin}>Log in with Demo Account</button>

          <div className='or-separate'>
            <div/>
            <p>OR</p>
            <div/>
          </div>

          <form className='form'>
            <div>
              <input id='email' type='text' placeholder='Mobile Number or Email' onChange={this.update('email')}/>
              {this.props.errors.includes('email') ?
                <div className={this.state.emailValidation ? 'cross-red' : 'cross-red hidden'}/> :
                  <div className={this.state.emailValidation ? 'check' : 'check hidden'}/> }
            </div>
            <div>
              <input id='full_name' type='text' placeholder='Full Name' onChange={this.update('full_name')}/>
                {this.props.errors.includes('full_name') ?
                  <div className={this.state.full_nameValidation ? 'cross-red' : 'cross-red hidden'}/> :
                    <div className={this.state.full_nameValidation ? 'check' : 'check hidden'}/> }
            </div>
            <div>
              <input id='username' type='text' placeholder='Username' onChange={this.update('username')}/>
                {this.props.errors.includes('username') ?
                  <div className={this.state.usernameValidation ? 'cross-red' : 'cross-red hidden'}/> :
                    <div className={this.state.usernameValidation ? 'check' : 'check hidden'}/> }
            </div>
            <div>
              <input id='password' type='password' placeholder='Password' onChange={this.update('password')}/>
                {this.props.errors.includes('password') ?
                  <div className={this.state.passwordValidation ? 'cross-red' : 'cross-red hidden'}/> :
                    <div className={this.state.passwordValidation ? 'check' : 'check hidden'}/> }
            </div>
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
