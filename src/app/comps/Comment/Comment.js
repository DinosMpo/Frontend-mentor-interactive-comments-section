"use client"

import { useEffect } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';
import CommentRating from '../CommentRating/CommentRating';
import CommentReply from '../CommentReply/CommentReply';
import CommentText from '../CommentText/CommentText';
import Reply from '../Reply/Reply';
import './Comment.css';

export default function Comment({ comment }) {
  useEffect(() => console.log(comment.replies));

  const repliesList = comment.replies.map((reply, key) => {
    return <Reply reply={reply} key={key} />
  });

  return (
    <div className='comment'>
      <div className='comment-container'>
        {/* component for rating */}
        <CommentRating score={comment.score} />
        {/* component for user details such avatar name and when the comment was made */}
        <div className='comment-section'>
          <div className='comment-details-section'>
            <CommentDetails createdAt={comment.createdAt} user={comment.user} />
            {/* component for a reply to the comment */}
            <CommentReply />
          </div>
          {/* component for the text of the comment */}
          <CommentText text={comment.content} />
        </div>
      </div>

      {repliesList.length > 0 ?
        <div className='replies-list-container'>
          <div className='reply-line-container'>
            <div className='reply-line'></div>
          </div>
          <div className='replies-list'>
            {repliesList}
          </div>
        </div>
        :
        ''
      }
    </div>
  )
}