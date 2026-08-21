import express from "express";
import { User } from "../models/User.js";

export const landingRouter = express.Router();

landingRouter.get("", (req, res) => {
  console.log("Welcome to landing");
  res.send("Welcome");
});

landingRouter.get("/job/:job", async (req, res) => {
  const user = await User.find({
    job: req.params.job,
  });
  res.json(user);
});
