import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/BlogProvider';
import { deletePost } from '../../actions/postActions';

function Post({ title, body }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(title, body));
  };

  return (
    <>
      <div>
        <h2>{title}</h2>  
        <p>{body}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;

