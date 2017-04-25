export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
import * as ImageAPIUtil from '../util/image_api_util';

export const postImage = (formData) => dispatch => {
  return ImageAPIUtil.postImage(formData).then(
    imageShow => dispatch(receiveImage(imageShow))
  );
};

export const fetchImage = (id) => dispatch => {
  return ImageAPIUtil.fetchImage(id).then(
    imageShow => dispatch(receiveImage(imageShow))
  );
};

export const receiveImage = (imageShow) => {
  return {
    type: RECEIVE_IMAGE,
    imageShow
  };
};
