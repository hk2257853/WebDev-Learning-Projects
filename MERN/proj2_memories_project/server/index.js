import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//app.use(express.json());

const PORT = process.env.PORT || 1300;

// will work for all localhost:.../posts   I have learnt this (user as eg)
app.use("/posts", postRoutes); //NOTE: routes need to be spefied after cors to avoid cors error
// ALSO: put "proxy": "http://localhost:1300", in package.json. I needed to connect to net too

// Connect to DB
//const CONNECTION_URL = "mongodb://localhost:27017/first-app";

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("Couldn't connect");
    console.log(error);
  });

app.listen(PORT, () => {
  console.log("Server started on 1300");
});
