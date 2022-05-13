import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

export default combineReducers({ posts, auth });

// i am importing posts, and doing posts: posts in that funtion (key value pair)
// but key value r same here, so one is enough

// QUESTION: is this the stored data/state?
