import Image from 'next/image'
import './CommentReply.css'

export default function CommentReply({ setShowAddReply, showAddReply }) {
  return (
    <div className='comment-reply-container' onClick={
      // setShowAddReply((preValue) => !preValue)
      () => setShowAddReply((showAddReply) => !showAddReply)
    }
      >
      <div className='comment-reply-image'>
        <Image
          src={'/images/icon-reply.svg'}
          width="14"
          height="13"
          alt="user image"
        />
      </div>
      <div className='comment-reply-text'>
        Reply
      </div>
    </ div>
      )
}
