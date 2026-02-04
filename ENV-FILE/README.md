# what is Environment Variables?
- Environment variables are key–value pairs stored outside your code that your application can read while running.
- To store these environment variables we use .env files.

# Why do we even need them?
- Security (To hide the sensitive data like - Database password,JWT secret,API keys....).
- Different Environments.

# Never commit .env files to GitHub ,instead add to .gitignore for that .env file.

# Example how we use .env files in Node.js
- Create .env file:
- ```js
    PORT=5000
    MONGO_URI=mongodb+srv:
    JWT_SECRET=supersecretkey

- Load environment variables(in index.js or app.js):
- ```js
    require("dotenv").config();

- use them:
- ```js
    const PORT = process.env.PORT;
    const mongoose = require("mongoose");
    mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
    });

# FLOW
- ```js
    .env file
        ↓
    Node.js reads via process.env
        ↓
    Express uses it (DB, JWT, PORT)
        ↓
    React uses only public configs (API URL)


