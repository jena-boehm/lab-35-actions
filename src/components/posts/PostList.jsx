import React from 'react';
import Post from './Post';
import { usePostState } from '../../state/BlogProvider';
import styles from '../app/App.css';

function PostList() {
  const { posts } = usePostState();
  console.log(posts);

  const postElements = posts.map(post => {
    <p key={post}>
      <Post {...post} />
    </p>;
  });
  
  return (
    <div className={styles.postList}>
      <h2 className={styles.header}>Posts</h2>
      {postElements}
    </div>
  );
}

export default PostList;

