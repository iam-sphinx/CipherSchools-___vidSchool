import express from "express";
import dotenv from "dotenv";
import connectDB from "./mongoDB/mongoDB.js";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comment.js";
import videoRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

//dotenv config
dotenv.config();

//middlewares
const app = express();
app.use(cookieParser());
app.use(express.json());

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Somethis went wrong !";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

//PORT
app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`server is active on port http://localhost:${process.env.PORT}`);
});
