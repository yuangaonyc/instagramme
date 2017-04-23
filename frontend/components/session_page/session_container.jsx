import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'signup'
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    if (this.state.formType === 'login') {
      this.setState({formType:'singup'});
    } else {
      this.setState({formType:'login'});
    }
  }

  render() {
    const LoginForm = () => {
      return(
        <LoginFormContainer
          toggleForm={this.toggleForm}/>
      );
    };

    const SignupForm = () => {
      return(
        <SignupFormContainer
          toggleForm={this.toggleForm}/>
      );
    };

    return(
      <span className="root-span">
      <div className="login-image"/>
        <div>
          {this.state.formType === 'login' ? LoginForm() : SignupForm() }
        </div>
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  };
};

const SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);

export default SessionContainer;
