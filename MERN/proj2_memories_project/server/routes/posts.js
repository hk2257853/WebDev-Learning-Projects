import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

// 2nd part of parameter (functions) defined in controller folder(posts) - Better code management.
router.get("/", getPosts);
router.post("/", createPost); // *** wrote .get in place of .post, took 35 min to find n fix!!!
router.patch("/:id", updatePost); // update
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
