import Image from 'next/image'
import './CommentReply.css'

export default function CommentReply() {
  return (
    <div className='comment-reply-container'>
      <div className='comment-reply-image'>
        <Image 
          src={'/images/icon-reply.svg'}
          width="14"
          height="13"
        />
      </div>
      <div className='comment-reply-text'>
        Reply
      </div>
    </div>
  )
}
