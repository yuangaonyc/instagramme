export const fetchFeed = (page) => {
  return $.ajax({
    method: 'GET',
    url: `api/feed/?page=${page}`
  });
};
