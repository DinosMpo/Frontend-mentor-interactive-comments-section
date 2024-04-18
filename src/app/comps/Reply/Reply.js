import { useState } from 'react';
import ReplyDetails from '../ReplyDetails/ReplyDetails';
import ReplyRating from '../ReplyRating/ReplyRating';
import ReplyText from '../ReplyText/ReplyText';
import ReplyToReply from '../ReplyToReply/ReplyToReply';
import AddReply from '../AddReply/AddReply';
import UserCommentActions from '../UserCommentActions/UserCommentActions';
import './Reply.css';

export default function Reply({ reply, currentUser, setMyData, myData }) {
  const [showAddReply, setShowAddReply] = useState(false);

  return (
    <div className='reply'>
      {/* component for rating */}
      <ReplyRating score={reply.score} />
      {/* component for user details such avatar name and when the comment was made */}
      <div className='reply-section'>
        <div className='reply-details-section'>
          {/* <ReplyDetails createdAt={reply.createdAt} user={reply.user} currentUser={currentUser} /> */}
          <ReplyDetails reply={reply} currentUser={currentUser} />
          {/* component for a reply to the comment */}
          {reply.user.username === currentUser.username ?
            // user reply actions
            <UserCommentActions />
            :
            <ReplyToReply reply={reply} currentUser={currentUser} setMyData={setMyData} myData={myData} />
            // <AddReply comment={reply} currentUser={currentUser} setMyData={setMyData} myData={myData} />
          }
        </div>
        {/* component for the text of the comment */}
        <ReplyText text={reply.content} replyingTo={reply.replyingTo} />
      </div>
    </div>
  )
}
