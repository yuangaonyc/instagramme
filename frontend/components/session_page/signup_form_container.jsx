import React from 'react';
import { connect } from 'react-redux';
import { receiveErrors, signup } from '../../actions/session_actions';

class SignupForm extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      email: "",
      full_name: "",
      username: "",
      password: ""
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
        <p>Sorry, something went wrong creating your acount. Please try again soon.</p>
      );
    }
  }

  render() {
    return(
      <div>
        <section className="signup-section">
          <h1>Instagramme</h1>
          <h2 className="signup-message">Sign up to see photos and videos from your friends.</h2>
          <button className="button">Log in with Facebook</button>
          <div className="or-separate">
            <div className="horizontal-line"/>
            <div className="or">OR</div>
            <div className="horizontal-line"/>
          </div>
          <form className="signup-form" onSubmit={this.submitForm}>
            <input type='text' className="signup-input" placeholder='Mobile Number or Email' onChange={this.update('email')}/>
            <input type='text' className="signup-input" placeholder='Full Name' onChange={this.update('full_name')}/>
            <input type='text' className="signup-input" placeholder='Username' onChange={this.update('username')}/>
            <input type='password' className="signup-input" placeholder='Password' onChange={this.update('password')}/>
            <div className="captcha"></div>
            <input type='submit' className="button" value='Sign up'/>
          </form>
          {this.renderErrors()}
          <article>
            <p className="policy-message">By signing up, you agree to our <strong>Terms</strong> & <strong>Privacy Policy</strong>.</p>
          </article>
        </section>

        <section>
          <article className="redirect-section">
            <p>Have an account?</p>
            <button onClick={this.props.toggleForm}>Log in</button>
          </article>
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
