import React from 'react';
import { connect } from 'react-redux';

class SignupForm extends React.Component{
  render() {
    return <h1>Signup Form</h1>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;
