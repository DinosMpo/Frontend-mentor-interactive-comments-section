import './AddComment.css'
import Image from 'next/image'

export default function AddComment({ user }) {
  return (
    <div className='add-comment-container'>
        <Image className='current-user-image' src={'/' + user.image.png} width={40} height={40} alt="user image" />
        {/* <input className='add-comment-input' placeholder='Add a comment...' type='text' /> */}
        <textarea className='add-comment-input' placeholder='Add a comment...' type='text' />
        <div className='send-comment'>SEND</div>
    </div>
  )
}
