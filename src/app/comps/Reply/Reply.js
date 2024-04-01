import CommentDetails from '../CommentDetails/CommentDetails';
import CommentRating from '../CommentRating/CommentRating';
import CommentReply from '../CommentReply/CommentReply';
import CommentText from '../CommentText/CommentText';
import './Reply.css';

export default function Reply({ reply }) {
  return (
    <div className='reply'>
      {/* component for rating */}
      <CommentRating score={reply.score} />
      {/* component for user details such avatar name and when the comment was made */}
      <div className='comment-section'>
        <div className='comment-details-section'>
          <CommentDetails createdAt={reply.createdAt} user={reply.user} />
          {/* component for a reply to the comment */}
          <CommentReply />
        </div>
        {/* component for the text of the comment */}
        <CommentText text={reply.content} />
      </div>
    </div>
  )
}
