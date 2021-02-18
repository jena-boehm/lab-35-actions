export const getPosts = state => {
  console.log('STATE', state);
  return state.posts.posts;
};
