import axios from "axios";

const getAllPosts = async () => await axios.get("/api/posts");

const likeHandler = async (postId, token) =>
  await axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: token } }
  );
const dislikeHandler = async (postId, token) =>
  await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    { headers: { authorization: token } }
  );

const deletePost = async (postId, token) => {
  try {
    const response = await axios.delete(`/api/posts/${postId}`, {
      headers: { authorization: token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const editPost = async (postData, token) =>
    await axios.post(
      `/api/posts/edit/${postData._id}`,
      { postData },
      { headers: { authorization: token } }
    );

export { getAllPosts, likeHandler, dislikeHandler, deletePost, editPost };
