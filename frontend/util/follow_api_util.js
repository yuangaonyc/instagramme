export const fetchFollows = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/follows',
  });
};

export const addFollow = follow => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: {follow}
  });
};

export const cancelFollow = follow => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${follow.id}`
  });
};

export const updateFollow = (follow, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/follows/${id}`,
    data: {follow}
  });
};
