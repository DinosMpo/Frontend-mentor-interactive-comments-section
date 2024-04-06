import Image from 'next/image';
import './CommentDetails.css'

export default function CommentDetails({ createdAt, user, currentUser }) {
  return (
    <div className='comment-details'>
      {/* user avatar */}
      <Image
        src={'/' + user.image.png}
        width={30}
        height={30}
      />
      {/* user name */}
      <div className='comment-detail-username'>
        {user.username}
        {currentUser.username === user.username ?
          <div className='current-user-indicator'>you</div>
          :
          ''
        }
      </div>
      {/* comment date */}
      <div className='comment-detail-created'>
        {createdAt}
      </div>
    </div>
  )
}
