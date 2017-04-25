export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user}
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });
};

export const updateProfileImage = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    contentType: false,
    processData: false,
    url: `api/users/${id}`,
    data: formData
  });
};
