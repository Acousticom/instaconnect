import React from "react";
import { usePost } from "../context/postContext";
import { useAuth } from "../context/authContext";
import PostCard from "../components/posts/PostCard";
const Home = () => {
  const { currentUser } = useAuth();
  const { postState } = usePost();
  const { posts } = postState;

  const homePost = posts.filter(
    (post) =>
      post.username === currentUser.username ||
      currentUser?.following.find(
        (followingUser) => followingUser.username === post.username
      )
  );
  return (
    <div className="">
      {homePost?.map((post)=> <PostCard post={post} key={post._id}/>)}
    </div>
  );
};

export default Home;
