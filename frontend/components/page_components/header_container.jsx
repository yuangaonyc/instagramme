import React from 'react';
import { connect } from 'react-redux';
import SearchBarContainer from './search_bar_container';
import NavBarContainer from './nav_bar_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='header'>
        <div className='camera'></div>
        <div className='vertical-bar'></div>
        <h1 className='header-logo'>Instagramme</h1>
        <SearchBarContainer/>
        <NavBarContainer/>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return(
    {}
  );
};

const mapDispatchToProps = () => {
  return(
    {}
  );
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
