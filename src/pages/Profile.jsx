import React from "react";
import { useUser } from "../context/userContext";
import { useParams } from "react-router-dom";
import { usePost } from "../context/postContext";
import PostCard from "../components/posts/PostCard";
import ProfileDetails from "../components/profileDetails/ProfileDetails";

const Profile = () => {
  const { postState } = usePost();
  const { posts } = postState;
  const {username} =useParams()
  const { userState } = useUser();
  const {user}=userState
  const profilePost = posts.filter((post) => post.username === username);
  const userDetails=user.find((person)=>person.username===username)
  console.log(userDetails)
  return (
    <div>
      {userDetails &&<ProfileDetails profilePost={profilePost} username={username} userDetails={userDetails}/>}
      {profilePost.length>0?profilePost.map((post) => (
        <PostCard post={post} key={post._id}/>
      )):<p className='my-5 text-2xl text-center'>No Post yet! </p>}
    </div>
  );
};

export default Profile;
