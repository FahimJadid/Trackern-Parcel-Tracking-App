"use strict";
import express from "express";
import configureUser from "./controllers/indexController.js";
import connectDB from "./database.js";

const app = express();
const port = process.env.PORT || "3000";

app.use(express.json());

// DB Config
connectDB();

configureUser(app);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
