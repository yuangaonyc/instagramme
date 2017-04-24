import React from 'react';
import { connect } from 'react-redux';
import SearchBarContainer from './search_bar_container';
import NavBarContainer from './nav_bar_container';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.returnToIndex = this.returnToIndex.bind(this);
  }

  returnToIndex() {
    this.props.router.push("/");
  }

  render() {
    return (
      <div className='header'>
        <div>
          <div className='camera'></div>
          <div className='vertical-bar'></div>
          <h1 onClick={this.returnToIndex}>Instagramme</h1>
        </div>
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
)(withRouter(Header));

export default HeaderContainer;
