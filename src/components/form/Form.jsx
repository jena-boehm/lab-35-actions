import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
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

