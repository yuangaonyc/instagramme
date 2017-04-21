import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className='header'>
        <div className='camera'></div>
        <h1 className='header-logo'>Instagramme</h1>
      </span>
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
