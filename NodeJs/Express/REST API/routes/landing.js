import express from "express";

export const landingRouter = express.Router();

landingRouter.get("", (req, res) => {
  console.log("Welcome to landing");
  res.send("Welcome");
});
