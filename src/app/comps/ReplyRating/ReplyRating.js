import './ReplyRating.css'

export default function ReplyRating({ score }) {
  return (
    <div className='reply-rating'>
      <div className='reply-rating-plus'>+</div>
      <div className='reply-rating-number'>{score}</div>
      <div className='reply-rating-minus'>-</div>
    </div>
  )
}
