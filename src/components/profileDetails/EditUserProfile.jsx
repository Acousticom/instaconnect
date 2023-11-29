import React, { useState } from "react";
import { useUser } from "../../context/userContext";
import { BiImageAdd } from "../../assests/icons";

const EditUserProfile = ({ user, setShowModal }) => {
  const { editUserHandler } = useUser();
  const { avatarUrl, firstName, lastName, bio } = user;
  const [formData, setFormData] = useState({
    avatarUrl,
    firstName,
    lastName,
    bio,
    selectedImage: "",
  });

  const formDataInputHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, selectedImage: imageUrl });
    };
    input.click();
  };
  
  const updateHandler = (event) => {
    event.preventDefault();
    const updatedUserData = {
      ...formData,
      _id: user?._id,
      username: user?.username,
      avatarUrl: formData.selectedImage || user?.avatarUrl,
    };
    editUserHandler(updatedUserData);
    setShowModal(false);
    console.log(updatedUserData);
  };
  return (
    <div className="px-4 py-2 text-center w-[27rem]">
      <h1 className="text-2xl">Edit Profile</h1>{" "}
      <form onSubmit={updateHandler}>
        {" "}
        <div className="flex justify-center my-2 relative">
          {formData?.selectedImage ? (
            <img
              src={formData.selectedImage}
              alt=""
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <img
              src={user.avatarUrl}
              alt=""
              className="w-16 h-16 rounded-full"
            />
          )}
          <label
            className="absolute bg-white rounded-full bottom-0 right-40 px-1 cursor-pointer"
            onClick={handleImageSelect}
          >
            <BiImageAdd size={28} />
          </label>
        </div>
        <div className="flex flex-wrap gap-1 justify-center">
          <div className="">
            <label htmlFor="first-name">
              First Name:{" "}
              <input
                type="text"
                name="firstName"
                className="border-2 px-1 rounded-lg"
                value={formData.firstName}
                onChange={formDataInputHandler}
              />
            </label>
          </div>

          <div className="my-2">
            <label htmlFor="">
              Last Name:{" "}
              <input
                type="text"
                name="lastName"
                className="border-2 px-1 rounded-lg"
                value={formData.lastName}
                onChange={formDataInputHandler}
              />
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="bio">
            <textarea
              name="bio"
              id="bio"
              value={formData.bio}
              className="w-full my-1 px-3 py-2"
              onChange={formDataInputHandler}
            ></textarea>
          </label>
        </div>
        <div className="flex justify-around">
          <button
            className="border-2 px-3 py-1 rounded-lg"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </button>
          <button className="border-2 px-3 py-1 rounded-lg" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserProfile;
