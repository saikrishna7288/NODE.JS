# What is Routing in Node.js?
- Deciding how the server should respond based on the URL and HTTP method.
- eg :
- ```js
    When a user visits: http://localhost:3009/projects

    The server checks:
    - What is the URL? → /projects
    - What is the method? → GET
    - Then it decides what response to send.

# Routing with Native HTTP Module(without Express).
- We use http.createServer()
- We check req.url
- We check req.method
- We manually write if-else conditions

# How It Works Internally.
- 1️⃣ Client sends request
- 2️⃣ Server receives request
- 3️⃣ req.url → tells path
- 4️⃣ req.method → tells request type
- 5️⃣ Based on condition → server sends response.
- eg :
- ```js 
    const http = require('http');

    const server = http.createServer((req,  res) => {

        const URL = req.url;

        if (URL === "/") {
            res.writeHead(200, {    "Content-Type": "text/ plain" });
            res.write("Hello World\n");
            res.end("Home Page");

        } else if (URL === "/projects") {
            res.writeHead(200, {    "Content-Type": "text/html" });
            res.end("<h1>Hello Node.js</    h1><p>This is an HTML   response</p>");

        } else if (URL === "/jsondata") {
            const data = { name: "John",    city: "Hyderabad" };
            res.writeHead(200, {    "Content-Type": "application/  json" });
            res.end(JSON.stringify(data));

        } else {
         res.writeHead(404, {    "Content-Type": "text/ plain" });
            res.end("This page cannot be    found");
        }

    });

    const port = 3009;

    server.listen(port, () => {
        console.log(`Server is listening    on port ${port}`);
    });
