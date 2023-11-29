import axios from "axios";

const getAllusers = async () => await axios.get("/api/users");

const getUserByUsername = async (username) =>
  await axios.get(`/api/users/${username}`);

const editUserData = (userData, token) =>
  axios.post(
    `/api/users/edit`,
    { userData },
    {
      headers: { authorization: token },
    }
  );

const getBookmark = async (token) =>
  await axios.get(`/api/users/bookmark`, {
    headers: { authorization: token },
  });

const addBookmarkHandler = async (postId, token) =>
  await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );

const removeBookmarkHandler = async (postId, token) =>
  await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );

const followHandler = async (followUserId, token) =>
  await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );

const unFollowHandler = async (unFollowUserId, token) =>
  await axios.post(
    `/api/users/unfollow/${unFollowUserId}`,
    {},
    { headers: { authorization: token } }
  );

export {
  getAllusers,
  getUserByUsername,
  addBookmarkHandler,
  removeBookmarkHandler,
  getBookmark,
  followHandler,
  unFollowHandler,editUserData
};
