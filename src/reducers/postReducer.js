import { CREATE_POST } from '../actions/postActions';

export const initialState = {
  posts: []
};

export default function reducer(state, action) {
  const { posts } = state;
  const { payload } = action;
  
  switch(action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...posts, payload]
      };

    default:
      return state;
  }
}
