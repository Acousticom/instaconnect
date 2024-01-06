import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useUser } from "../../context/userContext";
import { useParams } from "react-router-dom";
import { usePost } from "../../context/postContext";
import {FiLogOut} from "../../assests/icons";
import Modal from "../modal/Modal";
import EditUserProfile from "./EditUserProfile";

const ProfileDetails = ({ profilePost, username,userDetails }) => {
  const [showEditForm,setShowEditForm]=useState(false)
  const { currentUser,logoutHandler } = useAuth();
  const { userState } = useUser();
  const { postState } = usePost();
  const { posts } = postState;
  const { user } = userState;
  const {followUserHandler,unFollowUserHandler}=useUser()

  const filteredUser = user?.find((person) => person?.username === username);
  const isCurrentUser = currentUser.username === username;
  const ifFollowingUser = userDetails?.followers?.some(
    (person) => person.username === currentUser.username
  );

  return (
    <div>
      <div className="flex justify-between border-2 my-5 rounded-lg  shadow-lg shadow-gray-200 px-6 py-4">
        <div className="flex gap-5">
          <img
            src={filteredUser?.avatarUrl}
            alt=""
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="text-xl font-semibold">
              {filteredUser?.firstName} {filteredUser?.lastName}
            </p>
            <p className="text-lg text-gray-400">{filteredUser?.username}</p>
            <p className="text-lg">{filteredUser?.bio}</p>
            <div className="flex text-lg gap-3 font-medium">
              <p>{profilePost?.length} Posts </p>
              <p>{filteredUser?.followers.length} followers</p>
              <p>{filteredUser?.following.length} following</p>
            </div>
          </div>
        </div>
        <div>
          {isCurrentUser ? (
            <button className="border-2 px-4 py-1 rounded-lg text-lg font-medium bg-primaryColor text-white" onClick={()=>setShowEditForm(true)}>Edit</button>
          ) : ifFollowingUser ? (
            <button className="border-2 px-4 py-1 rounded-lg text-lg font-medium" onClick={()=>unFollowUserHandler(userDetails._id)}>Unfollow</button>
          ) : (
            <button className="border-2 px-4 py-1 rounded-lg text-lg font-medium bg-primaryColor text-white" onClick={()=>followUserHandler(userDetails._id)}>follow</button>
          )}
          {/* <span onClick={logoutHandler}>
            <FiLogOut size={23}/>
          </span> */}
        </div>
      </div>
      <Modal showModal={showEditForm} setShowModal={setShowEditForm}>
        <EditUserProfile setShowModal={setShowEditForm} user={userDetails}/>
      </Modal>
    </div>
  );
};

export default ProfileDetails;
