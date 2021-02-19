import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export const initialState = {
  comments: []
};

export default function commentReducer(state = initialState, action) {
  const { comments } = state;
  const { payload } = action;
  
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...comments, payload]
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comments: comments.filter(comment => 
          comment.commentBody !== payload)
      };

    default:
      return state;
  }
}
