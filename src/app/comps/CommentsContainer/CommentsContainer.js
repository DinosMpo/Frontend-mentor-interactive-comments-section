"use client"

import './CommentsContainer.css';
import Comment from '../Comment/Comment';
import { useEffect } from 'react';

export default function CommentsContainer( { comments, currentUser, setMyData, myData } ) {
  useEffect(() => console.log(comments));
  console.log(comments);
  console.log(myData);
  const commentsList = comments.map((comment, key) => {
    return <Comment comment={comment} currentUser={currentUser} key={key} setMyData={setMyData} myData={myData} />
  });

  return (
    <div className='comments-container'>
        {/* <Comment /> */}
        {commentsList}
    </div>
  )
}