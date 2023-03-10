import express from "express";
import { addVideo, deleteVideo, getVideo, search, updateVideo } from "../controllers/Video.js";
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
router.put("/view/:id", addVideo)

//Search a video
router.get("/search", search)

export default router;
