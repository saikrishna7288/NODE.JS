//To create a server
const http = require('http');

const server = http.createServer((req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);

    res.writeHead(200, { "Content-Type": "text/plain" });

    let message = "hello node.js from http modules\n";

    if (req.method === "GET") {
        message += "This is a GET request";
    } 
    else if (req.method === "POST") {
        message += "This is a POST request";
    } 
    else {
        message += "Other HTTP method";
    }

    res.end(message);  // Only ONE res.end()
});

const port = 3007;

server.listen(port, () => {
    console.log(`Server is now listening on port ${port}`);
});