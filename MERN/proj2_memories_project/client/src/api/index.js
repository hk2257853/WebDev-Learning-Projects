import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:1300" });
// const url = "http://localhost:1300/posts";

API.interceptors.request.use((req) => {
  // I put it below... But this should work b4 anything else!!!! Took hrs to fix
  // will run for each request to send token to server (to know if user is logged in or not)
  if (localStorage.getItem("profile")) {
    // wrote token in place of profile!
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchPosts = () => API.get("/posts"); // http://localhost:1300 + /posts concatinated
// will return all posts in database

export const createPost = (newPost) => API.post("/posts", newPost);
// will post on server at /posts route(& the funct there will create a newpost data in DB )

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
