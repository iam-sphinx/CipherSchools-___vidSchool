import express from "express";
import {
  deleteUser,
  dislikevideo,
  getUser,
  likeVideo,
  updateUser,
} from "../controllers/User.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update user
router.put("/:id", verifyToken, updateUser);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get a user
router.get("/find/:id", getUser);

//like a video
router.put("/like/:videoId", verifyToken, likeVideo);

//dislike a video
router.put("/dislike/:videoId", verifyToken, dislikevideo);

export default router;
