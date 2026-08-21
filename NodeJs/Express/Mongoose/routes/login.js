import express from "express";

import { validate, verify } from "../middlewares/auth.js";

export const loginRouter = express.Router();

loginRouter.post("/", validate, verify, (req, res) => {
  // const { email, password } = req.body;
  // console.log(first);

  console.log("Login page");
  res.send("Login Sucessful");
});
