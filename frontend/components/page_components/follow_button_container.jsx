import React from 'react';
import { connect } from 'react-redux';
import { addFollow, cancelFollow, fetchFollows } from '../../actions/follow_actions';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFollows();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.currentUser) {
      return true;
    }
    return false;
  }

  render() {
    if (this.props.userId === this.props.currentUser.id) {
      return (
        <div></div>
      );
    }

    const targetFollow = this.props.follows.find( follow =>
      follow.follower_id === this.props.currentUser.id &&
      follow.following_id === this.props.userId );

    if (targetFollow) {
      if (targetFollow.pending) {
        return (
          <button className='following-button' onClick={(e) => {
              this.props.cancelFollow({ id: targetFollow.id });
              e.stopPropagation();
            }}>
            Requested
          </button>
        );
      } else {
        return(
          <button className='following-button' onClick={(e) => {
              this.props.cancelFollow({ id: targetFollow.id });
              e.stopPropagation();
            }}>
            Following
          </button>
        );
      }
    }
    return(
      <button className='follow-button' onClick={(e) => {
        this.props.addFollow({ following_id: this.props.userId });
        e.stopPropagation();
        }
      }>
        Follow
      </button>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  follows: state.follows,
});

const mapDispatchToProps = dispatch => ({
  addFollow: follow => dispatch(addFollow(follow)),
  cancelFollow: follow => dispatch(cancelFollow(follow)),
  fetchFollows: () => dispatch(fetchFollows()),
});

const FollowButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);

export default FollowButtonContainer;
