import React from 'react'

const Comment = ({img, name, text}) => {
   console.log(img);
  return (
    <div className='post-comments'>
         <div className='commenter-details'>
            <img className='poster-pic' src={img} alt="" width="40px"/>
           <div className='comment-details'>
             <span>{name}</span>
             <p>{text}</p>
            </div>
         </div>
    </div>
  )
}

export default Comment
