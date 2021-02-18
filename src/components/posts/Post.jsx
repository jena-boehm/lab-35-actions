import React from 'react';
import PropTypes from 'prop-types';

function Post({ title, body }) {
  return (
    <div>
      <h2>{title}</h2>  
      <p>{body}</p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;

