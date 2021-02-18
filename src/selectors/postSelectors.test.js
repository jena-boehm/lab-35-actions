import { getPosts } from './postSelectors';

describe('post selectors', () => {
  it('selects the list of posts from state', () => {
    const state = {
      posts: [{ 
        title: 'this is a post title', 
        body: 'this is a post body'
      }]
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{ 
      title: 'this is a post title', 
      body: 'this is a post body' 
    }]);
  });
});
