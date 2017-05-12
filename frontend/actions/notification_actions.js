import * as notificationAPIUtil from '../util/notification_api_util';

export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';
export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const CHANGE_NOTIFICATION = 'CHANGE_NOTIFICATION';

export const fetchNotifications = () => dispatch => {
  return notificationAPIUtil.fetchNotifications().then(
    notifications => dispatch(receiveNotifications(notifications))
  );
};

export const deleteNotification = notification => dispatch => {
  return notificationAPIUtil.deleteNotification(notification).then(
    notification => dispatch(removeNotificaton(notification))
  );
};

export const updateNotification = (notification, id) => dispatch => {
  return notificationAPIUtil.updateNotification(notification, id).then(
    notification => dispatch(changeNotification(notification))
  );
};

const receiveNotifications = notifications => {
  return {
    type: RECEIVE_NOTIFICATIONS,
    notifications
  };
};

export const clearNotifications = () => {
  return {
    type: CLEAR_NOTIFICATIONS
  };
};

const removeNotificaton = notification => {
  return {
    type: REMOVE_NOTIFICATION,
    notification
  };
};

const changeNotification = notification => {
  return {
    type: CHANGE_NOTIFICATION,
    notification
  };
};
