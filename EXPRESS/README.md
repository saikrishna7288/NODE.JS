# WHAT IS EXPRESS?
- A lightweight Node.js framework for building APIs and web servers easier and also faster.
- Express is built on top of Node’s http module.
- It handles Routing,middleware and request/response.

# why do we need express?
- For building clean,readable,scalable and industry standard programs.

# Differnce b/w http & express codes.
- http code:
- ```js
    const http = require("http");
    const server = http.createServer((req,  res) => {
    if (req.url === "/users" && req.  method === "GET") {
        res.end("Users list");
    }
    });
    server.listen(3000);

- using express :
- ```js
    app.get("/users", (req, res) => {
        res.send("Users list");
    });

# Creating the Backend Server.

- install Express.
- commands : 1.npm init -y ,2.npm install express.

- Create index.js :
- ```js
    const express = require("express");
    const app = express();
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });


