export function logger(req, res, next) {
  console.log("Greetings to the middleware.");
  next();
}
