import React from 'react';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import { getComments } from '../../selectors/commentsSelectors';

function CommentList() {
  const comments = useSelector(getComments);

  const commentElements = comments.map(comment => {
    return <div key={comment.commentBody}>
      <Comment {...comment} />
    </div>;
  });
    
  return (
    <div>
      {commentElements}
    </div>
  );
}

export default CommentList;
