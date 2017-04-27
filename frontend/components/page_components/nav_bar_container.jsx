import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  this.redirectToSelfPage = this.redirectToSelfPage.bind(this);
  this.redirectToExplore = this.redirectToExplore.bind(this);
  }

  redirectToSelfPage() {
    this.props.router.push(`/${this.props.currentUser.username}`);
  }

  redirectToExplore() {
    this.props.router.push('/explore');
  }

  render() {
    return (
      <div>
        <div className='explore' onClick={ this.redirectToExplore }></div>
        <div className='heart'></div>
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
