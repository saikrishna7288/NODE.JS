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

# What is { "Content-Type": "text/plain" } ?
- This is an HTTP Response Header.It tells the browser: “What type of data am I sending?”
- eg :
- ```js 
    res.writeHead(200, { "Content-Type": "text/plain" });
- Means:
- 200 → Status Code (Success)
- Content-Type → Type of data being sent
- text/plain → Plain text

# common content types:
- ```js
    | Content-Type           | Meaning                  |
    | ---------------------- | ------------------------ |
    | text/plain             | Normal plain text        |
    | text/html              | HTML webpage             |
    | application/json       | JSON data (API response) |
    | image/png              | PNG image                |
    | text/css               | CSS file                 |
    | application/javascript | JS file                  |

# common error:
- ```js
    Error [ERR_STREAM_WRITE_AFTER_END]: write after end
    // this error means you called res.end() more than once.

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

# 3.OS MODULE

# What is OS Module?
- The os module is a built-in Node.js module that provides information about the operating system where your Node.js app is running.
- Import like this
- ```js
    const os = require('os');

# What Can OS Module Tell You?
- OS Platform
- OS Version
- CPU details
- Memory details
- Network information
- Logged-in user
- System uptime (How long your system has been running (in seconds)).

# What is Endianness?
- Endianness tells: How bytes of a multi-byte number are stored in computer memory.
- Example:A 32-bit integer = 4 bytes.
- But how those 4 bytes are arranged in memory depends on endianness.

# Types (Big Endian(BE) & Little Endian(LE)).
- BE : Big byte comes first.
- LE : small byte comes first.
- example : Take this hexadecimal number - 0x12345678 (it takes 4 bytes)--> 12 34 56 78.
- 12 34 56 78 (BE - Highest value byte stored at lowest memory address.)
- 78 56 34 12 (LE - Lowest value byte stored at lowest memory address.)
- You can check system endianness:
- ```js
    const os = require('os');
    console.log(os.endianness());

# Why Endianness Is Important in Backend?
- Reading binary files
- Network communication
- Working with buffers
- Cryptography
- Low-level system programming
- Cross-platform applications

# OS Module important methods.
- 1.platform() :Tells which operating system platform you are using.
- Example: win32, linux, darwin

- type() : Tells the full name of the operating system.
- Example: Windows_NT, Linux

- release() : Tells the version number of the operating system.
- Example: 10.0.26200

- arch() : Tells the CPU architecture of your system.
- Example: x64, arm

- totalmem() : Tells the total RAM available in your system (in bytes).

- freemem() : Tells how much RAM is currently free (in bytes).

- cpus() : Gives detailed information about all CPU cores (model, speed, etc.).

- networkInterfaces() : Shows network details like IP address, MAC address, etc.

- hostname() : Returns the name of your computer/server.

- uptime() : Tells how long the system has been running (in seconds).

# Use of OS Module.
- Monitoring System Health (CPU usage,Memory usage,Disk space,Server uptime).
- Logging Server Information (Recording system details when server starts).
- DevOps Dashboards (CPU usage graph,Memory usage graph,Network usage).

# FS MODULE
# What is FS Module?
- The fs module is a built-in Node.js module that allows you to work with files and folders in your system.
- ```js
    const fs = require('fs');

# Key Features
- Every file operation has 2 versions:
- Asynchronous & Synchronous.

# Synchronous (Blocking)
- Waits until the operation completes.
- Stops next code execution.
- Finish this task first, then move to next.
- eg:
- ```js
    fs.writeFileSync();

# Asynchronous (Non-blocking)
- Does not wait(Continues execution).
- Handles result using callback.
- Start this task, continue other work, handle result later.
- eg :
- ```js 
    fs.writeFile();

# When to Use Which?
- Small operations → Synchronous is fine
- Large files / heavy work → Use Asynchronous
- Real-world backend apps → Mostly asynchronous(Because Node.js is single-threaded).

# What is UTF-8?
- UTF-8 stands for:Unicode Transformation Format – 8-bit.
- It is a character encoding system.(means-->Converting characters (letters, numbers, emojis, symbols)Into bytes (binary form).So ,computers can store and transmit them).
- UNICODE -> A universal standard that assigns a unique number (code point) to every character in every language.
- Unicode defines the number.
- UTF-8 defines how that number is stored in bytes.
- In NODE.js by default :
- ```js 
    fs.readFileSync("file.txt");
- returns a buffer of raw binary data.
- if we want text :
- ```js
    fs.readFileSync("file.txt", "utf8");
- Now Node converts binary → string using UTF-8.

# why UTF-8 and why not ASCII ?
- ASCII value only supports english but utf-8 supports most of the languages.

# Note
- There are other encodings similar to UTF-8 that also work with Unicode.
- ```js
    UTF-16 -> Uses 2 bytes for most characters.Uses 4 bytes for special characters (like emojis).

    UTF-32 -> Unicode encoding using  fixed length (Always uses 4 bytes per character)
    ASCII (older, limited)
    ISO-8859-1 (Latin-1)

# Why Do We Need Encoding?
- Computers do NOT understand:A,ह,త,😊.. and they only undersatnd binary (0100011...)
- so encoding converts those Character → Binary → Store in file → Decode back to character.

# common file operation.
- in fsmodule.js