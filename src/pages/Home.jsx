import React from "react";
import { usePost } from "../context/postContext";
import { useAuth } from "../context/authContext";
import PostCard from "../components/posts/PostCard";
import CreatePost from "../components/createPost/CreatePost";
import PostShimmerCard from "../components/shimmerCard/PostShimmerCard";

const Home = () => {
  const { currentUser } = useAuth();
  const { postState,loading } = usePost();
  const { posts } = postState;
  console.log(posts)
  const homePost = posts.filter(
    (post) =>
      post?.username === currentUser?.username ||
      currentUser?.following?.find(
        (followingUser) => followingUser?.username === post?.username
      )
  );
  
  return (
    <div className="">
      <CreatePost/>
      {loading&&<PostShimmerCard/>}
      {homePost?.map((post)=> <PostCard post={post} key={post._id}/>)}
    </div>
  );
};

export default Home;
