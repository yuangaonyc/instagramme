import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
    return (
      <ul>
        {this.props.errors.map((error,i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <section>
          <h1>Instagramme</h1>
          <form onSubmit={this.submitForm}>
            <input type='text' placeholder='Username, or email' onChange={this.update('username')}/>
            <input type='password' placeholder='Password' onChange={this.update('password')}/>
            <Link>Forgot?</Link>
            <input type='submit' value='Log in'/>
          </form>
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
  return {};
};

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
