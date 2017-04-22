import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-bar'>
          <div className='magnifying-glass'></div>
          <input type='text' className='search-bar-input' placeholder="Search"></input>
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

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;
