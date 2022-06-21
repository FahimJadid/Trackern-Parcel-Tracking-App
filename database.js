import mongoose from "mongoose";

// DB
const uri = "mongodb://localhost:27017/Trackern";
const options = {};

const connectDB = () => {
  mongoose.connect(uri, options, (err, db) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  });
};

export default connectDB;
