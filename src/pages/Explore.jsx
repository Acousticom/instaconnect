import React from "react";
import PostCard from "../components/posts/PostCard";
import { usePost } from "../context/postContext";
import { useAuth } from "../context/authContext";


const Explore = () => {
  const { postState } = usePost();
  const { posts } = postState;
  const {currentUser}=useAuth()

  const explorePost = posts?.filter(
    (post) =>
      post.username !== currentUser?.username &&
      !currentUser?.following?.find(
        (followingUser) => followingUser?.username === post?.username
      )
  );

  return (
    <div>
      {explorePost?.map((post)=><PostCard post={post} key={post._id}/>)}   
      
    </div>
  );
};

export default Explore;
