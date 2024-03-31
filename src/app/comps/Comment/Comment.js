"use client"

import { useEffect } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';
import CommentRating from '../CommentRating/CommentRating';
import CommentReply from '../CommentReply/CommentReply';
import CommentText from '../CommentText/CommentText';
import './Comment.css';

export default function Comment({ comment }) {
  useEffect(() =>console.log(comment) );
  return (
    <div className='comment'>
      {/* component for rating */}
      <CommentRating />
      {/* component for user details such avatar name and when the comment was made */}
      <CommentDetails createdAt={comment.createdAt} user={comment.user}/>
      {/* component for a reply to the comment */}
      <CommentReply />
      {/* component for the text of the comment */}
      <CommentText text={comment.content}/>
    </div>
  )
}