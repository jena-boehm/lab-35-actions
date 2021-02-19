export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = commentBody => ({
  type: CREATE_COMMENT,
  payload: commentBody
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = commentBody => ({
  type: DELETE_COMMENT,
  payload: commentBody
});
