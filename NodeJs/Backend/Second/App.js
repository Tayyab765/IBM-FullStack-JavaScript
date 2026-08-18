import http from "http";
import dotenv from "dotenv";

dotenv.config();

const users = {
  user1: {
    name: "Tayyab Attiq",
    email: "tayyab@example.com",
    job: "Software Engineer",
    age: 22,
  },
  user2: {
    name: "Ayesha Khan",
    email: "ayesha@example.com",
    job: "Data Scientist",
    age: 25,
  },
  user3: {
    name: "Zain Malik",
    email: "zain@example.com",
    job: "UI/UX Designer",
    age: 28,
  },
};

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
        return res.end(JSON.stringify(users));

      case "PUT":
        res.statusCode = 204;
        return res.end("Users URL triggered using PUT method");

      case "DELETE":
        res.statusCode = 204;
        return res.end("Users URL triggered using DELETE method");

      case "POST": {
        let tempUser = "";
        req.on("data", (chunk) => {
          tempUser += chunk;
        });
        req.on("end", () => {
          const parsedData = JSON.parse(tempUser);
          if (typeof parsedData === "string") {
            parsedData = JSON.parse(parsedData);
          }

          let userkey = `user4`;
          console.log("Parsed Incoming Payload:", parsedData);
          users[userkey] = {
            name: parsedData.name || "Unknown",
            email: parsedData.email || "No Email",
            job: parsedData.job || "Unemployed",
            age: parsedData.age ? Number(parsedData.age) : 0,
          };

          return res.end(JSON.stringify(users));
        });
        return;
      }
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
