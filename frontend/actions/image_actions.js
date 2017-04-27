export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
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

export const receiveImage = (imageShow) => {
  return {
    type: RECEIVE_IMAGE,
    imageShow
  };
};
