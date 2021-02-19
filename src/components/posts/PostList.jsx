import React from 'react';
import Post from './Post';
import { useSelector } from 'react-redux';
import styles from '../app/App.css';
import { getPosts } from '../../selectors/postSelectors';

function PostList() {
  const posts = useSelector(getPosts);

  const postElements = posts.map(post => {
    return <div key={post.title}>
      <Post {...post} />
    </div>;
  });
  
  return (
    <div className={styles.postList}>
      <h2 className={styles.header}>Posts</h2>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default PostList;

