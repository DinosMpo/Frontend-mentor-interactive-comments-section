"use client"

import './CommentsContainer.css';
import Comment from '../Comment/Comment';
import data from '../../../../public/data.json';
import { useEffect } from 'react';

export default function CommentsContainer() {
  // useEffect(() => console.log(commentsList));
  const commentsList = data.comments;
  const comments = commentsList.map((comment, key) => {
    return <Comment comment={comment} key={key} />
  });

  return (
    <div className='comments-container'>
        CommentsContainer
        {/* <Comment /> */}
        {comments}
    </div>
  )
}