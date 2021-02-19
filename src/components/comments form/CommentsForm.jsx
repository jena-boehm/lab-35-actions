import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createComment } from '../../actions/commentActions';

function CommentsForm() {
  const dispatch = useDispatch();
  const [commentBody, setCommentBody] = useState('');

  const handleCommentSubmit = e => {
    e.preventDefault();
    dispatch(createComment({ commentBody }));
    console.log('BODY', commentBody);
  };

  return (
    <div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Comment"
          value={commentBody}
          onChange={({ target }) => setCommentBody(target.value)}
        />
        <button>Create Comment</button>    
      </form>  
    </div>
  );
}
export default CommentsForm;

