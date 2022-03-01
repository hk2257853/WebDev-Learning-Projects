import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true /*Unique values for email */,
    },
    password: { type: String, required: true },
    quote: { type: String },
  },
  { collection: "user_data" }
  // Some mistake while debugging this time:
  // 1) error cleary said mongodbserver error. Yet I was checking fectch stuff as mention in console(server was crashing b4 fetching)
  // error saidd collation... so should have check this file. Anyways its alright now.
);

const model = mongoose.model("UserData", user);

export { model };
