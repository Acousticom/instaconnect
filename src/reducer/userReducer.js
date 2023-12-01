export const userInitialState = {
  user: [],
  bookmarks: [],
  userDetails: {},
};
export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_USERS": {
      return { ...state, user: payload };
    }
    case "GET_USER_DETAILS": {
      return { ...state, userDetails: payload };
    }
    case "ADD_BOOKMARK": {
      return { ...state, bookmarks: payload };
    }
    case "GET_BOOKMARK": {
      return { ...state, bookmarks: payload };
    }
    case "REMOVE_BOOKMARK": {
      return { ...state, bookmarks: payload };
    }
    case "UPDATE_FOLLOW_USER": {
      return {
        ...state,
        user: state.user.map((person) => {
          const updatedUser = payload?.find(({ _id }) => _id === person._id);
          return updatedUser ? updatedUser : person;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
