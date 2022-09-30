import mongoose from "mongoose";
import { user_data } from "../utils/config.js";

const url = user_data;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  email: { type: String, require: true }
});

export const user_model = mongoose.model("user_data", userSchema)