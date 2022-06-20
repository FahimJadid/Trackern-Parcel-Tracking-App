"use strict";
import express from "express";
import models from "./models/index_model.js";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || "3000";

app.use(express.json());
// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

const log = (msg) => {
  console.log(msg);
};

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

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const body = req.body;
  const user = new models.UserModel({
    userName: body.userName,
    createdAt: new Date(),
  });

  user
    .save()
    .then((savedUser) => {
      res.status(200).send("User Saved, id: " + savedUser._id);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

log(models);
