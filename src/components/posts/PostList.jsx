import React from 'react';
import Post from './Post';
import { useSelector } from '../../state/BlogProvider';
import styles from '../app/App.css';
import { getPosts } from '../../selectors/postSelectors';

function PostList() {
  const posts = useSelector(getPosts);
  console.log(posts);

  const postElements = posts.map(post => {
    return <p key={post.title}>
      <Post {...post} />
    </p>;
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

