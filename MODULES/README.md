# 1.HTTP MODULE.

# what is http?
- It is a protocal that allows the client to communicate with the server.
- It defines : How the request are sent.
               How the responses are returned.

- Node.js uses http to talk with outside world,without http there is no browser,API`s and no connection from frontend.

# HTTP Request-Response Cycle.
- understand with example : you open http://google.com
- 1.Browser creates a HTTP request.
- 2.sends to the server (google.com).
- 3.server process the HTTP request.
- 4.server sends the HTTP response.

# HTTP Methods.
- 1. GET : read data (fetch the data from Server DB).
- 2. POST : create data (adds new data/resource to the Server DB).
- 3. PUT : fully update (it update completely existing js object in the Server DB).
- 4. PATCH : partial update (it only updates specific field of the object in DB).
- 5. Delete : remove the data.


# HTPP STATUS CODES.
- 2xx (success response): 200-request succeed,201-new resource created, 204-success but no response body.
- 4xx (client errors) : 400-Bad request(invalid/missing input),401-unauthourized,404-not found(response data not found).
- 500 - internal server error(bugs/crashes).

# 2.PATH MODULE.

# What is Path Module?
- The path module is a built-in (core) module in Node.js used to Work with file and folder paths safely and easily.
- ```js
    const path = require("path");
- Handle file paths easily.
- Make code cross-platform.
- Avoid manual slash problems.
- example:
- ```js 
    - Windows uses (\)
    - Linux/Mac uses (/)
    - Path module automatically handles this difference.

# Path Module (Commonly used) Methods.

- 1.path.basename() : Returns the file name from a full path(Extracts only the file name).

- 2.path.dirname() : Returns the directory name.

- 3.path.extname() : Returns the file extension(.js,.html,.txt....)Useful for checking file type.

- 4.path.join() : Joins multiple path segments.
- ```js 
    path.join('folder', 'sub', 'file.txt')
    // → 'folder/sub/file.txt'
- 5.path.resolve() : Resolves path into an absolute path.

- 6.path.normalize() : Cleans messy paths(Removes: . , .. ,Duplicate slashes).

- 7.path.parse() : Breaks path into object details.
- ```js
    const info = path.parse('/user/local/test/data.txt');
    console.log(info);
    
    o/p:
    {
    root: '/',
    dir: '/user/local/test',
    base: 'data.txt',
    ext: '.txt',
    name: 'data'
    }

- 8.path.format() : Opposite of parse(),Takes object and rebuilds path.

- 9.path.isAbsolute() : Checks whether path is absolute.
