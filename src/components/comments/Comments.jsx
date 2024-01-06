import React, { useState } from "react";
import CommentsList from "./CommentsList";
import { useAuth } from "../../context/authContext";
import { MdSend } from "../../assests/icons";
import { usePost } from "../../context/postContext";

const Comments = ({ post }) => {
  const { currentUser } = useAuth();
  const [commentInput, setCommentInput] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const { addPostCommentHandler, editUserComment,deleteUserComment } = usePost();
  // console.log(currentUser);
  const submitCommentHandler = (event) => {
    event.preventDefault();
    if (commentInput.length > 0) {
      addPostCommentHandler({
        postId: post?._id,
        commentData: { text: commentInput },
      });
      setCommentInput("");
    }
  };

  const editCommentHandler = (comment) => {
    setEditingComment(comment);
    setCommentInput(comment.text);
  };

  const updateCommentHandler = () => {
    editUserComment({
      postId: post?._id,
      commentId: editingComment._id,
      commentData: {
        text: editingComment.text,
      },
    });
    setEditingComment(null);
    setCommentInput("");
  };

  const deleteCommentHandler=(comment)=>{
    deleteUserComment({
      postId:post?._id,
      commentId:comment?._id
    })
    console.log(comment)
  }
  return (
    <div>
      <div className="flex items-center gap-2">
        <div>
          {currentUser.avatarUrl ? (
            <img
              src={currentUser.avatarUrl}
              alt=""
              className="h-11 w-11 rounded-full "
            />
          ) : (
            <img
              src="https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
              alt=""
            />
          )}
        </div>
        <form onSubmit={submitCommentHandler} className="relative w-full z-0">
          <input
            className="border-2 px-3 py-1 rounded-xl w-full z-0"
            placeholder="Add a new comment"
            value={editingComment ? editingComment.text : commentInput}
            onChange={(event) =>
              editingComment
                ? setEditingComment({
                    ...editingComment,
                    text: event.target.value,
                  })
                : setCommentInput(event.target.value)
            }
          />
          {editingComment ? (
            <button
              className="absolute right-5 top-1 z-0"
              onClick={updateCommentHandler}
            >
              Update
            </button>
          ) : (
            <button type="submit" className="absolute right-5 top-2">
              <MdSend size={20} />
            </button>
          )}
        </form>
      </div>
      {post.comments.map((comment) => (
        <CommentsList
        key={comment._id}
          comment={comment}
          editCommentHandler={editCommentHandler}
          deleteCommentHandler={deleteCommentHandler}
        />
      ))}
    </div>
  );
};

export default Comments;
