import React, { useState } from 'react';
import { useDispatch } from '../../state/BlogProvider';
import { createPost } from '../../actions/postActions';
import styles from '../app/App.css';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
  };

  return (
    <>
      <h2 className={styles.formHeading}>Create a Post</h2>
      <div className={styles.formContainer}>
        <form 
          onSubmit={handleSubmit}
          className={styles.form}>
          <input
            className={styles.titleInput}
            type="text"
            placeholder="Title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <input
            className={styles.bodyInput}
            type="text"
            placeholder="Body"
            value={body}
            onChange={({ target }) => setBody(target.value)}
          />
          <button className={styles.button}>Create Post</button>
        </form>
      </div>
    </>
  );
}

export default Form;

