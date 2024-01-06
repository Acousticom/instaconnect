import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  RiRocketLine,
  BsBookmark,
  CgProfile,
  FiLogOut,
  BsThreeDots,
} from "../assests/icons";
import ProfileImage from "./ProfileImage";
import { useAuth } from "../context/authContext";

const Sidebar = () => {
  const { currentUser, logoutHandler } = useAuth();
  const isActiveClass = ({ isActive }) =>
    `flex gap-5 w-64 px-4 py-2 my-4 rounded-3xl ${
      isActive && "bg-isactiveColor font-semibold text-primaryColor"
    }`;
  const [showLogout, setShowLogout] = useState(false);
  const Navigate=useNavigate()
  return (
    <>
      <div className="sLaptop:hidden">
        <div className="hover:bg-isactiveColor rounded-3xl">
          <NavLink className={isActiveClass} to="/">
            <AiOutlineHome size={28} />
            <p className="text-2xl">Home</p>
          </NavLink>
        </div>
        <div className=" hover:bg-isactiveColor rounded-3xl">
          {" "}
          <NavLink className={isActiveClass} to="/explore">
            <RiRocketLine size={28} />
            <p className="text-2xl">Explore</p>
          </NavLink>
        </div>
        <div className="hover:bg-isactiveColor rounded-3xl">
          <NavLink className={isActiveClass} to="/bookmark">
            <BsBookmark size={28} />
            <p className="text-2xl">Bookmarks</p>
          </NavLink>
        </div>
        <div className="hover:bg-isactiveColor rounded-3xl">
          <NavLink
            className={isActiveClass}
            to={`/profile/${currentUser?.username}`}
          >
            <CgProfile size={28} />
            <p className="text-2xl">Profile</p>
          </NavLink>
        </div>
        <div className="flex gap-3 relative cursor-pointer" >
          <ProfileImage image={currentUser.avatarUrl}/>
          <div onClick={()=>Navigate(`/profile/${currentUser?.username}`)}>
            <p className="font-semibold">
              {currentUser.firstName} {currentUser.lastName}
            </p>
            <p className="text-gray-500">@{currentUser.username}</p>
          </div>
          <span onClick={() => setShowLogout(!showLogout)}>
            <BsThreeDots size={27} className="cursor-pointer" />
          </span>

          <div className="">
            {showLogout && (
              <span onClick={logoutHandler}>
                <FiLogOut size={23} className="cursor-pointer"/>
                Logout
              </span>
            )}
          </div>
        </div>
      </div>

      {/* for smaller screens */}
      <div className="fixed bottom-0 left-0 z-50 lLaptop:hidden">
        <div className="bg-white w-screen flex justify-around py-2 z-50">
          <NavLink to="/">
            <AiOutlineHome size={23} />
          </NavLink>
          <NavLink to="/explore">
            <RiRocketLine size={23} />
          </NavLink>
          <NavLink to="/bookmark">
            <BsBookmark size={23} />
          </NavLink>
          <NavLink to={`/profile/${currentUser?.username}`}>
            <CgProfile size={23} />
          </NavLink>
          <span onClick={logoutHandler}>
            <FiLogOut size={23} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
