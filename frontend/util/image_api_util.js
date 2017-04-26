export const postImage = (formData) => {
  return $.ajax({
    method: 'POST',
    contentType: false,
    processData: false,
    url: 'api/images',
    data: formData
  });
};

export const fetchImage = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/images/${id}`
  });
};

export const postComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: {comment}
  });
};