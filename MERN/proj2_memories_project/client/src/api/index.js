import axios from "axios";

const url = "http://localhost:1300/posts";

export const fetchPosts = () => axios.get(url);
// will return all posts in database

export const createPost = (newPost) => axios.post(url, newPost);
// will post on server at /posts route(& the funct there will create a newpost data in DB )

export const updatePost = (id, updatePost) =>
  axios.patch(`${url}/${id}`, updatePost);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
