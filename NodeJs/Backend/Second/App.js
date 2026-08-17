import http from "http";
import dotenv from "dotenv";

dotenv.config();

const myserver = http.createServer((req, res) => {
  console.log(req.method);

  if (req.url === "/") {
    return res.end("Welcome to home page of your server...");
  } else if (req.url === "/feedback") {
    return res.end("Welcome to feedback page of your server...");
  } else if (req.url === "/users") {
    switch (req.method) {
      case "GET":
        res.statusCode = 200;
        return res.end("Users URL triggered using GET method");

      case "PUT":
        res.statusCode = 204;
        return res.end("Users URL triggered using PUT method");

      case "DELETE":
        res.statusCode = 204;
        return res.end("Users URL triggered using DELETE method");

      case "POST":
        res.statusCode = 201;
        return res.end("Users URL triggered using POST method");

      default:
        res.statusCode = 405;
        return res.end("Unknown method found");
    }
    return res.end(`Welcome to users page`);
  } else if (req.url === "/contact") {
    switch (req.method) {
      case "GET":
        res.statusCode = 200;
        return res.end("Contact URL triggered using GET method");

      case "PUT":
        res.statusCode = 204;
        return res.end("Contact URL triggered using PUT method");

      case "DELETE":
        res.statusCode = 204;
        return res.end("Contact URL triggered using DELETE method");

      case "POST":
        res.statusCode = 201;
        return res.end("Contact URL triggered using POST method");

      default:
        res.statusCode = 405;
        return res.end("Unknown method found");
    }
  } else {
    res.statusCode = 404;
    return res.end("Page not found");
  }
});

const port = process.env.SERVER_PORT || 5000;

myserver.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
