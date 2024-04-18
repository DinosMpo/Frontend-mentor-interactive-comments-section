import Image from 'next/image'
import './ReplyDetails.css'

export default function ReplyDetails({ reply, currentUser }) {
  let dateOfReply;
  let currentDate = new Date();
  let replyDate = new Date(JSON.parse(JSON.stringify(reply.createdAt)));

  // console.log(reply.createdAt instanceof Date);

  // if((new Date(JSON.parse(JSON.stringify(reply.createdAt)))) == 'Invalid Date') {
  //   console.log("is not a date object");
  //   dateOfReply = reply.createdAt;
  // }else if((typeof reply.createdAt) == 'object') {
  //   console.log("Reply date");
  //   if(reply.createdAt.getFullYear() != currentDate.getFullYear()) {
  //     let year = currentDate().getFullYear() - reply.createdAt.getFullYear();
  //     dateOfReply = `${year} year ago`;
  //   }else if(reply.createdAt.getMonth() != currentDate.getMonth()) {
  //     let month = currentDate().getMonth() - reply.createdAt.getMonth();
  //     dateOfReply = `${month} month ago`;
  //   }else if(reply.createdAt.getDay() != currentDate.getDay()) {
  //     let day = currentDate().getDay() - reply.createdAt.getDay();
  //     dateOfReply = `${day} day ago`;
  //   }else{
  //     dateOfReply = "today";
  //   }
  // }

  if(replyDate == 'Invalid Date') {
    // console.log("is not a date object");
    dateOfReply = reply.createdAt;
  }else {
    console.log("Reply date");
    if(replyDate.getFullYear() != currentDate.getFullYear()) {
      let year = currentDate.getFullYear() - replyDate;
      dateOfReply = `${year} year ago`;
    }else if(replyDate.getMonth() != currentDate.getMonth()) {
      let month = currentDate.getMonth() - replyDate.getMonth();
      dateOfReply = `${month} month ago`;
    }else if(replyDate.getDay() != currentDate.getDay()) {
      let day = currentDate.getDay() - replyDate.getDay();
      dateOfReply = `${day} day ago`;
    }else{
      dateOfReply = "today";
    }
  }

  return (
    <div className='reply-details'>
      {/* user avatar */}
      <Image
        src={'/' + reply.user.image.png}
        width={30}
        height={30}
        alt="user image"
      />
      {/* user name */}
      <div className='reply-detail-username'>
        {reply.user.username}
        {currentUser.username === reply.user.username ?
          <div className='current-user-indicator'>you</div>
          :
          ''
        }
      </div>
      {/* comment date */}
      <div className='reply-detail-created'>
        {dateOfReply}
      </div>
    </div>
  )
}
