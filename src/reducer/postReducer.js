export const postInitialState = { posts: [] };

export const postReducer = (state, action) => {
  console.log(action.payload);
  console.log(state.posts);
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_POST": {
      return { ...state, posts: payload };
    }
    case "CREATE_NEW_POST": {
      return {
        ...state,
        posts: payload,
      };
    }
    case "LIKE_POST": {
      return { ...state, posts: payload };
    }
    case "DISLIKE_POST": {
      return { ...state, posts: payload };
    }
    case "ADD_NEW_COMMENT": {
      return { ...state, posts: payload };
    }
    case "EDITED_COMMENT": {
      return { ...state, posts: payload };
    }
    case "DELETE_COMMENT": {
      return { ...state, posts: payload };
    }
    case "DELETE_POST": {
      return { ...state, posts: payload };
    }
    default: {
      return state;
    }
  }
};
