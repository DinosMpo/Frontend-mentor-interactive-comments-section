import Image from 'next/image';
import './CommentDetails.css'

export default function CommentDetails({ createdAt, user, currentUser }) {
  let dateOfComment;
  let currentDate = new Date();

  if(createdAt != Date) {
    console.log("is not a date object");
    dateOfComment = createdAt;
  }else if(createdAt == Date) {
    console.log("comment date");
    if(createdAt.getFullYear() != currentDate().getFullYear()) {
      let year = currentDate().getFullYear() - createdAt.getFullYear();
      dateOfComment = `${year} year ago`;
    }else if(createdAt.getMonth() != currentDate.getMonth()) {
      let month = currentDate().getMonth() - createdAt.getMonth();
      dateOfComment = `${month} month ago`;
    }else if(createdAt.getDay() != currentDate.getDay()) {
      let day = currentDate().getDay() - createdAt.getDay();
      dateOfComment = `${day} day ago`;
    }else{
      dateOfComment = "today";
    }
  }

  return (
    <div className='comment-details'>
      {/* user avatar */}
      <Image
        src={'/' + user.image.png}
        width={30}
        height={30}
        alt="user image"
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
        {dateOfComment}
      </div>
    </div>
  )
}
