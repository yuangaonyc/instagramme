import {
  RECEIVE_NOTIFICATIONS,
  CLEAR_NOTIFICATIONS,
  REMOVE_NOTIFICATION,
  CHANGE_NOTIFICATION
} from '../actions/notification_actions';

const _nullNotification = [];

const NotificationReducer = (state = _nullNotification, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_NOTIFICATIONS:
      newState = action.notifications;
      return newState;
    case CLEAR_NOTIFICATIONS:
      return _nullNotification;
    case REMOVE_NOTIFICATION:
      newState = Object.assign([], state);
      newState = newState.filter(
        notification => notification.id !== action.notification.id
      );
      return newState;
    case CHANGE_NOTIFICATION:
      newState = Object.assign([], state);
      newState = newState.map(
        notification => {
          if (notification.id === action.notification.id) {
            return action.notification;
          } else {
            return notification;
          }
        }
      );
      return newState;

    default:
      return state;
  }
};

export default NotificationReducer;
