import express from "express";

import { checkAuth } from "../middlewares/auth.js";
import { User } from "../models/User.js";

export const userRouter = express.Router();

userRouter.get("/", checkAuth, async (req, res) => {
  console.log("Users get");
  let result = await User.find();
  for (let [key, value] of Object.entries(req.query)) {
    if (key === "minAge") {
      result = result.filter((user) => Number(user.age >= Number(value)));
    } else {
      result = result.filter(
        (user) => user[key].toLocaleLowerCase() === value.toLocaleLowerCase(),
      );
    }
    console.log(`${key} , ${value}`);
  }
  res.send(result);
});

userRouter.get("/:id", async (req, res) => {
  const user = await User.findOne({
    id: Number(req.params.id),
  });
  console.log("User get with parameter");
  res.json(user);
});

userRouter.post("/", async (req, res) => {
  const user = await User.create(req.body);
  console.log("User Post page");
  res.status(201).json(user);
});

userRouter.put("/:id", async (req, res) => {
  const user = await User.findOneAndUpdate(
    { id: Number(req.params.id) },
    req.body,
    { new: true },
  );

  console.log("User put page");

  res.status(200).json(user);
});

userRouter.delete("/", (req, res) => {
  console.log("User delete page");
  res.send("Delete Users");
});
