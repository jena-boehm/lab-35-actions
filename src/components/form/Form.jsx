import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/BlogProvider';
import { createPost } from '../../actions/postActions';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button>Create Post</button>
    </form>
  );
}

Form.propTypes = {

};

export default Form;

