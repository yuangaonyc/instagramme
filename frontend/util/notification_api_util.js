export const fetchNotifications = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/notifications'
  });
};

export const deleteNotification = notification => {
  return $.ajax({
    method: 'DELETE',
    url: `api/notifications/${notification.id}`
  });
};

export const updateNotification = (notification, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/notifications/${id}`,
    data: {notification}
  });
};
