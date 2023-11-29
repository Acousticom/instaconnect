import { createContext, useContext, useEffect, useReducer } from "react";
import {
  deletePost,
  dislikeHandler,
  editPost,
  getAllPosts,
  likeHandler,
} from "../services/postServices";
import toast from "react-hot-toast";
import { postInitialState, postReducer } from "../reducer/postReducer";
import { useAuth } from "./authContext";
import {
  addComment,
  deleteComment,
  editComment,
} from "../services/commentServices";

const PostContext = createContext();
const PostProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(postReducer, postInitialState);
  const { token } = useAuth();

  const getPost = async () => {
    try {
      const response = await getAllPosts();
      const {
        status,
        data: { posts },
      } = response;
      if (status === 200) {
        postDispatch({ type: "GET_ALL_POST", payload: posts });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const likePostHandler = async (postId) => {
    try {
      const response = await likeHandler(postId, token);
      const {
        status,
        data: { posts },
      } = response;
      if (status === 201) {
        postDispatch({ type: "LIKE_POST", payload: posts });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const dislikePostHandler = async (postId) => {
    try {
      const response = await dislikeHandler(postId, token);
      const {
        status,
        data: { posts },
      } = response;
      if (status === 201) {
        postDispatch({ type: "DISLIKE_POST", payload: posts });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addPostCommentHandler = async ({ postId, commentData }) => {
    try {
      const response = await addComment(postId, commentData, token);
      const {
        status,
        data: { posts },
      } = response;
      if (status === 201) {
        postDispatch({ type: "ADD_NEW_COMMENT", payload: posts });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editUserComment = async ({ postId, commentId, commentData }) => {
    try {
      const {
        status,
        data: { posts },
      } = await editComment(postId, commentId, commentData, token);
      if (status === 200 || status === 201) {
        postDispatch({ type: "EDITED_COMMENT", payload: posts });
        toast.success("Comment edited");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteUserComment = async ({ postId, commentId }) => {
    try {
      const {
        status,
        data: { posts },
      } = await deleteComment(postId, commentId, token);
      if (status === 200 || status === 201) {
        postDispatch({ type: "DELETE_COMMENT", payload: posts });
        toast.success("Comment deleted");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteUserPost = async (postId) => {
    try {
      const { posts } = await deletePost(postId, token);
      postDispatch({ type: "DELETE_POST", payload: posts });
      toast.success("Post Deleted");
    } catch (error) {
      toast.error("Post can not be delete");
    }
  };

  const editUserPost=async(postData)=>{
    try {
      const {data:{posts}}=await editPost(postData,token)
      postDispatch({type:"EDITED_POSTS",payload:posts})
      toast.success("Post edited sucessfully")
      console.log(posts)
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(() => {
    getPost();
  }, []);
  return (
    <PostContext.Provider
      value={{
        postState,
        likePostHandler,
        dislikePostHandler,
        addPostCommentHandler,
        editUserComment,
        deleteUserComment,
        deleteUserPost,
        editUserPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);
export { PostProvider, usePost };
