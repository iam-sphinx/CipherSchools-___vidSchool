import express from "express";
import {
  addVideo,
  deleteVideo,
  getVideo,
  popularVideo,
  randomVideo,
  search,
  sub,
  tagSearch,
  updateVideo,
} from "../controllers/Video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//Create a video
router.post("/", verifyToken, addVideo);

//update a video
router.put("/:id", verifyToken, updateVideo);

//delete a video
router.delete("/:id", verifyToken, deleteVideo);

//get a video
router.get("/find/:id", getVideo);

//view increment
router.put("/view/:id", addVideo);

//subscribed channel video
router.get("/sub", verifyToken, sub);

//Search a video
router.get("/search", search);

//search by tag
router.get("/tags", tagSearch);

//random video
router.get("/random", randomVideo);

//popular Videos
router.get("/popular", popularVideo);

export default router;
