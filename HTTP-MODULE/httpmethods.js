const http=require("http");

//TO convert the JSON request to JS object.
function getRequestBody(req,callback){
    let body="";
    req.on("data",chunk=> body+=chunk);
    req.on("end",callback(JSON.parse(body)));
}

// FAKE DB
let users = [{ id: 1, name: "BOB", age: 20 }];

//server
const server=http.createServer((req,res)=>{
    
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200,{"content-Type":"text"});
        res.end("GET & /");
    }

    // GET → read users
    else if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
    }

    // POST → create user
    else if (req.method === "POST" && req.url === "/users") {
    getRequestBody(req, data => {
        users.push(data);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
    });
    }

    // PUT → replace user
    else if (req.method === "PUT" && req.url.startsWith("/users/")) {
        const id = parseInt(req.url.split("/")[2]);
        getRequestBody(req, data => {
        users = users.map(u => u.id === id ? data : u);
        res.end(JSON.stringify(data));
        });
    }

    // PATCH → update user
    else if (req.method === "PATCH" && req.url.startsWith("/users/")) {
        const id = parseInt(req.url.split("/")[2]);
        getRequestBody(req, updates => {
        users = users.map(u =>
            u.id === id ? { ...u, ...updates } : u
        );
        res.end(JSON.stringify(updates));
        });
    }

    // Not found
    else {
        res.writeHead(404);
        res.end("Not Found");
    }
});
server.listen(3000);