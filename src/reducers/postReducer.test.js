import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('should add a post with CREATE_POST action', () => {
    const state = {
      posts: []
    };

    const action = createPost({ 
      title: 'this is a post title', 
      body: 'this is a post body' 
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{ 
        title: 'this is a post title', 
        body: 'this is a post body' 
      }]
    });
  });

  it('should delete a post with DELETE_POST action', () => {
    const state = {
      posts: [{
        title: 'this is a post title', 
        body: 'this is a post body' 
      }]
    };

    const action = deletePost(
      'this is a post title', 
      'this is a post body'
    );

    expect(reducer(state, action)).toEqual({
      posts: []
    });
  });
});
