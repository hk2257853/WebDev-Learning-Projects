import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

// 2nd part of parameter (functions) defined in controller folder(posts) - Better code management.
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
