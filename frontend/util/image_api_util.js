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

export const updateImage = (image) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/images/${image.id}`,
    data: {image}
  });
};

export const deleteImage = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/images/${id}`
  });
};
