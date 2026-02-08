# DAY-01

# what is Node.js?
Node.js is an cross-platform JavaScript runtime environment that allows you to run JavaScript outside the browser.

- cross-platform:Cross-platform means software that can run on different operating systems without changing the code.
- Outside the browser:before node.js js will only run on web/browser but the node will allow the js code without web/browser like terminal...

# every browser as a js engine to run js programs and the node also have js engine same as chrome that is V8 engine(in simple Node.js is a JavaScript runtime built on Chrome’s V8 engine).

# ⚙️ Architecture of Node.js
- 1.Single-Threaded : Node.js uses one main thread to handle all requests.
- 2.Event-Driven : Everything works using events & callbacks.
- 3.Non-Blocking (Asynchronous) : Node does NOT wait for slow tasks (file read, DB, API calls)
    It sends them to the background and continues working.

# What is npm?
npm (Node Package Manager) is used to:
- Install libraries
- Manage dependencies
- Run scripts

# Advantages
- Fast execution.
- Large ecosystem.
- Highly scalable.

# Is Node.js really single-threaded?
- Main JavaScript execution → Single-threaded
- Uses event loop
- But internally uses thread pool (libuv)

# Thread pool ?
- A collection of pre-created worker threads that are ready to perform background tasks.