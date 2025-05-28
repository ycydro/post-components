import {useEffect, useState} from 'react'
import Comment from './Comment'
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
const Post = ({post: {img, name, text, comments: initialComments = []}}) => {
   const [showComments, setShowComments] = useState(false);
   const [isLiked, setIsLiked] = useState(false);
   const [comments, setComments] = useState(initialComments);
   const [newComment, setNewComment] = useState('');
   const [likeCount, setLikeCount] = useState(0);
   const [error, setError] = useState('');
   const CHAR_LIMIT = 150;

   // useEffect(() => {
   //    console.log(newComment)
   // }, [newComment])

   const handleAddComment = () => {
      if (newComment.trim() === '') return;

      // shows error in input text
      if (newComment.length > CHAR_LIMIT) {
         setError(`You can only comment ${CHAR_LIMIT} characters`);
         setNewComment('');

         setTimeout(() => setError(''), 3000);
         return;
      }

      const newCommentObj = {
         id: `c-${Date.now()}`, 
         img: img,
         author: name,
         comment: newComment
      };
      
      console.log(comments.length);
      setComments(prevComments => [...prevComments, newCommentObj])
      setNewComment('')
      setError('');
   }

   const handleLikeButton = () => {
      setIsLiked(prevLikeState => {
         const newLikeState = !prevLikeState;
         setLikeCount(prevLikeCount => 
            newLikeState ? prevLikeCount + 1 : prevLikeCount - 1);
            return newLikeState
      });
   }
  
   return (
    <div className='post-wrapper'>
      <div className='poster-details'>
         <img className='poster-pic' src={img} alt="" width="40px"/>
         <div className='post-details'>
            <span>{name}</span>
            <span className='date-posted'>Yesterday at 9:29 PM </span>
         </div>
      </div>
      <div className='post'>
         <p>{text}</p>
      </div>  
      {
       (likeCount > 0 || comments.length > 0) &&       
       <div className='interaction-counts'>
        {likeCount > 0 && 
            <p style={{color: 'cadetblue'}}> <ThumbUpIcon style={{fontSize: '0.75rem'}} /> {likeCount} </p>
         }
         {comments.length > 0 && 
            <p> <ChatBubbleOutlineIcon style={{fontSize: '0.75rem'}} /> {comments.length} </p>
         }
      </div>
      }

      <hr />
      <div className='post-interactions'>
         <button
         style={isLiked ? {color: 'skyblue'} : {color: '#ced1d5'}}  
         className='post-reaction post-interaction'
         onClick={handleLikeButton}  
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
         placeholder= {error ? error : 'Add a comment...'}
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
