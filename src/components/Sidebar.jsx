import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  RiRocketLine,
  BsBookmark,
  CgProfile,
} from "../assests/icons";
import { useAuth } from "../context/authContext";

const Sidebar = () => {
  const {currentUser}=useAuth()
  return (
    <div>
      <div className="w-64 px-4 py-2 my-4 border-2 rounded-xl shadow-lg">
        <Link className="flex flex-row gap-5 items-center active:text-red-600" to='/'>
          <AiOutlineHome size={28} color="#a855f7" />
          <p className="text-2xl">Home</p>
        </Link>
      </div>
      <div className="w-64 px-4 py-2 my-4 border-2 rounded-xl shadow-lg">
        {" "}
        <Link className="flex flex-row gap-5 items-center" to='/explore'>
          <RiRocketLine size={28} color="#a855f7" />
          <p className="text-2xl">Explore</p>
        </Link>
      </div>
      <div className="w-64 px-4 py-2 my-4 border-2 rounded-xl shadow-lg">
        <Link className="flex flex-row gap-5 items-center" to="/bookmark">
          <BsBookmark size={28} color="#a855f7" />
          <p className="text-2xl">Bookmarks</p>
        </Link>
      </div>
      <div className="w-64 px-4 py-2 my-4 border-2 rounded-xl shadow-lg">
        <Link className="flex flex-row gap-5 items-center" to={`/profile/${currentUser?.username}`}>
          <CgProfile size={28} color="#a855f7" />
          <p className="text-2xl">Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
