"use client"

import './CommentsContainer.css';
import Comment from '../Comment/Comment';
import { useEffect } from 'react';

export default function CommentsContainer( { comments } ) {
  // useEffect(() => console.log(commentsList));
  const commentsList = comments.map((comment, key) => {
    return <Comment comment={comment} key={key} />
  });

  return (
    <div className='comments-container'>
        {/* <Comment /> */}
        {commentsList}
    </div>
  )
}