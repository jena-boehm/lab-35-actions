// import { CREATE_POST, DELETE_POST } from '../actions/postActions';

// export const initialState = {
//   posts: []
// };

// export default function commentReducer(state, action) {
//   const { posts } = state;
//   const { payload } = action;
  
//   switch(action.type) {
//     case CREATE_POST:
//       return {
//         ...state,
//         posts: [...posts, payload]
//       };

//     case DELETE_POST:
//       return {
//         ...state,
//         posts: posts.filter(post => 
//           post.title !== payload.title 
//             || post.body !== payload.body)
//       };

//     default:
//       return state;
//   }
// }
