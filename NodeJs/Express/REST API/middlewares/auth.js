export function checkAuth(req, res, next) {
  const loggedIn = true;
  if (loggedIn) {
    next();
  } else {
    res.status(401).send("Unauthorized User");
  }
}

export function validate(req, res, next) {
  console.log("validation started");
  const { email, password } = req.body;
  if (!email.includes("@") || !email.includes(".com")) {
    res.status(400).send("Invalid email");
  } else if (password.length < 8) {
    res.status(400).send("Passowrd must be atleast 8 charecters long!");
  } else {
    console.log("validation sucessful");
    next();
  }
}

export function verify(req, res, next) {
  console.log("Verificaon started");
  const { email, password } = req.body;
  if (email === "tayyab@gmail.com" && password === "12345678") {
    next();
  } else {
    res.status(400).send("Invalid credencials");
  }
}
