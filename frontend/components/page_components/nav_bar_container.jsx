import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ClickOutHandler from 'react-onclickout';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationIsOpen: false,
    };

  this.redirectToSelfPage = this.redirectToSelfPage.bind(this);
  this.redirectToDiscover = this.redirectToDiscover.bind(this);
  this.displayNotification = this.displayNotification.bind(this);
  this.hideNotificaton = this.hideNotificaton.bind(this);
  }

  redirectToSelfPage() {
    this.props.router.push(`/${this.props.currentUser.username}`);
  }

  redirectToDiscover() {
    this.props.router.push('/discover');
  }

  triangleClassName() {
    return this.state.notificationIsOpen ? 'triangle' : 'triangle hidden';
  }

  notificationClassName() {
    return this.state.notificationIsOpen ? 'notification' : 'notification hidden';
  }

  displayNotification() {
    this.setState({notificationIsOpen: true});
  }

  hideNotificaton(e) {
    if (e.target.className === 'heart-black') {
      return;
    }
    this.setState({notificationIsOpen: false});
  }

  render() {
    return (
      <div className='nav'>
        <div className='discover' onClick={ this.redirectToDiscover }></div>
        <div className='heart-black' onClick={ this.displayNotification }/>
        <div className='self' onClick={ this.redirectToSelfPage }></div>
        <ClickOutHandler onClickOut={ this.hideNotificaton }>
          <div className={this.triangleClassName()}/>
          <div className={this.notificationClassName()}>
            <div className='no-notification'>
              <p>Recent Activity on your posts</p>
              <p>When someone comments on or likes ones of your photos or videos, you'll see it here.</p>
            </div>
          </div>
        </ClickOutHandler>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return(
    {currentUser: state.session.currentUser}
  );
};

const mapDispatchToProps = () => {
  return(
    {}
  );
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));

export default NavBarContainer;
