// get the instanse of express server 
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Import the blog routes
const blog = require("./routes/blog");

// Mount the blog routes at /api/v1
app.use("/api/v1", blog);

// Database connection
const connectWithDb = require("./config/database");
connectWithDb();

// Start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
});

// Default route
app.get("/", (req, res) => {
    res.send(`<h1>This is my homePage baby</h1>`);
});









