import React from "react";
import { useUser } from "../../context/userContext";
import { useAuth } from "../../context/authContext";
import ProfileImage from "../ProfileImage";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserShimmerCard from "../shimmerCard/UserShimmerCard";
// import { useAuth } from '../context/authContext'

const SuggestionBar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { userState, followUserHandler,loading } = useUser();
  const { user } = userState;
  const friendsSuggestion = user
    .filter((person) => person?.username !== currentUser?.username)
    ?.filter(
      (user) =>
        !currentUser?.following?.find(
          (account) => account?.username === user?.username
        )
    );
  return (
    <>
      <SearchBar/>
      <div className="w-80 border-2 px-4 py-3 my-5 rounded-md shadow-lg">
        <p>Who to follow?</p>
        <div>
          {loading &&<UserShimmerCard/>}
          {friendsSuggestion.map((friend) => (
            <div
              className="flex justify-between items-center py-2"
              key={friend._id}
            >
              <div
                className="flex gap-3 items-center cursor-pointer"
                onClick={() => navigate(`/profile/${friend?.username}`)}
              >
                <ProfileImage image={friend.avatarUrl} />
                <div className="cursor-pointer">
                  <p className="font-semibold">
                    {friend.firstName} {friend.lastName}
                  </p>
                  <p className="">{friend.username}</p>
                </div>
              </div>

              <button
                className="border-2 cursor-pointer bg-primaryColor text-white px-3 py-1 rounded-md"
                onClick={() => followUserHandler(friend._id)}
              >
                follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SuggestionBar;
