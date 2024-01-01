import React from 'react'
import { useUser } from '../context/userContext'
import PostCard from '../components/posts/PostCard'

const Bookmark = () => {
  const {userState}=useUser()
  const {bookmarks}=userState
  return (
    <div>
      {bookmarks.length?bookmarks.map((bookmark)=><PostCard post={bookmark} key={bookmark._id}/>):<h1 className='my-5 text-2xl text-center text-primaryColor font-semibold'>No post added to bookmark yet!</h1>}
    </div>
  )
}

export default Bookmark