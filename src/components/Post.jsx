import {useEffect, useState} from 'react'
import Comment from './Comment'
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Post = ({post: {img, name, text, comments: initialComments = []}}) => {
   const [showComments, setShowComments] = useState(false);
   const [isLiked, setIsLiked] = useState(false);
   const [comments, setComments] = useState(initialComments);
   const [newComment, setNewComment] = useState('');

   // useEffect(() => {
   //    console.log(newComment)
   // }, [newComment])

   const handleAddComment = () => {

      if (newComment.trim('') === '') return;

      const newCommentObj = {
         id: `c-${Date.now()}`, 
         img: img,
         author: name,
         comment: newComment
      };

      console.log(newCommentObj);

      setComments(prevComments => [...prevComments, newCommentObj])
      setNewComment('')

   }
  
   return (
    <div className='post-wrapper'>
      <div className='poster-details'>
         <img className='poster-pic' src={img} alt="" width="40px"/>
         <div className='post-details'>
            <span>{name}</span>
            <span>Yesterday at 9:29 PM </span>
         </div>
      </div>
      <div className='post'>
         <p>{text}</p>
      </div>
      <hr />
      <div className='post-interactions'>
         <button
         style={isLiked ? {color: 'skyblue'} : {color: '#ced1d5'}}  
         className='post-reaction post-interaction'
         onClick={() => {setIsLiked(!isLiked)}}  
         >
            <ThumbUpIcon />
            <span>{isLiked ? 'Liked' : 'Like'}</span>
         </button>

         <button
         style={showComments ? {color: 'dimgray'} : {color: '#ced1d5'}} 
         className='post-comment post-interaction'
         onClick={() => {setShowComments(!showComments)}}
         >
            <ChatBubbleOutlineIcon />
            <span>Comment</span>
         </button>
      </div>
      <hr />
      {/* show comments  */}
      { showComments &&
         <div className='post-comments'>
            {comments.length > 0 && (
               comments.map((comment) => (
                  <Comment key={comment.id} comment={comment}/>
               ))
            )}  
         </div>
      }
      <div className='add-comment'>
         <input 
         type="text" 
         placeholder='Add a comment...'
         name="" 
         id="comment-input"
         value= {newComment}
         onChange={(e) => {setNewComment(e.target.value)}} />
         <button 
         onClick={handleAddComment}
         id='add-comment-btn'>Add Comment</button>
      </div>
         
    </div>
  )
}

export default Post
