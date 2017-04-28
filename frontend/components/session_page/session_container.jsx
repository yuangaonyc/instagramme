import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { login } from '../../actions/session_actions';
import FooterContainer from '../page_components/footer_container';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'signup'
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  toggleForm() {
    if (this.state.formType === 'login') {
      this.setState({formType:'singup'});
    } else {
      this.setState({formType:'login'});
    }
  }

  demoLogin() {
    this.props.login({
      username: 'world_famous_doge',
      password: 'password',
    });
  }

  render() {
    const LoginForm = () => {
      return(
        <LoginFormContainer
          toggleForm={this.toggleForm}
          demoLogin={this.demoLogin}/>
      );
    };

    const SignupForm = () => {
      return(
        <SignupFormContainer
          toggleForm={this.toggleForm}
          demoLogin={this.demoLogin}/>
      );
    };

    return(
      <div>
        <div className='session'>
          <div className='session-image'/>
          <div>
            {this.state.formType === 'login' ? LoginForm() : SignupForm() }
          </div>
        </div>
        <FooterContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

const SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);

export default SessionContainer;
