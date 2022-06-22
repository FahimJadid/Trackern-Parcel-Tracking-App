"use strict";
import express from "express";
import configureUser from "./controllers/indexController.js";
import connectDB from "./database.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const port = process.env.PORT || "3000";

app.use(express.json());

// DB Config
connectDB();

configureUser(app);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
