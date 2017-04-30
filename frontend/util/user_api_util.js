export const fetchUser = (username) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${username}`
  });
};

export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: 'api/users'
  });
};
