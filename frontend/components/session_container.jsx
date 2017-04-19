import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'login'
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    if (this.state.formType === 'login') {
      this.setState({formType:'singup'});
    } else {
      this.setState({formType:'login'});
    }
    console.log(this.state.formType);
  }

  render() {
    return(
      <span>
      PICTURE
        <span>
          {this.state.formType === 'login' ? <LoginFormContainer login={this.props.login} toggleForm={this.toggleForm}/> : <SignupFormContainer/>}
          <p>Get the app.</p>
          picture picutre
        </span>
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
  };
};

const SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);

export default SessionContainer;
