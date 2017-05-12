import React from 'react';
import { connect } from 'react-redux';
import { updateFollow, cancelFollow } from '../../actions/follow_actions';
import { updateNotification, deleteNotification } from '../../actions/notification_actions';

class ApproveButton extends React.Component {
  constructor(props) {
    super(props);
    this.approve = this.approve.bind(this);
    this.hide = this.hide.bind(this);
  }

  approve(e) {
    this.props.updateNotification({ category: 'follow' }, this.props.notificationId).then(
      () => this.props.updateFollow({ pending: false }, this.props.followId)
    );
    e.stopPropagation();
  }

  hide(e) {
    this.props.deleteNotification({ id: this.props.notificationId }).then(
      () => this.props.cancelFollow({ id: this.props.followId })
    );
    e.stopPropagation();
  }

  render() {
    return(
      <div>
        <button className='follow-button approve-button' onClick={this.approve}>
          Approve</button>
        <button className='following-button hide-button' onClick={this.hide}>
          Hide</button>
      </div>
    );
  }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateFollow: (follow, id) => dispatch(updateFollow(follow, id)),
  updateNotification: (notification, id) => dispatch(updateNotification(notification, id)),
  deleteNotification: notification => dispatch(deleteNotification(notification)),
  cancelFollow: follow => dispatch(cancelFollow(follow))
});

const ApproveButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApproveButton);

export default ApproveButtonContainer;
