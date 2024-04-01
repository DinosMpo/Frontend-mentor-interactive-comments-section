import './CommentRating.css';

export default function CommentRating({ score }) {
  return (
    <div className='comment-rating'>
      <div className='comment-rating-plus'>+</div>
      <div className='comment-rating-number'>{score}</div>
      <div className='comment-rating-minus'>-</div>
    </div>
  )
}
