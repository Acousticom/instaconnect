import { createContext, useContext, useEffect, useReducer } from "react";
import {
  addBookmarkHandler,
  editUserData,
  followHandler,
  getAllusers,
  getBookmark,
  getUserByUsername,
  removeBookmarkHandler,
  unFollowHandler,
} from "../services/userServices";
import { userReducer, userInitialState } from "../reducer/userReducer";
import toast from "react-hot-toast";
import { useAuth } from "./authContext";

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const { token, setCurrentUser,currentUser } = useAuth();
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);

  const getUsers = async () => {
    try {
      const response = await getAllusers();
      const {
        status,
        data: { users },
      } = response;
      if (status === 200 || status === 201) {
        userDispatch({ type: "GET_ALL_USERS", payload: users });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchUserByUsername=async(username)=>{
    try {
        const {status,data:{user}}=await getUserByUsername(username)
        if(status===200||status===201){userDispatch({type:"GET_USER_DETAILS",payload:user})}
    } catch (error) {
      
    }
  }
  const editUserHandler = async (userData) => {
    try {
      const {
        status,
        data: { user },
      } = await editUserData(userData, token);
      if (status === 200 || status === 201) {
        setCurrentUser(user);
      }
      console.log(currentUser)
      toast.success("Profile edited sucessfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const userAddBookmarkHandler = async (postId) => {
    try {
      const response = await addBookmarkHandler(postId, token);
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200 || status === 201) {
        userDispatch({ type: "ADD_BOOKMARK", payload: bookmarks });
      }
      // console.log(status)
      toast.success("Added to bookmark");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const userRemoveBookmarkHandler = async (postId) => {
    try {
      const response = await removeBookmarkHandler(postId, token);
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200 || status === 201) {
        userDispatch({ type: "REMOVE_BOOKMARK", payload: bookmarks });
      }
      toast.success("Removed from bookmark");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserBookmarkHandler = async () => {
    try {
      const response = await getBookmark(token);
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200 || status === 201) {
        userDispatch({ type: "GET_BOOKMARK", payload: bookmarks });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const followUserHandler = async (postId) => {
    try {
      const response = await followHandler(postId, token);
      const {
        status,
        data: { followUser, user },
      } = response;
      if (status === 200 || status === 201) {
        userDispatch({ type: "UPDATE_FOLLOW_USER", payload: [followUser] });
        setCurrentUser(user);
        console.log(user);
      }
      toast.success(`You started following @${followUser?.username} `);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const unFollowUserHandler = async (postId) => {
    try {
      const {
        status,
        data: { followUser, user },
      } = await unFollowHandler(postId, token);
      if (status === 200 || status === 201) {
        userDispatch({ type: "UPDATE_FOLLOW_USER", payload: [followUser] });
        setCurrentUser(user);
      }
      toast.success(`You unfollowed @${followUser?.username} `);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    getUserBookmarkHandler();
  }, [token]);
  return (
    <UserContext.Provider
      value={{
        userState,
        userAddBookmarkHandler,
        userRemoveBookmarkHandler,
        getUserBookmarkHandler,
        followUserHandler,
        unFollowUserHandler,
        editUserHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);
export { UserProvider, useUser };
