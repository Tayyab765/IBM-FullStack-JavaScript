import express from "express";

export const userRouter = express.Router();

userRouter.get("/", checkAuth, (req, res) => {
  console.log("Users get");
  let result = users;
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

userRouter.get("/:id", (req, res) => {
  console.log("User get with parameter");
  res.json(users.filter((user) => Number(user.id) === Number(req.params.id)));
});

userRouter.post("/", (req, res) => {
  console.log("User Post page");
});

userRouter.put("/", (req, res) => {
  console.log("User put page");
  res.send("Put Users");
});

userRouter.delete("/", (req, res) => {
  console.log("User delete page");
  res.send("Delete Users");
});
