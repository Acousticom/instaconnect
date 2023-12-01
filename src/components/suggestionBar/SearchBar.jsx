import React, { useState } from "react";
import { useUser } from "../../context/userContext";
import { AiOutlineSearch } from "../../assests/icons";
import { useNavigate } from "react-router-dom";
import ProfileImage from "../ProfileImage";

const SearchBar = () => {
  const { userState } = useUser();
  const navigate=useNavigate()
  const { user } = userState;
  const [searchInput, setSearchInput] = useState("");
  const searchedByInput = user.filter(
    (people) =>
      people.username.includes(searchInput.toLowerCase()) ||
      people.firstName.includes(searchInput.toLowerCase()) ||
      people.lastName.includes(searchInput.toLowerCase())
  );
  return (
    <div className="w-80 border-2 px-4 py-3 my-5 rounded-md shadow-lg relative">
      <div className="flex">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <AiOutlineSearch size={25} className="cursor-pointer" />
      </div>
      {searchInput.length > 0 && searchedByInput.length > 0 ? (
        <div className="w-80 border-2 px-4 py-3 my-5 rounded-md absolute left-0 z-10 bg-white">
          {searchedByInput.map((user) => (
              <div
                className="flex gap-3 items-center cursor-pointer my-2"
                onClick={() => navigate(`/profile/${user?.username}`)}
              >
                <ProfileImage image={user.avatarUrl} />
                <div className="cursor-pointer">
                  <p className="font-semibold">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="">{user.username}</p>
                </div>
              </div>
          ))}
        </div>
      ) : searchInput.length > 0 &&(
        <div className="w-80 border-2 px-4 py-3 my-5 rounded-md absolute left-0 z-10 bg-white">
          <p>No result found</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
