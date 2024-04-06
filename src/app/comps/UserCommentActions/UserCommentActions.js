import Image from 'next/image'
import './UserCommentActions.css'

export default function UserCommentActions() {
  return (
    <div className='user-comment-actions'>
      <div className='user-comment-action-delete'>
        <Image src='./images/icon-delete.svg' width='12' height='14' />
        Delete
      </div>
      <div className='user-comment-action-edit'>
        <Image src='./images/icon-edit.svg' width='14' height='14' />
        Edit
      </div>
    </div>
  )
}
