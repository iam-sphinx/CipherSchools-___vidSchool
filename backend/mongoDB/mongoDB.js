import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_DB_URL, { useNewUrlParser: true })
    .then(() => {
      console.log("Database is connected successfully");
    })
    .catch((error) => {
      console.log({ error: error });
    });
};

export default connectDB;
