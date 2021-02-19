import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import CommentList from '../comments/CommentList';
import CommentsForm from '../comments form/CommentsForm';

function Post({ title, body, index }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(title, body));
  };

  return (
    <>
      <h2>{title}</h2>  
      <p>{body}</p>
      <button onClick={handleDelete}>Delete</button>
      <CommentsForm />
      <CommentList />
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;

