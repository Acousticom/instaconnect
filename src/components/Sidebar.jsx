import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  RiRocketLine,
  BsBookmark,
  CgProfile,
} from "../assests/icons";
import { useAuth } from "../context/authContext";

const Sidebar = () => {
  const {currentUser}=useAuth()
  const isActiveClass=({isActive})=>`flex gap-5 w-64 px-4 py-2 my-4 rounded-3xl ${isActive && "bg-isactiveColor font-semibold text-primaryColor"}`
  
  return (
    <div>
      <div className="hover:bg-isactiveColor rounded-3xl">
        <NavLink className={isActiveClass} to='/'>
          <AiOutlineHome size={28}/>
          <p className="text-2xl">Home</p>
        </NavLink>
      </div>
      <div className=" hover:bg-isactiveColor rounded-3xl">
        {" "}
        <NavLink className={isActiveClass} to='/explore'>
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
        <NavLink className={isActiveClass} to={`/profile/${currentUser?.username}`}>
          <CgProfile size={28} />
          <p className="text-2xl">Profile</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
