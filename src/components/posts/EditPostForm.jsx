import React, { useState } from "react";
import { MdOutlineCancel, BiImageAdd, BsEmojiSmile } from "../../assests/icons";
import EmojiPicker from "emoji-picker-react";
import { usePost } from "../../context/postContext";

const EditPostForm = ({ post, setShowModal }) => {
  const [updatedPostContent, setUpdatedPostContent] = useState(
    post.description
  );
  const [updatedSelectedImage, setUpdatedSelectedImage] = useState(post.image);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { editUserPost } = usePost();

  const handleImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUpdatedSelectedImage(imageUrl);
    };
    input.click();
  };

  const handleEmojiClick = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = updatedPostContent + emoji;
    setUpdatedPostContent(updatedContent);
    setShowEmojiPicker(false);
  };

  const editPostHandler = (event) => {
    event.preventDefault();
    const updatedPost = {
      ...post,
      description: updatedPostContent,
      image: updatedSelectedImage,
    };
    editUserPost(updatedPost)
    setShowModal(false)
  };
  return (
    <div className="sm:w-[26rem] w-[18rem] px-2 py-2">
      <p className="text-center text-2xl font-semibold">Edit Post </p>
      <form onSubmit={editPostHandler}>
        <textarea
          className="w-full h-28 px-4 py-2"
          value={updatedPostContent}
          onChange={(event) => setUpdatedPostContent(event.target.value)}
        ></textarea>
        {updatedSelectedImage && (
          <div className="relative">
            <img src={updatedSelectedImage} alt="" />
            <MdOutlineCancel
              size={23}
              className="bg-white absolute top-2 right-2 rounded-full cursor-pointer"
              onClick={() => setUpdatedSelectedImage(null)}
            />
          </div>
        )}
        <div className="flex gap-2 ">
          <BiImageAdd
            size={34}
            onClick={handleImageSelect}
            className="cursor-pointer"
          />
          <div>
            <BsEmojiSmile
              size={30}
              className="cursor-pointer"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
            {showEmojiPicker && (
              <div>
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            className="border-2 px-3 py-1 rounded-lg text-xl"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="border-2 px-3 py-1 rounded-lg text-xl"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
