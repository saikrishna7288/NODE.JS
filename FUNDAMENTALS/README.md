# STRONG NODE.JS FOUNDATION

# NODE JS IS A EVENT DRIVEN ARCHITECTURE.
- Event-Driven Architecture is a system where everything happens in response to EVENTS instead of step-by-step instructions.
# EVENT LOOP.
- It is a mechanism in node.js that continously checks the call stack and queues  to decide what code to execute next,so that node.js can run non-blocking operations using single thread.

- PRIORITY in checking & executing the tasks.
  call stack >> microtask queue >> callback queue.

- Call Stack : Runs your JS code line by line.
- Callback Queue : Stores completed async tasks.
- Microtask Queue : Stores Promise tasks.

- example:
- code :
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
- example syntax : User.findById(id).then(user => console.log(user));

# Async / Await.
- Async / Await is a way to write asynchronous code in JavaScript that looks synchronous, without blocking the program.
- IN SHORT : "Async/await makes promises easy to read and use".

- same program using promise & Async/Await.
    1.promise (harder to read)
    code:
    getUser()
    .then(user => getOrders(user.id))
    .then(orders => sendResponse(orders))
    .catch(err => console.log(err));

    2.Async/Await(clean)
    code :
    async function handleRequest() {
    try {
      const user = await getUser();
      const orders = await getOrders(user.id);
      sendResponse(orders);
    } catch (err) {
      console.log(err);
    }
   }

# An async function always returns a Promise.

# core modules.
- fs (file system)
- os (system info)
- path (file paths)
- crypto (Password Hashing)
- To import any module use "const module=require("module");".

# Try-Catch (Sync)
- try {
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

