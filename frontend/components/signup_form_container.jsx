import React from 'react';
import { connect } from 'react-redux';
import { receiveErrors, signup } from '../actions/session_actions';

class SignupForm extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      email: "",
      fullname: "",
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
        <section>
          <h1>Instagramme</h1>
          <h2>Sign up to see photos and videos from your friends.</h2>
          <button>Log in with Facebook</button>
          <div>
            <div></div>
            <div>OR</div>
            <div></div>
          </div>
          <form onSubmit={this.submitForm}>
            <input type='text' placeholder='Mobile Number or Email' onChange={this.update('email')}/>
            <input type='text' placeholder='Full Name' onChange={this.update('fullname')}/>
            <input type='text' placeholder='Username' onChange={this.update('username')}/>
            <input type='password' placeholder='Password' onChange={this.update('password')}/>
            <input type='submit' value='Sign up'/>
          </form>
          {this.renderErrors()}
          <article>
            <p>By signing up, you agree to our</p>
            <p>Term & Privacy Policy.</p>
          </article>
        </section>
        <section>
          <article>
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
