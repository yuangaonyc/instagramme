export const postComment = (comment) => dispatch => {
  return ImageAPIUtil.postComment(comment).then(
    comment => dispatch(receiveComment(imageShow))
  );
};
