import React from 'react'

const Comment = ({comment: {img, author, comment}}) => {
  return (
      <div className='commenter-details'>
         <img className='poster-pic' src={img} alt="" width="40px"/>
         <div className='comment-details'>
            <span>{author}</span>
            <p className='comment-content'>{comment}</p>
         </div>
      </div>
  )
}

export default Comment
