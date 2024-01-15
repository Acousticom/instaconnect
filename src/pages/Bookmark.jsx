import React from 'react'
import { useUser } from '../context/userContext'
import PostCard from '../components/posts/PostCard'
import { usePost } from '../context/postContext'
import PostShimmerCard from '../components/shimmerCard/PostShimmerCard'

const Bookmark = () => {
  const {userState}=useUser()
  const {loading}=usePost()
  const {bookmarks}=userState
  return (
    <div>
      {loading&&<PostShimmerCard/>}
      {bookmarks.length?bookmarks.map((bookmark)=><PostCard post={bookmark} key={bookmark._id}/>):<h1 className='my-5 text-2xl text-center text-primaryColor font-semibold'>No post added to bookmark yet!</h1>}
    </div>
  )
}

export default Bookmark