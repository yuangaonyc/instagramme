export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const CHANGE_IMAGE = 'CHANGE_IMAGE';
export const CLEAR_IMAGE = 'CLEAR_IMAGE';
import * as imageAPIUtil from '../util/image_api_util';

export const postImage = (formData) => dispatch => {
  return imageAPIUtil.postImage(formData).then(
    imageShow => dispatch(receiveImage(imageShow))
  );
};

export const fetchImage = (id) => dispatch => {
  return imageAPIUtil.fetchImage(id).then(
    imageShow => dispatch(receiveImage(imageShow))
  );
};

export const deleteImage = (id) => dispatch => {
  return imageAPIUtil.deleteImage(id).then(
    imageShow => dispatch(removeImage(imageShow))
  );
};

export const updateImage = (image) => dispatch => {
  return imageAPIUtil.updateImage(image).then(
    imageShow => dispatch(changeImage(imageShow))
  );
};

export const receiveImage = (imageShow) => {
  return {
    type: RECEIVE_IMAGE,
    imageShow
  };
};

export const clearImage = () => {
  return {
    type: CLEAR_IMAGE,
  };
};

export const removeImage = (imageShow) => {
  return {
    type: REMOVE_IMAGE,
    imageShow
  };
};

export const changeImage = (imageShow) => {
  return {
    type: CHANGE_IMAGE,
    imageShow
  };
};
