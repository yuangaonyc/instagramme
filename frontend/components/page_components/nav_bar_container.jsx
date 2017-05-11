import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  this.redirectToSelfPage = this.redirectToSelfPage.bind(this);
  this.redirectToDiscover = this.redirectToDiscover.bind(this);
  }

  redirectToSelfPage() {
    this.props.router.push(`/${this.props.currentUser.username}`);
  }

  redirectToDiscover() {
    this.props.router.push('/discover');
  }

  render() {
    return (
      <div>
        <div className='discover' onClick={ this.redirectToDiscover }></div>
        <div className='heart-black'></div>
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
