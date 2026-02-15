const path = require("path");

// Directory name of current file
console.log("Directory name is :", path.dirname(__filename));
// Output: Directory name is : D:\...\4.path-module

// File name of current file
console.log("File name is:", path.basename(__filename));
// Output: File name is: index.js

// File extension
console.log("File extension:", path.extname(__filename));
// Output: File extension: .js


// join() → joins path segments (relative path)
const joinpath = path.join("/users","documents","node","projects");
console.log("Joined path:", joinpath);
// Output (Windows): \users\documents\node\projects
// Output (Linux/Mac): /users/documents/node/projects


// resolve() → returns absolute path
const resolvepath = path.resolve("user","documents","node","projects");
console.log("Resolved path:", resolvepath);
// Output (example):
// Resolved path: D:\...\4.path-module\user\documents\node\projects


// normalize() → cleans messy paths
const normalizepath = path.normalize("/user/.documents/../node/projects");
console.log("Normalized path:", normalizepath);
// Output (Windows): \user\node\projects
// Output (Linux/Mac): /user/node/projects


// parse() → breaks path into parts
const info = path.parse('/user/local/test/data.txt');
console.log("Path details:", info);
/*
Output:
Path details: {
  root: '/',
  dir: '/user/local/test',
  base: 'data.txt',
  ext: '.txt',
  name: 'data'
}
*/


// format() → rebuilds path from object
const rebuilt = path.format(info);
console.log("Rebuilt path:", rebuilt);
// Output: /user/local/test/data.txt


// isAbsolute() → checks absolute path
console.log(path.isAbsolute('/user/local'));
// Output: true

console.log(path.isAbsolute('data/file.txt'));
// Output: false
