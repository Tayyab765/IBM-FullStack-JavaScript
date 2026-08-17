import http from "http";
import env from "dotenv";

env.config();
const port = process.env.SERVER_PORT;

const myserver = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home page");
  } else if (req.url === "/contact") {
    res.end("Welcome to contact page");
  } else if (req.url === "/feedback") {
    res.end("Welcome to feedbackpage");
  } else {
    res.end("page not found");
  }
  console.log(`Request object url is ${req.url}`);
});

myserver.listen(port, () => {
  console.log(`server is listing on port http://localhost:${port}/`);
});
