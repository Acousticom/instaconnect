import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useUser } from "../../context/userContext";
import { SlOptionsVertical } from "../../assests/icons";

const CommentsList = ({
  comment,
  editCommentHandler,
  deleteCommentHandler,
}) => {
  const [showCommentsOptions, setShowCommentsOptions] = useState(false);
  const { currentUser } = useAuth();
  const { userState } = useUser();
  const { user } = userState;

  // console.log(user);
  const isCurrentUserCommented = comment?.username === currentUser?.username;
  const commentedUser = user.find(
    (person) => person.username === comment.username
  );
  // console.log(isCurrentUserCommented);
  // console.log(commentedUser);
  // console.log(comment);
  // console.log(currentUser);
  return (
    <div>
      <div className="flex items-start gap-3 my-2">
        {isCurrentUserCommented ? (
          currentUser.avatarUrl ? (
            <img
              src={currentUser?.avatarUrl}
              alt=""
              className="h-9 w-9 rounded-full"
            />
          ) : (
            <img
              src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
              alt=""
              className="w-9 h-9 rounded-full"
            />
          )
        ) : commentedUser?.avatarUrl ? (
          <img
            src={commentedUser?.avatarUrl}
            alt=""
            className="h-9 w-9 rounded-full"
          />
        ) : (
          <img
            src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
            alt=""
            className="w-9 h-9 rounded-full"
          />
        )}
        <div className="bg-gray-200 w-full py-1 px-2 rounded-xl">
          <div className="flex justify-between items-center">
            {isCurrentUserCommented ? (
              <p className="font-semibold block">{currentUser.username}</p>
            ) : commentedUser ? (
              <p className="font-semibold block">{commentedUser.username}</p>
            ) : (
              <p>Unknown</p>
            )}

            <div className="relative">
            {isCurrentUserCommented && (
              <button >
                <SlOptionsVertical
                  onClick={() => setShowCommentsOptions(!showCommentsOptions)}
                />
              </button>
            )}
            {showCommentsOptions && (
              <div className="absolute right-2 border-2 rounded-lg bg-white px-3 py-2">
                <div className="cursor-pointer rounded-lg px-3 py-1   hover:bg-gray-200"
                  onClick={() => {
                    setShowCommentsOptions(false);
                    editCommentHandler(comment);
                  }}
                >
                  Edit
                </div>
                <div className="cursor-pointer rounded-lg px-3 py-1   hover:bg-gray-200" onClick={() => deleteCommentHandler(comment)}>Delete</div>
              </div>
            )}
            </div>
          </div>
          <p>{comment.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsList;
