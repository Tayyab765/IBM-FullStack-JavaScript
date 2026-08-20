import express from "express";

import { userRouter } from "../routes/UserRoutes.js";
import { loginRouter } from "../routes/login.js";
import { landingRouter } from "../routes/landing.js";
import { logger } from "../middlewares/logger.js";

export function startServer() {
  const server = express();

  server.use(logger);
  server.use(express.json());
  server.use("/", landingRouter);
  server.use("/users", userRouter);
  server.use("/login", loginRouter);

  server.listen(3000, () => {
    console.log("Express started");
  });
}
