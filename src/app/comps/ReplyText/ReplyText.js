import './ReplyText.css'

export default function ReplyText({ text, replyingTo}) {
  return (
    <div className='reply-text'>
        {/* {replyingTo + text} */}
        <span className='reply-text-replying-to'>{'@' + replyingTo + ' '}</span>
        <span className='reply-text-text'>{text}</span> 
    </div>
  )
}
