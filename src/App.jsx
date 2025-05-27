import React from 'react'
import Post from './components/Post'
import posts from './data/posts'

const App = () => {

  return (
    <div className='wrapper'>
      {/* render all posts */}
      {posts.map((post) => (
         <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default App
