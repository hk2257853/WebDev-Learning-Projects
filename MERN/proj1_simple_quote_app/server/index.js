import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { model } from "./models/user.model.js";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());

const CONNECTION_URL = "mongodb://localhost:27017/first-app";
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("Couldn't connect");
    console.log(error);
  });

// in client its calling /api/users/register page in register users
app.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await model.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/login", async (req, res) => {
  const user = await model.findOne({
    password: req.body.password,
    email: req.body.email,
  });

  if (user) {
    const token = jwt.sign(
      { name: user.name, email: req.body.email },
      "secret"
    ); // secret part needs to be secure

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

// // TODO: understand these lines with my notes, then checkout that DB setup. For atlas
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.listen(1300, () => {
  console.log("Server started on 1300");
});
