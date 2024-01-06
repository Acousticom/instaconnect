import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import ProfileImage from "../ProfileImage";
import { BiImageAdd, BsEmojiSmile, MdOutlineCancel } from "../../assests/icons";
import EmojiPicker from "emoji-picker-react";
import { RiWaterFlashLine } from "react-icons/ri";
import { usePost } from "../../context/postContext";

const CreatePost = () => {
  const { currentUser } = useAuth();
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { addUserPost } = usePost();

  const handleImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    };
    input.click();
  };
  const handleEmojiPicker = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = postContent + emoji;
    setPostContent(updatedContent);
    setShowEmojiPicker(false);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      comments: [],
      description: postContent,
      image: selectedImage,
      userId: currentUser._id,
    };
    addUserPost(postData);
    setPostContent('')
    setSelectedImage('')
  };

  return (
    <div className="">
      <form
        className="w-full border-2 px-6 py-4 my-5 rounded-lg sScreens:px-1"
        onSubmit={submitHandler}
      >
        <div className="flex">
          <ProfileImage image={currentUser.avatarUrl} />
          <textarea
            placeholder="What's in your mind?"
            className="px-2 py-2 border-none focus:outline-none h-28 resize-none"
            value={postContent}
            onChange={(event) => setPostContent(event.target.value)}
          ></textarea>
        </div>

        {selectedImage && (
          <div className="relative">
            <img src={selectedImage} alt="" />
            <button
              className="absolute top-2 right-2 bg-white rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <MdOutlineCancel size={26} />
            </button>
          </div>
        )}
        <div className="flex items-center justify-between my-3">
          <div className="flex gap-5 items-center sScreens:gap-2">
            <BiImageAdd
              size={34}
              onClick={handleImageSelect}
              className="cursor-pointer"
            />
            <div>
              <BsEmojiSmile
                size={27}
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="cursor-pointer"
              />
              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiPicker} />
              )}
            </div>
          </div>
          <button
            className="border-2 text-xl px-6 py-1 rounded-lg bg-primaryColor text-white"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
