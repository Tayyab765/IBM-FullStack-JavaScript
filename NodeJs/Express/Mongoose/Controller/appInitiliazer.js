import express from "express";

import { userRouter } from "../routes/UserRoutes.js";
import { loginRouter } from "../routes/login.js";
import { landingRouter } from "../routes/landing.js";
import { logger } from "../middlewares/logger.js";

import mongoose from "mongoose";

export function startServer() {
  const server = express();
  server.use(logger);
  server.use(express.json()); 

  mongoose
    .connect("mongodb://localhost:27017/fullStackClass")
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch((error) => {
      console.log(`Error occured ${error}`);
    });

  
  server.use("/", landingRouter);
  server.use("/users", userRouter);
  server.use("/login", loginRouter);

  

  server.listen(3000, () => {
    console.log("Express started");
  });
}
