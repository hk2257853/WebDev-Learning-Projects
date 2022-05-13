import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

// 2nd part of parameter (functions) defined in controller folder(posts) - Better code management. Latter I added auth as para. basically for what actions I need auth. getPosts - everyone can see
router.get("/", getPosts);
router.post("/", auth, createPost); // *** wrote .get in place of .post, took 35 min to find n fix!!!
router.patch("/:id", auth, updatePost); // update
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

// doing like this makes the code more maintainable. the main logic is in controllers.

export default router;
