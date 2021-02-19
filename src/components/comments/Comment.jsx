import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

function Comment({ body }) {
  const dispatch = useDispatch();

  const handleCommentDelete = () => {
    dispatch(deleteComment(body));
  };

  return (
    <>
      <div>{body}</div>
      <button 
        onClick={handleCommentDelete}>Delete</button>
    </>
  );
}

Comment.propTypes = {
  body: PropTypes.string.isRequired
};

export default Comment;

