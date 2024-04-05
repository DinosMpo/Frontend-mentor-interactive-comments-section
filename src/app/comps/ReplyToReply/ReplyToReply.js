import Image from 'next/image'
import './ReplyToReply.css'

export default function ReplyToReply() {
  return (
    <div className='reply-to-reply-container'>
      <div className='reply-to-reply-image'>
        <Image 
          src={'/images/icon-reply.svg'}
          width="14"
          height="13"
        />
      </div>
      <div className='reply-to-reply-text'>
        Reply
      </div>
    </div>
  )
}
