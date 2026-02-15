# STRONG NODE.JS FOUNDATION

# NODE JS IS A SINGLE-THREADED EVENT DRIVEN ARCHITECTURE.
- Event-Driven Architecture is a system where everything happens in response to EVENTS instead of step-by-step instructions.
- single-threaded : instead of "Request → New Thread" ,it does "Request → Event Loop → Async Handling"

# TYPES OF REQUESTS
- 1.Non-Blocking(simple requests) : Do NOT require heavy external resources and it can be handled directly by Event Loop .
- Blocking (Complex Requests) : Require external resources and involve I/O or heavy tasks

# EVENT LOOP.
- It is a mechanism in node.js that continously checks the call stack and queues  to decide what code to execute next,so that node.js can run non-blocking operations using single thread.
- If task is:
- Simple → executes immediately
- Heavy → sends to thread pool

- PRIORITY in checking & executing the tasks.
  call stack >> microtask queue >> callback queue.

- Call Stack : Runs your JS code line by line.
- Callback Queue : Stores completed async tasks.
- Microtask Queue : Stores Promise tasks.

- example:
- code :
- ```js
  console.log("Start");
  setTimeout(() => {
    console.log("Timeout Callback");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Promise Callback");
  });

  console.log("End");
- o/p :
  Start
  End
  Promise Callback
  Timeout Callback

# PROMISES.
- It is an object that represents success(reslove),failure(reject).
- We use a Promise when a task takes time to complete and we want to handle its result later without blocking the program.
- example syntax : 
- ```js
  User.findById(id).then(user => console.log(user));

# Async / Await.
- Async / Await is a way to write asynchronous code in JavaScript that looks synchronous, without blocking the program.
- IN SHORT : "Async/await makes promises easy to read and use".

- same program using promise & Async/Await.
    1.promise (harder to read)
    code:
    - ```js
      getUser()
      .then(user => getOrders(user.id))
      .then(orders => sendResponse  (orders))
      .catch(err => console.log(err));

    2.Async/Await(clean)
    code :
    - ```js
      async function handleRequest() {
      try {
        const user = await getUser();
        const orders = await getOrders  (user.id);
        sendResponse(orders);
      } catch (err) {
        console.log(err);
      }
     }

# An async function always returns a Promise.

# Complete Flow of Node.js Architecture
- ```js
  Step-by-step Flow:
  1️⃣ Client sends request
  2️⃣ Node.js server receives it
  3️⃣ Request stored in Event Queue
  4️⃣ Event Loop picks request
  5️⃣ If simple → executes immediately
  6️⃣ If blocking → sends to Thread Pool / External Resource
  7️⃣ When task completes → callback placed in queue
  8️⃣ Event Loop executes callback
  9️⃣ Response sent back to client

# core modules.
- fs (file system)
- os (system info)
- path (file paths)
- crypto (Password Hashing)
- To import any module use "const module=require("module");".

# Exports.
- There are two main types of exports:
- i.Named Exports — you can export multiple things.
- ii.Default Export — you export one main thing per file(Only one default export is allowed per file).

- Named Export.
- ```js
  math.js
  // Named exports
  export function add(a, b) {
  return a + b;
  }
  export function subtract(a, b) {
  return a - b;
  }
  export const pi = 3.14159;

  app.js
  // Import named exports (must use same  names or rename them)
  import { add, subtract, pi } from './ math.js';
  console.log(add(10, 5)); // 15
  console.log(subtract(10, 5)); // 5
  console.log(pi); // 3.14159

- Default Export.
- ```js
  // Default export (math.js)
  export default function add(a, b) {
    return a + b;
  }

  //import 
  import add from "./math.js";
  console.log(add(5, 3));

# Special variables:
- _filename : It stores the absolute path of the current file, including the file name.
- ```js
  console.log("filename is :", __filename);
  Output: filename is : C:\Users\Rakesh\Documents\nodejs\example1.js
- _dirname :It stores the absolute path of the directory that contains the current file.
- ```js
  console.log("Directory name is :", __dirname);
  Output: Directory name is :C:\Users\Rakesh\Documents\nodejs


# Try-Catch (Sync)
- ```js
  try {
    const data = fs.readFileSync("file.  txt");
  } catch (err) {
    console.log("File not found");
  }

# Async Try-Catch
- ```js 
  async function loadFile() {
  try {
    const data = await fs.promises.readFile("file.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log("Error reading file");
    }
  }

# NODEMON
- Nodemon (Node Monitor) is a development tool that Automatically restarts your Node.js server whenever you save changes in your code.
