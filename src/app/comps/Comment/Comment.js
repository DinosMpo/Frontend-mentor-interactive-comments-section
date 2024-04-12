"use client"

import { useState, useEffect } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';
import CommentRating from '../CommentRating/CommentRating';
import CommentReply from '../CommentReply/CommentReply';
import CommentText from '../CommentText/CommentText';
import Reply from '../Reply/Reply';
import ReplyToComment from '../ReplyToComment/ReplyToComment';
import UserCommentActions from '../UserCommentActions/UserCommentActions';
import './Comment.css';
import AddReply from '../AddReply/AddReply';

export default function Comment({ comment, currentUser, setMyData, myData }) {
  const [showAddReply, setShowAddReply] = useState(false);
  // useEffect(() => console.log(comment.replies));
  const repliesList = comment.replies.map((reply, key) => {
    return <Reply reply={reply} currentUser={currentUser} key={key} />
  });

  return (
    <div className='comment'>
      <div className='comment-container'>
        {/* component for rating */}
        <CommentRating score={comment.score} />
        {/* component for user details such avatar name and when the comment was made */}
        <div className='comment-section'>
          <div className='comment-details-section'>
            <CommentDetails createdAt={comment.createdAt} user={comment.user} currentUser={currentUser} />
            {/* component for a reply to the comment */}
            {comment.user.username === currentUser.username ?
              // user reply actions
              <UserCommentActions />
              :
              <CommentReply setShowAddReply={setShowAddReply} showAddReply={showAddReply} />
            }
          </div>
          {/* component for the text of the comment */}
          <CommentText text={comment.content} />
        </div>
      </div>

      {
        showAddReply?
          <AddReply comment={comment} currentUser={currentUser} setMyData={setMyData} myData={myData} setShowAddReply={setShowAddReply} showAddReply={showAddReply} />
        :
        ''
      }

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