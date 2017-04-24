import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  this.redirectToSelfPage = this.redirectToSelfPage.bind(this);
  }

  redirectToSelfPage() {
    this.props.router.push(`/${this.props.currentUser.username}`);
  }

  render() {
    return (
      <div>
        <div className='explore'></div>
        <div className='notification'></div>
        <div className='self' onClick={this.redirectToSelfPage}></div>
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
