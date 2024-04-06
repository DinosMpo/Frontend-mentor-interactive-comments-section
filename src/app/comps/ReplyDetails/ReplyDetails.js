import Image from 'next/image'
import './ReplyDetails.css'

export default function ReplyDetails({ createdAt, user, currentUser }) {
  return (
    <div className='reply-details'>
      {/* user avatar */}
      <Image
        src={'/' + user.image.png}
        width={30}
        height={30}
      />
      {/* user name */}
      <div className='reply-detail-username'>
        {user.username}
        {currentUser.username === user.username ?
          <div className='current-user-indicator'>you</div>
          :
          ''
        }
      </div>
      {/* comment date */}
      <div className='reply-detail-created'>
        {createdAt}
      </div>
    </div>
  )
}
