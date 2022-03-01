import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// reducer is a funtion that takes in the
// current state and an action and returns something based on given action
export default (posts = [], action) => {
  // 1st parameter is an empty array?
  switch (action.type) {
    case UPDATE:
      /* action.payload is the updated post. post is unupdated */
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return posts;
  }
};
