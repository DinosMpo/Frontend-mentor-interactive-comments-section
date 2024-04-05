import CommentReply from '../CommentReply/CommentReply';
import CommentText from '../CommentText/CommentText';
import ReplyDetails from '../ReplyDetails/ReplyDetails';
import ReplyRating from '../ReplyRating/ReplyRating';
import ReplyText from '../ReplyText/ReplyText';
import ReplyToReply from '../ReplyToReply/ReplyToReply';
import './Reply.css';

export default function Reply({ reply }) {
  return (
    <div className='reply'>
      {/* component for rating */}
      <ReplyRating score={reply.score} />
      {/* component for user details such avatar name and when the comment was made */}
      <div className='reply-section'>
        <div className='reply-details-section'>
          <ReplyDetails createdAt={reply.createdAt} user={reply.user} replyingTo={reply.replyingTo}/>
          {/* component for a reply to the comment */}
          {/* <CommentReply /> */}
          <ReplyToReply />
        </div>
        {/* component for the text of the comment */}
        {/* <CommentText text={reply.content} /> */}
        <ReplyText text={reply.content} replyingTo={reply.replyingTo}/>
      </div>
    </div>
  )
}
