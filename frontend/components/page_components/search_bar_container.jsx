import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUsers } from '../../actions/user_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResultIsOpen: false,
    };

    this.searchResults = this.searchResults.bind(this);
    this.update = this.update.bind(this);
    this.displaySearchResult = this.displaySearchResult.bind(this);
    this.hideSearchResult = this.hideSearchResult.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  update(e) {
    this.setState({ searchInput: e.currentTarget.value });
  }

  displaySearchResult() {
    this.setState({ searchResultIsOpen: true });
  }

  hideSearchResult() {
    this.setState({ searchResultIsOpen: false });
  }

  searchResults() {
    const results = this.props.users.filter(
      user => user.username.includes(this.state.searchInput)
    );
    if (results[0]) {
      return results.map( user => {
        return(
          <li key={user.id}
            className='search-result-item'
            onMouseDown={ () => this.props.router.push('/' + user.username) }
             >
            <div>
              <img src={user.profile_image_url}/>
              <div>
                <p>{user.username}</p>
                <p>{user.full_name}</p>
              </div>
            </div>
          </li>
        );
      });
    } else {
      return(
        <li className='search-result-item'>
          <div>
              No results found.
          </div>
        </li>
      );
    }
  }

  triangleClassName() {
    return this.state.searchResultIsOpen ? 'triangle' : 'triangle hidden';
  }

  searchResultClassName() {
    return this.state.searchResultIsOpen ? 'search-result' : 'search-result hidden';
  }

  render() {
    return (
        <div className='search-bar'>
          <div className='magnifying-glass'></div>
          <input type='text'
            placeholder='Search'
            value={this.state.searchInput}
            onChange={this.update}
            onFocus={this.displaySearchResult}
            onBlur={this.hideSearchResult}/>
          <div className={this.triangleClassName()}/>
            <div className={this.searchResultClassName()}>
              <ul>
                {this.searchResults()}
              </ul>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    users: state.users
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchUsers: () => dispatch(fetchUsers()),
  });
};

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));

export default SearchBarContainer;
