import React from 'react'

const Comment = ({comment: {img, author, comment}}) => {
   console.log(img);
  return (
      <div className='commenter-details'>
         <img className='poster-pic' src={img} alt="" width="40px"/>
         <div className='comment-details'>
            <span>{author}</span>
            <p>{comment}</p>
         </div>
      </div>
  )
}

export default Comment
