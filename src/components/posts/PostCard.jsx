import React, { useState } from "react";
import ProfileImage from "../ProfileImage";
import { useUser } from "../../context/userContext";
import { useAuth } from "../../context/authContext";
import {
  SlOptionsVertical,
  AiOutlineLike,
  AiFillLike,
  BsBookmark,
  BsFillBookmarkFill,
  GoComment,
} from "../../assests/icons";
import { usePost } from "../../context/postContext";
import Comments from "../comments/Comments";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import EditPostForm from "./EditPostForm";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const { userState, userAddBookmarkHandler, userRemoveBookmarkHandler } =
    useUser();
  const { user, bookmarks } = userState;
  const { currentUser } = useAuth();
  const { likePostHandler, dislikePostHandler,deleteUserPost } = usePost();
  const [showComments, setShowComments] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal,setShowEditModal]=useState(false)
  // console.log(post);
  // console.log(user);
  // console.log(currentUser);
  const filteredPostCard = user?.find(
    (person) => person.username === post.username
  );
  const isLiked = post?.likes?.likedBy?.some(
    (likedUser) => likedUser?.username === currentUser?.username
  );
  const isBookmarked = bookmarks?.some((bookmark) => bookmark._id === post._id);
  const currentUserPost = post?.username === currentUser?.username;
  return (
    <>
    <div className="border-2  px-6 py-4 my-5 rounded-md  shadow-lg">
      <div className="flex items-center justify-between">
        <div
          className="flex gap-8 items-center cursor-pointer"
          onClick={() => navigate(`/profile/${filteredPostCard?.username}`)}
        >
          {filteredPostCard && (
            <ProfileImage image={filteredPostCard?.avatarUrl} />
          )}
          <div className="leading-none font-semibold">
            <p>
              {filteredPostCard?.firstName} {filteredPostCard?.lastName}
            </p>
            <p className="text-gray-400">{filteredPostCard?.username} </p>
          </div>
        </div>
        <div className="relative">
          {currentUserPost && (
            <SlOptionsVertical
              onClick={() => setShowOptions(!showOptions)}
              className="cursor-pointer"
            />
          )}
          <div className="border-2">
            {showOptions && (
              <div className="absolute right-2 border-2 rounded-lg bg-white px-3 py-2">
                <div className="cursor-pointer rounded-lg px-3 py-1   hover:bg-gray-200" onClick={()=>setShowEditModal(true)}>
                  Edit
                </div>
                <div className="cursor-pointer rounded-lg px-3 py-1   hover:bg-gray-200" onClick={()=>deleteUserPost(post._id)}>
                  Delete
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="py-2">{filteredPostCard && post?.description}</p>
      {filteredPostCard && (
        <img src={post?.image} alt="" className="w-full my-4 rounded-md" />
      )}

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <div>
              {isLiked ? (
                <button onClick={() => dislikePostHandler(post._id)}>
                  <AiFillLike size={28} />
                </button>
              ) : (
                <button onClick={() => likePostHandler(post._id)}>
                  <AiOutlineLike size={28} />
                </button>
              )}
            </div>
            <p className="text-lg font-medium">{post?.likes.likeCount}</p>
          </div>
          <div>
            <GoComment
              size={28}
              onClick={() => setShowComments(!showComments)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div>
          {isBookmarked ? (
            <button onClick={() => userRemoveBookmarkHandler(post._id)}>
              <BsFillBookmarkFill size={28} />
            </button>
          ) : (
            <button onClick={() => userAddBookmarkHandler(post._id)}>
              <BsBookmark size={28} />
            </button>
          )}
        </div>
      </div>
      <div>{showComments && <Comments post={post} />}</div>
    </div>
    <Modal showModal={showEditModal} setShowModal={setShowEditModal}>
      <EditPostForm post={post} setShowModal={setShowEditModal}/>
    </Modal>
    </>
  );
};

export default PostCard;
