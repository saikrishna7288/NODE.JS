# WHAT IS EXPRESS?
- A lightweight Node.js framework for building APIs and web servers easier and also faster.
- Express is built on top of Node’s http module.
- It handles Routing,middleware and request/response.

# why do we need express?
- To over come the problems of the node.js like :
- ```js
    Manual routing
    No body parsing
    No middleware
    Hard to maintain large apps
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

# Express App LifeCycle
- 1.Client sends request.
- 2.Request enters Express server(Express receives it using the HTTP module).
- 3.Middleware executes(Middleware can : log request,authenticate user,parse JSON).
- 4.Routing (Express checks which route matches).
- 5.Route handler processes request.
- 6.Response sent to client.
- 7.Error handling middleware (if needed).
- example:
- ```js
    Instagram Login Scenerio.
    instagram.com/login.
    1️⃣ Browser sends request
    2️⃣ Middleware checks authentication
    3️⃣ Express routes to /login
    4️⃣ Server checks database
    5️⃣ Sends response

# Creating Express server.
- ```js
    // import express
    const express = require("express");

    // create express app
    const app = express();

    // define route
    app.get("/", (req,res)=>{
     res.send("Hello from Express server!");
    });

    // define port
    const PORT = 3000;

    // start server
    app.listen(PORT, ()=>{
        console.log(`Server running on http://localhost:${PORT}`);
    });
    // Run Server : node server.js
    //Output: Server running on http://localhost:3000

# What is Middleware?
- Middleware is a function that runs between request and response to process data before reaching the route handler.
- example :
- ```js
    app.use((req,res,next)=>{
    console.log("middleware executed");
        next();
    });

# Handling Request and Response.
# Request Object (req)
- Contains data sent by client.
- examples:
- ```js
    req.params
    req.query
    req.body
    req.headers
    - 1. req.params:
- 1.req.params
- Used when data is part of the URL path.
- ex scenerio:
- ```js
    app.get("/user/:id",(req,res)=>{
        console.log(req.params.id);
    });
    //input url : localhost:3000/user/10
    // output : 10

- 2.req.query
- Used when data is sent in the URL after ?.
- ex:
- ```js
    ex:amazon.com/search?product=laptop&price=50000
    route :
    app.get("/search", (req, res) => {
      res.send(req.query);
    });

- 3. req.body
- Used when data is sent inside the request body (mostly POST/PUT).
- ex:
- ```js
    // first enable JSON parsing
    app.use(express.json());
    //example
    app.post("/register", (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        res.send("User registered: " + name);
    });
    // client  send JSON
    {
    "name":"Sai",
    "email":"sai@gmail.com"
    }
    // Server receives it using req.body.
    // Real-life example:Signup form.

# JSON.stringify() vs JSON.parse()
- ```js
    | Function           | Purpose                      |
    | ------------------ | ---------------------------- |
    | `JSON.stringify()` | Convert object → JSON string |
    | `JSON.parse()`     | Convert JSON string → object |

# Middleware vs Route Handler
- 1.Middleware: A function that runs before the route handler.
- it can:
- ```js
    modify request
    check authentication
    log requests
    validate data
- example:
- ```js
    app.use((req, res, next) => {

        console.log("Request received");

        next(); // go to next function
    });
- 2.Route Handler:The function that handles the actual request and sends the response.
- ex:
- ```js
    app.get("/", (req, res) => {
        res.send("Welcome");
    });

# Response Object (res) 
- Used to send data back.
- methods :
- ```js
    res.send()
    res.json()
    res.status()
    res.redirect()
- ex:
- ```js
    app.get("/data",(req,res)=>{
        res.json({
            name:"Sai",
            course:"CSE AIML"
        });
    });
    /* o/p : {
    name:"Sai",
    course:"CSE AIML"
    }*/
# Why Express is Better than Node HTTP    
- ```js 
    | Feature        | Node HTTP      | Express          |
    | -------------- | -------------- | ---------------- |
    | Routing        | manual if/else | built-in routing |
    | JSON parsing   | manual         | automatic        |
    | Middleware     | not available  | available        |
    | Code structure | messy          | modular          |
    | Error handling | manual         | structured       |

#  What is JSON Parsing?
- JSON Parsing means converting JSON data into a JavaScript object so that the server can read and use the data.
- Clients (browser, mobile app, frontend like React) usually send data in JSON format.
- The server must parse (convert) that JSON into a JavaScript object to access the values.
- Simple Definition: JSON Parsing = Converting JSON text → JavaScript object.
- example :
- JSON Data
- ```js
    {
        "name": "Sai Krishna",
        "age": 21,
        "course": "CSE-AIML"
    }
- After parsing it becomes:(jS Object)
- ```js
    {
        name: "Sai Krishna",
        age: 21,
        course: "CSE-AIML"
    }
    // So the server can access the values : user.name,user.age
- In Express we use :
- ```js
    app.use(express.json());// Convert JSON → JavaScript object.
