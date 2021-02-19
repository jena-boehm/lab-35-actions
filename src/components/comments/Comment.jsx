import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

function Comment({ commentBody }) {
  const dispatch = useDispatch();

  const handleCommentDelete = () => {
    dispatch(deleteComment(commentBody));
    console.log('DELETE BODY', commentBody);
  };

  return (
    <>
      <div>{commentBody}</div>
      <button 
        onClick={handleCommentDelete}>Delete</button>
    </>
  );
}

Comment.propTypes = {
  commentBody: PropTypes.string.isRequired
};

export default Comment;

