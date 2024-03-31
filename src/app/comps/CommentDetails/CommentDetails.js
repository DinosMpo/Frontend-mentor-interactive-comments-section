import Image from 'next/image';
import './CommentDetails.css'

export default function CommentDetails({ createdAt, user }) {
  return (
    <div className='comment-details'>
      {/* user avatar */}
      <Image 
        src={'/' + user.image.png}
        width={30}
        height={30}
      />
      {/* user name */}
      {user.username}
      {/* comment date */}
      {createdAt}
    </div>
  )
}
