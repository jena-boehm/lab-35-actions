import { createComment, deleteComment } from '../actions/commentActions';
import commentReducer from './commentReducer';

describe('comment reducer', () => {
  it('should add a comment with CREATE_COMMENT action', () => {
    const state = {
      comments: []
    };

    const action = createComment({
      body: 'this is a comment'
    });

    const newState = commentReducer(state, action);

    expect(newState).toEqual({
      comments: [{
        body: 'this is a comment'
      }]
    });
  });

  it('should delete a comment with DELETE_COMMENT action', () => {
    const state = {
      comments: [{
        body: 'this is a comment'
      }] 
    };

    const action = deleteComment('this is a comment');

    const newState = commentReducer(state, action);

    expect(newState).toEqual(newState);
  });
});
