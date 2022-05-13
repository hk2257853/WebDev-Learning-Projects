// Part of redux

import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

import * as api from "../api";

// here we needed it to be async...
// async(disptach) that returns another function. QUESTION: Why can't we do directly??
// redux thunk syntax
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    //const action = { type: "FETCH_ALL", payload: data }; // type & data
    dispatch({ type: FETCH_ALL, payload: data }); // dispatch in place of dispatch return
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data }); // if I comment this, I need to refresh the page to see the update
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
