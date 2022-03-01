import { combineReducers } from "redux";

import posts from "./posts";

export default combineReducers({ posts });

// i am importing posts, and doing posts: posts in that funtion (key value pair)
// but key value r same here, so one is enough

// QUESTION: is this the stored data/state?
