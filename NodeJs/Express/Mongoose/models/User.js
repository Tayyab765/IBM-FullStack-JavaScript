import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  job: String,
  city: String,
  age: String,
});

export const User = mongoose.model("User", userSchema);

