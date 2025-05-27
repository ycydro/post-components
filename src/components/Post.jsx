import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Post = ({post: {img, name, text}}) => {
  return (
    <div className='post-wrapper'>
      <div className='poster-details'>
         <img className='poster-pic' src={img} alt="" width="40px"/>
         <div className='post-details'>
            <span>{name}</span>
            <span>Yesterday at 9:29 PM 
            {/* <PeopleAltIcon className='' style={{fontSize: 'medium'}} /> */}
            </span>
         </div>
      </div>
      <div className='post'>
      <p>{text}</p>
      </div>
      <hr />
      <div className='post-interactions'>
         <button className='post-reaction'>
            <ThumbUpIcon />
            <span>Like</span>
         </button>

         <button className='post-comment'>
            <ChatBubbleOutlineIcon />
            <span>Comment</span>
         </button>
      </div>
    </div>
  )
}

export default Post
