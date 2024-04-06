import Image from 'next/image'
import './ReplyToComment.css'

export default function ReplyToComment() {
  return (
    <div className='reply-to-comment-container'>
      <div className='reply-to-comment-image'>
        <Image
          src={'/images/icon-reply.svg'}
          width="14"
          height="13"
        />
      </div>
      <div className='reply-to-comment-text'>
        Reply
      </div>
    </div>
  )
}
