import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../page_components/header_container';
import { fetchUsers } from '../../actions/user_actions';
import { fetchFollows } from '../../actions/follow_actions';
import UserItemContainer from './user_item_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingUsers: true,
      loadingFollows: true
    };
  }

  componentDidMount() {
    this.props.fetchUsers().then(() => this.setState({loadingUsers: false}));
    this.props.fetchFollows().then(() => this.setState({loadingFollows: false}));
  }

  render() {
    if (this.state.loadingUser ||
      this.state.loadingFollows) {
      return(
        <div>
          <HeaderContainer/>
          <div className='loader'>
            <div className="small progress"><div>Loading…</div></div>
          </div>
        </div>
      );
    }

    return(
      <div>
        <HeaderContainer/>
        <div className='discover-body'>
          <div className='discover-content'>
            <div>
              <p>
                DISCOVER PEOPLE
              </p>
            </div>
            <ul>
              {this.props.users.filter(
                user => user.id !== this.props.currentUser.id
              ).map(
                user => <UserItemContainer user={user} key={user.id}/>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    users: state.users,
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFollows: () => dispatch(fetchFollows())
  });
};

const DiscoverContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);

export default DiscoverContainer;
